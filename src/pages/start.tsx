import { Stack, Text, View, Box, Image, fadeIn, Divider, Button } from '@cosmoau/ui';
import { Widget } from '@typeform/embed-react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function Start(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title={
          router.query.city ? `${router.query.city} Property Management` : 'Sign Up'
        }
      />
      <View
        inverted
        top={5}
        css={{ background: '$text !important', paddingLeft: '$5', paddingRight: '$5' }}>
        <Stack direction='row' minimal>
          <Stack direction='column' width={50} minimal>
            <Box
              theme='fill'
              css={{
                background: '$accentIHM !important',
                borderBottomRightRadius: '0 !important',
                borderTopRightRadius: '0 !important',
                padding: '$7 $6',

                phone: {
                  borderRadius: '$3 !important',
                  padding: '$6 $5',
                },
              }}>
              <Text
                as='h2'
                css={{
                  animation: `${fadeIn}  0.5s ease-in-out`,
                }}>
                {router.query.city
                  ? `List your home in ${router.query.city}`
                  : 'Sign Up'}
              </Text>
              <Text
                as='h6'
                accent
                css={{
                  animation: `${fadeIn}  0.8s ease-in-out`,
                }}>
                {router.query.email
                  ? `We will send your free earnings estimation, along with information on getting started to ${router.query.email}.`
                  : 'Get your free earnings estimation today.'}
              </Text>
            </Box>
          </Stack>
          <Stack minimal direction='column' width={50} css={{ hidden: 'phone' }}>
            <Image
              src='/images/misc-14.jpg'
              alt='airbnb'
              fill
              css={{
                img: {
                  borderBottomRightRadius: '$3 !important',
                  borderTopRightRadius: '$3 !important',
                },
              }}
            />
          </Stack>
        </Stack>
      </View>
      <View
        container
        top={7}
        bottom={7}
        css={{
          phone: { paddingBottom: '$5', paddingTop: '$5' },
        }}>
        <Stack
          direction='row'
          flex='stretch'
          align='center'
          css={{ animation: `${fadeIn}  0.8s ease-in-out` }}>
          <Stack direction='column'>
            <Box
              theme='fill'
              css={{
                borderRadius: '$3',
              }}>
              <Stack bottom={3}>
                <Widget
                  id='cAmtR2rI'
                  height={700}
                  opacity={0}
                  hidden={{
                    email: router.query.email
                      ? router.query.email.toString()
                      : 'Not provided somehow, Isaac check this',
                    url: 'ihostme.com.au',
                  }}
                  style={{
                    overflowY: 'visible',
                  }}
                />
              </Stack>
              <Divider bottom={5} />
              <Text as='small' accent inline={4}>
                Form not working?
              </Text>
              <a
                href={`https://cosmo-au.typeform.com/to/cAmtR2rI#url=ihostme.com.au&email=${
                  router.query.email ? router.query.email.toString() : 'NA'
                }`}
                target='_blank'
                rel='noreferrer'>
                <Button external small>
                  cosmo-au.typeform.com/to/cAmtR2rI
                </Button>
              </a>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
