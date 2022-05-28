import _ from 'lodash';
import {
  getModuleRichText,
  getModuleSimpleTextWithBackground,
} from './modules';

const moduleQueries = {
  ModuleRichText: getModuleRichText,
  ModuleSimpleTextWithBackground: getModuleSimpleTextWithBackground,
};

const getPreviewOverrideForEnvironment = preview => {
  const isContentfulPreviewSetTrue = process.env.CONTENTFUL_PREVIEW === 'true';
  const previewOverride = isContentfulPreviewSetTrue || preview || false;
  return previewOverride;
};

export async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  ).then(response => response.json());
}

export async function getPageByPath(path, preview) {
  const previewOverride = getPreviewOverrideForEnvironment(preview);
  const entry = await fetchGraphQL(
    `query {
      pageCollection (
        where: { path: "${path}" },
        preview: ${previewOverride ? 'true' : 'false'},
        limit: 1
      ) {
        items {
          sys {
            id
          }
          title
          path
          metaTitle
          metaDescription
          metaImage {
            url
            title
            description
          }
          modulesCollection (limit: 15) {
            items {
              ... on ModuleRichText {
                __typename
                sys {
                  id
                }
              }
              ... on ModuleSimpleTextWithBackground {
                __typename
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }`,
    previewOverride,
  );
  const page = entry?.data?.pageCollection?.items?.[0] || [];

  const hasModules = page?.modulesCollection?.items;
  const pageModules = hasModules
    ? await Promise.all(
        _.map(page.modulesCollection.items, async module => {
          if (!module.sys) return null;

          try {
            const moduleData = await moduleQueries[module.__typename](
              module.sys.id,
              !!preview,
            );
            return moduleData;
          } catch (error) {
            console.log('==== error:', error);
            console.log(`module ${module.sys.id} has issues, skipping`);
            return null;
          }
        }),
      )
    : [];

  if (pageModules) {
    page.modules = [];
    page.modules = _.compact(pageModules);
  }

  return page;
}

export async function getAllPagePaths(preview) {
  const previewOverride = getPreviewOverrideForEnvironment(preview);
  const entry = await fetchGraphQL(
    `query {
      pageCollection (
        where: { path_exists: true },
        preview: ${previewOverride ? 'true' : 'false'},
      ) {
        items {
          path
        }
      }
    }`,
    previewOverride,
  );
  return entry?.data?.pageCollection?.items || [];
}

export async function getSettings(preview) {
  const previewOverride = getPreviewOverrideForEnvironment(preview);
  const entry = await fetchGraphQL(
    `query {
      settingsCollection (
        preview: ${previewOverride ? 'true' : 'false'},
      ) {
        items {
          sys {
            id
          }
          companyName
          logo {
            url
            title
            description
          }
          email
          phone
          instagram
          youtube
          menuLinksCollection (limit: 10) {
            items {
              ... on Page {
                sys {
                  id
                }
                title
                path
              }
            }
          }
        }
      }
    }`,
    previewOverride,
  );
  return entry?.data?.settingsCollection?.items[0] || [];
}
