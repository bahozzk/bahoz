import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import type { PageProps } from '../types';
import Head from 'next/head';
import Script from 'next/script'; // Next.js için script yönetimi

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps<PageProps>): JSX.Element {

  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="publisher" content="Mustafa Can" />
      <meta name="robots" content="index, follow" />
      <meta name="application-name" content="Mustafa Can" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Mustafa Can" />
      <meta name="author" content="Mustafa Can" />
      <meta name="theme-color" content="black" />

      <link rel="shortcut icon" href="https://mc-heads.net/head/BahozzK/400"></link>
      <link rel="apple-touch-icon" href="https://mc-heads.net/head/BahozzK/400" sizes="512x512"></link>
      <title>BahozzK</title>
    </Head>

    {/* Google Tag Manager */}
    <Script
      id="google-tag-manager"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KW2MFKH2');
        `,
      }}
    />

    {/* Google Tag Manager (noscript) */}
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KW2MFKH2"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
    {/* End Google Tag Manager */}

    <Component {...pageProps} />
    <Analytics />
  </>
};

export default MyApp;
