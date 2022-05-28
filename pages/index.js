// import HomePage from 'components/pages/HomePage';
import Layout from 'components/pages/Layout';
import PreviewBanner from 'components/PreviewBanner';
import { getSettings, getPageByPath } from 'lib/api';
import ModulesPage from 'components/pages/ModulesPage';

export default function Index({ preview, settings, pageData }) {
  return (
    <Layout settings={settings} pageData={pageData}>
      {/* <HomePage data={pageData} path={path} /> */}
      <ModulesPage data={pageData} />
      {preview && <PreviewBanner />}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { preview = false } = context;
  const settings = await getSettings(process.env.FORCE_PREVIEW || !!preview);
  const homePath = '/';
  const pageData = await getPageByPath(
    homePath,
    process.env.FORCE_PREVIEW || !!preview,
  );
  return {
    props: {
      settings,
      pageData,
      path: homePath,
      preview,
    },
  };
}
