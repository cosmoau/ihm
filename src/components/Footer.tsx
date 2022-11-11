import { View, Image, Button, Stack, Text, Badge, fadeIn } from '@cosmoau/ui';
import {
  ChatCircle,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Lock,
  Phone,
} from 'phosphor-react';

export default function Footer(): JSX.Element {
  return (
    <>
      <View
        container
        top={6}
        bottom={6}
        css={{ borderTop: '0.1rem solid $borderHover' }}>
        <Stack direction='row' css={{ animation: `${fadeIn}  0.8s ease-in-out` }}>
          <Stack
            direction='column'
            width={50}
            css={{
              phone: {
                height: '30rem',
              },
            }}>
            <Image src='/images/misc-11.jpg' alt='airbnb' fill borderRadius={3} />
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
            <Text as='h5' accent>
              ihostme manages properties that earn $40,000 or more in rental income per
              year. We are interested in speaking to owners of homes and holiday rentals
              that are available for at least 140 nights per year.
            </Text>
            <Stack top={5}>
              <a href='mailto:ihostme@cosmogroup.io'>
                <Badge
                  inline={4}
                  icon={<ChatCircle />}
                  css={{
                    phone: {
                      marginBottom: '$3',
                      marginTop: '$3',
                    },
                  }}>
                  ihostme@cosmogroup.io
                </Badge>
              </a>
              <Badge
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

      <View
        css={{
          background: '$accentIHM !important',
          borderTop: '0.1rem solid $borderHover',
          zIndex: 201,
        }}
        container
        top={6}
        inverted
        bottom={6}>
        <Stack
          direction='row'
          flex='center'
          css={{
            animation: `${fadeIn}  0.8s ease-in-out`,
          }}>
          <Stack direction='column' width={40}>
            <Badge
              theme='border'
              icon={<Image src='/favicon.ico' width={33} height={33} alt='ihostme' />}>
              <Stack>
                <Text
                  as='h4'
                  css={{
                    marginBottom: '0 !important',
                  }}>
                  ihostme
                </Text>
                <Text as='small' accent>
                  Powered by Cosmo
                </Text>
              </Stack>
            </Badge>
            <Text as='h6' top={4} accent>
              The go-to team you can trust to handle your short-term rental hosting and
              holiday home management needs.
            </Text>
          </Stack>
          <Stack
            direction='column'
            width={60}
            align='right'
            css={{
              phone: {
                a: {
                  '&:last-child': {
                    marginRight: 0,
                  },
                  'display': 'block',
                  'marginRight': '$3',
                  'width': '100% !important',
                },
                button: {
                  width: '100% !important',
                },
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '$6',

                svg: {
                  height: 20,
                  width: 20,
                },
                textAlign: 'center',
                verticalAlign: 'middle',
              },
            }}>
            <a href='https://www.facebook.com/cosmogroup.io'>
              <Button theme='fill' inline={4} ariaLabel='Facebook' name='facebook'>
                <FacebookLogo size={20} />
              </Button>
            </a>
            <a
              href='https://www.instagram.com/cosmogroup.io/'
              rel='noreferrer'
              target='_blank'>
              <Button theme='fill' inline={4} ariaLabel='Instagram' name='instagram'>
                <InstagramLogo size={20} />
              </Button>
            </a>
            <a
              href='https://www.linkedin.com/company/cosmoau/'
              rel='noreferrer'
              target='_blank'>
              <Button theme='fill' inline={4} ariaLabel='LinkedIn' name='linkedin'>
                <LinkedinLogo size={20} />
              </Button>
            </a>
            <a href='https://cosmogroup.io/legal' target='_blank' rel='noreferrer'>
              <Button theme='fill' icon={<Lock />}>
                Privacy
                <Text as='span' css={{ hiddenInline: 'phone' }}>
                  &nbsp;Policy
                </Text>
              </Button>
            </a>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
