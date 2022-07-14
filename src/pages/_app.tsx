/* eslint-disable import/no-unresolved */
import { Provider } from '@withcosmo/design-system';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider locked='light'>
      <DefaultSeo
        openGraph={{
          title: 'ihostme - Airbnb, Stayz & Booking.com Management by Cosmo',
          description: 'ihostme are the go-to people for managing the rental of your holiday home and ALL your hosting and property management needs.',
          type: 'website',
          locale: 'en_AU',
          url: 'https://ihostme.com.au',
          site_name: 'ihostme by Cosmo',
          images: [
            {
              url: 'https://ihostme.com.au/images/meta.jpg',
              alt: 'Cosmo',
            },
          ],
        }}
        titleTemplate={'%s - ihostme by Cosmo'}
      />

      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
