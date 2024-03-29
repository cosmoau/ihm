import { Provider, useTheme } from "@cosmoau/ui";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { useState, useEffect } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { isDarkTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  return (
    <Provider dark={mounted && isDarkTheme}>
      <DefaultSeo
        openGraph={{
          description:
            "We are your local experts for managing the rental of your holiday home and all your Airbnb and short-term property management needs.",
          images: [
            {
              alt: "Cosmo",
              url: "https://ihostme.com.au/images/meta.jpg",
            },
          ],
          locale: "en_AU",
          site_name: "ihostme",
          title: "ihostme - Australian Airbnb, Stayz & Booking.com Management",
          type: "website",
          url: "https://ihostme.com.au",
        }}
        titleTemplate={"%s | ihostme"}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </Provider>
  );
}

export default MyApp;
