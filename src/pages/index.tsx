/** @format */

import {
  Stack,
  Text,
  View,
  Box,
  Badge,
  Button,
  Image,
  Avatar,
} from '@withcosmo/design-system';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { Heart } from 'phosphor-react';

export default function Home(): JSX.Element {
  const locations = [
    'Geelong',
    'Portarlington',
    'Queenscliff',
    'Point Lonsdale',
    'Ocean Grove',
    'Barwon Heads',
    'Torquay',
    'Jan Juc',
    'Anglesea',
    'Bellarine Peninsula',
    'Aireys Inlet',
    'Fairhaven',
    'Lorne',
    'Apollo Bay',
    'Surf Coast',
    'Mornington',
    'Mt Eliza',
    'Mt Martha',
    'Sorrento',
    'Portsea',
    'Rye',
    'Flinders',
    'Balnarring',
    'Somers',
    'Red Hill',
    'Safety Beach',
    'Mornington Peninsula',
    'Cowes',
    'Smiths Beach',
    'Ventnor',
    'Cape Woolamai',
    'Rhyll',
    'San Remo',
    'Phillip Island',
    'Cape Paterson',
    'Venus Bay',
    'Inverloch',
    'Bass Coast',
    'South Gippsland',
    'Hobart',
  ];

  return (
    <>
      <NextSeo title='ihostme by Cosmo' titleTemplate='%s' />
      <View inverted container top={7} bottom={7}>
        <Stack direction='row'>
          <Stack
            direction='column'
            width={50}
            top={6}
            bottom={6}
            css={{
              paddingRight: '$7',

              phone: {
                paddingRight: '$3',
                paddingTop: 0,
              },
            }}>
            <Text as='h1'>Airbnb, Stayz, Booking.com and Homes & Villas Management</Text>
            <Text as='h5' accent bottom={5}>
              <b>ihostme® by Cosmo</b> is the go-to team for managing the rental of your
              holiday home and all your hosting and short term property management needs.
              We maximise your occupancy by listing your property on the top booking
              sites.
            </Text>
            <Button name='list' theme='solid' inline={4} ariaLabel='List your home'>
              <Link href='/start'>
                <a>List your home</a>
              </Link>
            </Button>
            <Button name='chat' ariaLabel='Chat with our team'>
              <a href='mailto:contact@cosmogroup.io'>Chat with us</a>
            </Button>
          </Stack>
          <Stack
            direction='column'
            width={50}
            css={{
              phone: {
                height: '30rem',
              },
            }}>
            <Image
              src='/images/misc-01.jpg'
              alt='airbnb'
              layout='fill'
              borderRadius={3}
              objectFit='cover'
              priority
            />
          </Stack>
        </Stack>
      </View>
      <View container top={7}>
        <Stack direction='row'>
          <Stack direction='column' width={60} offset={20} align='center'>
            <a href='https://cosmogroup.io'>
              <Badge theme='pink' icon={<Heart />}>
                ihostme is now part of Cosmo
              </Badge>
            </a>
            <Text as='h3' top={5}>
              ihostme operates out of the top holiday destinations
            </Text>
            <Text as='h5' bottom={6}>
              We are a team of highly skilled and experienced property managers who are
              dedicated to providing the best service to owners and investors, from Point
              Lonsdale to Hobart.
            </Text>
          </Stack>
        </Stack>
        <Stack direction='row'>
          <Stack direction='column' align='center'>
            <Stack>
              <Link href='/locations'>
                <a>
                  {locations.map((location, index) => (
                    <Stack
                      key={index}
                      css={{
                        display: 'inline-block',
                        marginRight: '$4',
                        paddingBottom: '$4',
                      }}>
                      <Badge
                        theme='borderHover'
                        css={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                        <Stack
                          css={{
                            alignItems: 'center',
                            display: 'flex',
                            marginRight: '$2',
                            verticalAlign: 'middle',
                          }}>
                          <Avatar
                            image={`/images/location-${location
                              .toLowerCase()
                              .replace(/\s/g, '')}.jpg`}
                            width={15}
                            fallback=''
                          />{' '}
                        </Stack>

                        <Text as='h6' inline={'auto'} accent>
                          {location}
                          {index !== locations.length - 1 ? '' : ''}
                        </Text>
                      </Badge>
                    </Stack>
                  ))}
                </a>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </View>
      <View container top={7}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={33}>
            <Box image='/images/misc-02.jpg'>
              <Text as='h4'>Your One Stop Hosting Shop</Text>
              <Text as='h6'>
                We understand that your vacation rental is more than just an
                investment—it’s your home away from home.
              </Text>
              <Text as='h6'>
                That’s why we offer a complete suite of services to help you manage your
                property, from real-time pricing optimisation to guest and bookings
                management.
              </Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={33}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box image='/images/misc-03.jpg'>
              <Text as='h4'>Simple, Easy Pricing</Text>
              <Text as='h6'>
                Our standard management fee is 20% + GST for fully hosted clients, or 14%
                + GST for those who already have their own housekeeping and maintenance
                team in place.
              </Text>
              <Text as='h6'>
                We also have a one-time set up fee from $400, and third-party charges are
                at cost.
              </Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={33}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box image='/images/misc-04.jpg'>
              <Text as='h4'>Your Holiday Home in Good Hands</Text>
              <Text as='h6'>
                We&apos;ve developed an intuitive app that gives you full transparency of
                bookings and property performance.
              </Text>
              <Text as='h6'>
                We also have an experienced client support team available 7/11 and
                specialist housekeepers to take care of all the little details.
              </Text>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
