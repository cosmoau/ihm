import { View, Image, Button, Stack, Text, Badge } from '@withcosmo/design-system';
import dayjs from 'dayjs';
import Link from 'next/link';
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
              <Image src='/images/misc-05.jpg' alt='airbnb' layout='fill' borderRadius={3} objectFit='cover' />
            </Stack>
            <Stack
              top={6}
              bottom={6}
              direction='column'
              width={50}
              css={{
                paddingLeft: '$7',
                phone: {
                  paddingLeft: '$3',
                  paddingBottom: 0,
                },
              }}>
              <Text as='h3'>Let us help you unlock your property’s earning potential today</Text>
              <Text as='h5' bottom={3}>
                ihostme® manage properties with potential to earn in excess of $50,000 gross income per year through short term rentals. Please contact us if your property is
                available for a minimum of 140 nights per year and we will provide a free estimate.
              </Text>
              <Stack bottom={6}>
                <a href='mailto:contact@cosmogroup.io'>
                  <Badge
                    theme='border'
                    inline={4}
                    icon={<ChatCircle />}
                    css={{
                      phone: {
                        marginTop: '$2',
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
                      marginTop: '$2',
                    },
                  }}>
                  <a href='tel:+61370355800'>(03) 7035 5800</a>
                </Badge>
              </Stack>

              <Button ariaLabel='Get an estimate' name='estimate'>
                <Link href='/start'>
                  <a>Get an estimate</a>
                </Link>
              </Button>
            </Stack>
          </Stack>
        </View>
      )}

      <View
        inverted
        container
        top={5}
        bottom={5}
        css={{
          zIndex: '1 !important',
        }}>
        <Stack
          direction='row'
          flex='center'
          css={{
            zIndex: '1 !important',
          }}>
          <Stack
            direction='column'
            width={40}
            css={{
              hidden: 'phone',
            }}>
            <Text as='h6' accent>
              ihostme® by Cosmo
            </Text>
          </Stack>
          <Stack
            direction='column'
            width={60}
            align='right'
            css={{
              phone: {
                textAlign: 'center',
              },
            }}>
            <Text as='h6' inline={4} accent>
              <a href='https://cosmogroup.io/legal/privacy' target='_blank' rel='noreferrer'>
                Privacy Policy
              </a>
            </Text>
            <Text as='h6' inline={4} accent>
              <a href='https://cosmogroup.io/legal/service' target='_blank' rel='noreferrer'>
                Terms of Service
              </a>
            </Text>
            <Text as='h6' inline={4} accent>
              <a href='https://cosmogroup.io/legal/occupant' target='_blank' rel='noreferrer'>
                Occupancy Policy
              </a>
            </Text>
          </Stack>
        </Stack>
        <Stack
          css={{
            opacity: 0.42,
          }}
          direction='row'
          top={6}>
          <Stack align='center' direction='column'>
            <Text accent as='small' bottom={2} css={{ marginBottom: '0 !important', visible: 'phone' }}>
              © {dayjs().format('YYYY')} Cosmo. Level 22, 120 Spencer St, Melbourne, Victoria 3000, Australia
            </Text>
            <Text accent as='small' css={{ fontSize: '1.1rem' }}>
              We are not financial advisors, lawyers or accountants. Always double-check any piece of information before taking action. We partner with{' '}
              <Text
                as='span'
                css={{
                  borderBottom: '0.1rem solid $border',
                }}
                inline={'auto'}>
                <a href='https://planare.dev'>Planare LLC</a>
              </Text>{' '}
              for our software and data needs.
            </Text>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
