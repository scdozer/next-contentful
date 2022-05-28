import Layout from 'components/pages/Layout';
import ModulesPage from 'components/pages/ModulesPage';
import PreviewBanner from 'components/PreviewBanner';
import { getSettings, getAllPagePaths, getPageByPath } from 'lib/api';

export default function Page({ preview, settings, pageData }) {
  return (
    <Layout settings={settings} pageData={pageData}>
      <ModulesPage data={pageData} />
      {preview && <PreviewBanner />}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { params, preview = false } = context;
  const settings = await getSettings(process.env.FORCE_PREVIEW || !!preview);
  const pageData = await getPageByPath(
    params.paths[0],
    process.env.FORCE_PREVIEW || !!preview,
  );

  return {
    props: {
      settings,
      pageData,
      preview,
    },
  };
}

export async function getStaticPaths(context) {
  const { preview = false } = context;
  const allPages = await getAllPagePaths(process.env.FORCE_PREVIEW || preview);
  const paths =
    allPages
      ?.filter(page => {
        if (page.path == '/') {
          return false;
        }
        return true;
      })
      .map(({ path }) => {
        return `/${path}`;
      }) ?? [];
  return {
    paths,
    fallback: false,
  };
}
