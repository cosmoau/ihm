/** @format */

import { getCssText } from '@withcosmo/design-system';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

export default function Document(): JSX.Element {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='description'
          content='ihostme are the go-to people for managing the rental of your holiday home and ALL your hosting and property management needs.'
        />
        <meta
          name='keywords'
          content='ihostme, hosting, property, management, rental, stayz, booking, airbnb, stayz, cosmo, cosmogroup.io, booking, airbnb'
        />

        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#d33b95' />
        <meta name='msapplication-TileColor' content='#981a64' />
        <meta name='theme-color' content='#fbd5ec' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          strategy='beforeInteractive'
          defer
          src='https://api.pirsch.io/pirsch.js'
          id='pirschjs'
          data-code='Ef2zyoQZNHdet4OefRonvDGqc2NjYIQD'
        />{' '}
      </body>
    </Html>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Document.getInitialProps = async function getInitialProps(ctx: any): Promise<any> {
  const results = await ctx.defaultGetInitialProps(ctx);
  const stitchesCssString = getCssText();

  if (!stitchesCssString) {
    await ctx.renderPage();
  }

  return {
    ...results,
    styles: (
      <>
        {results.styles}
        <style>
          {`
    #Smallchat {
        z-index: 10 !important;
    }
            html {
              font-size: 62.5%;
              position: relative;
              height: 100%;
              margin: 0;
              padding: 0;
              border: 0;

            } 
            body {
              font-family: 'Untitled Sans', sans-serif;
              font-size: 1.6rem;
              line-height: 1.6;
              margin: 0;
              height: 100%;
            }
            * {
              box-sizing: border-box;
              color: inherit;
              margin: 0 auto;
            } 

          `}
        </style>
        <style dangerouslySetInnerHTML={{ __html: stitchesCssString }} id='stitches' />
      </>
    ),
  };
};
