import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import type { PageProps } from '../types';
import Head from 'next/head';
import Script from 'next/script';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps<PageProps>): JSX.Element {
  return (
    <>
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
        <link
          rel="shortcut icon"
          href="https://mc-heads.net/head/BahozzK/400"
        ></link>
        <link
          rel="apple-touch-icon"
          href="https://mc-heads.net/head/BahozzK/400"
          sizes="512x512"
        ></link>
        <title>BahozzK</title>
      </Head>

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-MTN77PVVGX"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MTN77PVVGX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* End Google Analytics */}

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
