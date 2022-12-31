import { getCssText } from "@cosmoau/ui";
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

type Props = {
  css: string;
};

class Document extends NextDocument<Props> {
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
          <style id="stitches" dangerouslySetInnerHTML={{ __html: " " + this.props.css }} />
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="ihostme are the go-to people for managing the rental of your holiday home and ALL your hosting and property management needs."
          />
          <meta
            name="keywords"
            content="ihostme, hosting, property, management, rental, stayz, booking, airbnb, stayz, cosmo, cosmogroup.io, booking, airbnb"
          />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d33b95" />
          <meta name="msapplication-TileColor" content="#981a64" />
          <meta name="theme-color" content="#fbd5ec" />
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
