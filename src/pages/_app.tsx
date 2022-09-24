/* eslint-disable import/no-unresolved */
import { Provider } from '@withcosmo/design-system';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider locked='light' default='light'>
      <DefaultSeo
        openGraph={{
          description: 'ihostme are the go-to people for managing the rental of your holiday home and ALL your hosting and property management needs.',
          images: [
            {
              alt: 'Cosmo',
              url: 'https://ihostme.com.au/images/meta.jpg',
            },
          ],
          locale: 'en_AU',
          site_name: 'ihostme by Cosmo',
          title: 'ihostme - Airbnb, Stayz & Booking.com Management by Cosmo',
          type: 'website',
          url: 'https://ihostme.com.au',
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
