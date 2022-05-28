import styled from 'styled-components';
import Head from 'next/head';
import Header from 'components/Header';

const Container = styled.div`
  width: 100%;
`;

export default function Layout({ pageData, settings, children }) {
  const { metaTitle, metaDescription, metaImage } = pageData;
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:image" content={metaImage.url} key="ogimage" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />

        {/* facebook/opengraph tags */}
        <meta property="og:site_name" content={metaTitle} key="ogsitename" />
        <meta property="og:title" content={metaTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={metaDescription}
          key="ogdescription"
        />
        <meta property="og:image" content={metaImage.url} key="ogimage" />

        {/* twitter tags */}
        <meta
          property="twitter:card"
          content={metaImage.url}
          key="twittercard"
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GAID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GAID}', {
        page_path: window.location.pathname,
      });
    `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WQLH9XW')
    `,
          }}
        /> */}
      </Head>
      <Header settings={settings} />
      <Container>{children}</Container>
    </>
  );
}
