import _ from 'lodash';
import { fetchGraphQL } from './api';

const setDelay = (delay = 500) =>
  new Promise(resolve => _.delay(resolve, delay));

export async function getModuleRichText(id, preview = false) {
  await setDelay();
  const richText = await fetchGraphQL(
    `query {
      moduleRichText(id:"${id}", preview: ${preview.toString()}) {
        title
        content {
            json
        }
      }
    }`,
    preview,
  );
  return richText;
}

export async function getModuleSimpleTextWithBackground(id, preview = false) {
  await setDelay();
  const simpleTextWithBackground = await fetchGraphQL(
    `query {
        moduleSimpleTextWithBackground(id:"${id}", preview: ${preview.toString()}) {
          title
          shortDescription
          background {
              url
          }
        }
      }`,
    preview,
  );
  return simpleTextWithBackground;
}
