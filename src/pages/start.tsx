/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Text, View, Box, Badge } from '@cosmo-au/design-system';
import { Widget } from '@typeform/embed-react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function Start(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <NextSeo title={router.query.city ? `${router.query.city} Property Management` : 'Get Started'} />

      <View inverted container top={8} bottom={8}>
        <Stack direction='row'>
          <Stack direction='column' align='center'>
            <Text as='h1'>{router.query.city ? `List your home in ${router.query.city}` : 'Get Started'}</Text>
            <Text as='h5' accent>
              Get your free earnings estimation and chat with our team to see how we can help you.
            </Text>
          </Stack>
        </Stack>
      </View>
      <View container top={8} bottom={8}>
        <Stack direction='row'>
          <Stack direction='column' align='center'>
            <Box theme='border'>
              <Widget
                id='niHmNErF'
                style={{
                  height: '55.0rem',
                  overflowY: 'visible',
                }}
              />
              <Badge theme='pink'>Please note, all sign ups and estimations are provided by our parent company, Cosmo.</Badge>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
