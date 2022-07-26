import { View, Image, Button, Stack, Text, Element, Badge } from '@withcosmo/design-system';
import Link from 'next/link';
import { ChatCircle, Phone } from 'phosphor-react';

export default function Footer(): JSX.Element {
  return (
    <>
      <View container bottom={8}>
        <Stack
          top={8}
          direction='row'
          css={{
            borderTop: '1px solid $border',
          }}>
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
            <Text as='h3'>Let us help you unlock your property’s earning potential today!</Text>
            <Text as='h5' bottom={3}>
              ihostme® manage properties with potential to earn in excess of $50,000 gross income per year through short term rentals. Please contact us if your property is
              available for a minimum of 140 nights per year and we will provide a free estimate.
            </Text>
            <Element bottom={6}>
              <Badge
                theme='border'
                inline={4}
                icon={<ChatCircle />}
                css={{
                  phone: {
                    marginTop: '$2',
                  },
                }}>
                <a href='mailto:contact@cosmogroup.io'>contact@cosmogroup.io</a>
              </Badge>
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
            </Element>
            <Button aria-label='Get an estimate'>
              <Link href='/start'>
                <a>Get an estimate</a>
              </Link>
            </Button>
          </Stack>
        </Stack>
      </View>
      <View
        inverted
        container
        top={6}
        bottom={6}
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
              ihostme® - part of the Cosmo family.
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
              <a href='https://cosmogroup.io/legal/privacy' target='_blank'>
                Privacy Policy
              </a>
            </Text>
            <Text as='h6' inline={4} accent>
              <a href='https://cosmogroup.io/legal/service' target='_blank'>
                Terms of Service
              </a>
            </Text>
            <Text as='h6' inline={4} accent>
              <a href='https://cosmogroup.io/legal/occupant' target='_blank'>
                Occupancy Policy
              </a>
            </Text>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
