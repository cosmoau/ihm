import { Stack, Image, Text, View, Button, Box, fadeIn } from '@cosmoau/ui';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Custom404(): JSX.Element {
  return (
    <>
      <NextSeo title='Page not found' />
      <View inverted top={5} css={{ background: '$text !important', paddingLeft: '$5', paddingRight: '$5' }}>
        <Stack direction='row' minimal>
          <Stack direction='column' width={50} widthPhone={55} minimal>
            <Box
              theme='fill'
              css={{
                background: '$accentIHM !important',
                borderBottomRightRadius: '0 !important',
                borderTopRightRadius: '0 !important',
                padding: '$7 $6',

                phone: {
                  padding: '$6 $5',
                },
              }}>
              <Text
                as='h2'
                css={{
                  animation: `${fadeIn}  0.5s ease-in-out`,
                }}>
                <Text as='span' css={{ hiddenInline: 'phone' }}>
                  Page&nbsp;
                </Text>
                Not Found
              </Text>
            </Box>
          </Stack>
          <Stack minimal direction='column' width={50} widthPhone={45}>
            <Image
              src='/images/misc-09.jpg'
              alt='
                An overhead shot of the Great Ocean Road, where we wish we were driving right now.'
              fill
              placeholder='blur'
              blurDataURL='/images/misc-09.jpg'
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
        <Stack direction='row' css={{ animation: `${fadeIn}  0.8s ease-in-out` }}>
          <Stack direction='column'>
            <Text as='h3'>Sorry, the page you are looking for is not available. </Text>
            <Text as='p' bottom={6}>
              Feel free to browse our site from the menu at the top of the page.
            </Text>
            <Link href='/'>
              <Button ariaLabel='Go to our homepage'>Go to our homepage</Button>
            </Link>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
