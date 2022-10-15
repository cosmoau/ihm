import { View, Image, Button, Stack, Text, Badge, Avatar } from '@cosmoau/ui';
import { useRouter } from 'next/router';
import { ChatCircle, Phone } from 'phosphor-react';

export default function Footer(): JSX.Element {
  const router = useRouter();
  return (
    <>
      {router.pathname !== '/start' && router.pathname !== '/contact' && (
        <View container top={8} bottom={7}>
          <Stack direction='row'>
            <Stack
              direction='column'
              width={50}
              css={{
                phone: {
                  height: '30rem',
                },
              }}>
              <Image
                src='/images/misc-06.jpg'
                alt='airbnb'
                layout='fill'
                borderRadius={3}
                objectFit='cover'
              />
            </Stack>
            <Stack
              top={6}
              bottom={6}
              direction='column'
              width={50}
              css={{
                paddingLeft: '$7',
                phone: {
                  paddingBottom: 0,
                  paddingLeft: '$3',
                },
              }}>
              <Text as='h3'>
                Let us help you unlock your property’s earning potential today
              </Text>
              <Text as='h5'>
                ihostme® manage properties with potential to earn in excess of $50,000
                gross income per year through short term rentals. Please contact us if
                your property is available for a minimum of 140 nights per year and we
                will provide a free estimate.
              </Text>
              <Stack top={6}>
                <a href='mailto:contact@cosmogroup.io'>
                  <Badge
                    theme='border'
                    inline={4}
                    icon={<ChatCircle />}
                    css={{
                      phone: {
                        marginBottom: '$3',
                        marginTop: '$3',
                      },
                    }}>
                    contact@cosmogroup.io
                  </Badge>
                </a>
                <Badge
                  theme='border'
                  inline='auto'
                  icon={<Phone />}
                  css={{
                    phone: {
                      marginBottom: '$3',
                      marginTop: '$3',
                    },
                  }}>
                  <a href='tel:+61370355800'>(03) 7035 5800</a>
                </Badge>
              </Stack>
            </Stack>
          </Stack>
        </View>
      )}

      <View inverted container top={6} bottom={6}>
        <Stack direction='row' css={{ visible: 'phone' }} bottom={6}>
          <Stack direction='column'>
            <Text as='h3'>ihostme</Text>
            <Text as='h6' accent>
              The go-to team you can trust to handle your short-term rental hosting and
              holiday home management needs.
            </Text>
          </Stack>
        </Stack>

        <Stack direction='row' flex='center'>
          <Stack direction='column' width={40} widthPhone={60}>
            <Stack bottom={5}>
              <Text
                as='h3'
                inline={5}
                css={{
                  hidden: 'phone',
                  verticalAlign: 'middle',
                }}>
                ihostme
              </Text>

              <Badge
                icon={
                  <Avatar
                    image='/images/cosmo.png'
                    width={20}
                    fallback=''
                    css={{
                      marginTop: '-0.1rem',
                      verticalAlign: 'middle',
                    }}
                  />
                }>
                Proudly part of Cosmo
              </Badge>
            </Stack>
            <Text as='h6' accent css={{ hidden: 'phone' }}>
              The go-to team you can trust to handle your short-term rental hosting and
              holiday home management needs.
            </Text>
            <a href='https://cosmogroup.io'></a>
          </Stack>
          <Stack direction='column' width={60} widthPhone={40} align='right'>
            <Button>Privacy Policy</Button>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
