/* eslint-disable react/no-danger */
import { getCssText } from "@cosmoau/ui";
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

type I = {
  css: string;
};

class Document extends NextDocument<I> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps({ renderPage }: DocumentContext): Promise<any> {
    const page = await renderPage();
    const css = getCssText();

    return { ...page, css };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: " " + this.props.css }} id="stitches" />
          <meta charSet="UTF-8" />
          <meta
            content="ihostme are the go-to people for managing the rental of your holiday home and ALL your hosting and property management needs."
            name="description"
          />
          <meta
            content="ihostme, hosting, property, management, rental, stayz, booking, airbnb, stayz, cosmo, cosmogroup.io, booking, airbnb"
            name="keywords"
          />

          <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/site.webmanifest" rel="manifest" />
          <link color="#d33b95" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <meta content="#981a64" name="msapplication-TileColor" />
          <meta content="#fbd5ec" name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
