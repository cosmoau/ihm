/* eslint-disable @typescript-eslint/no-explicit-any */
import { Widget } from '@typeform/embed-react';
import { Stack, Text, View, Box } from '@withcosmo/design-system';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function Start(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <NextSeo title={router.query.city ? `${router.query.city} Property Management` : 'Get Started'} />
      <View inverted container top={7} bottom={8}>
        <Stack direction='row'>
          <Stack direction='column' align='center'>
            <Text as='h2'>{router.query.city ? `List your home in ${router.query.city}` : 'Get Started'}</Text>
            <Text as='h5' accent>
              Get your free earnings estimation and chat with our team to see how we can help you.
            </Text>
          </Stack>
        </Stack>
      </View>
      <View inverted container bottom={8}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={80} offset={10} widthTablet={100} offsetTablet={0} align='center'>
            <Box
              theme='fill'
              css={{
                '*': {
                  fontSize: '$h1 !important',
                },
                borderRadius: '$3',
              }}>
              <Widget
                id='Va37c3wL'
                opacity={0}
                height={666}
                hidden={{
                  url: 'ihostme.com.au',
                }}
                style={{
                  overflowY: 'visible',
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
