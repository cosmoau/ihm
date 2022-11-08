import { Stack, Text, View, Box, Badge, Image, Avatar, Input, fadeIn } from '@cosmoau/ui';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function Home(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState('');

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
      <NextSeo title='ihostme' titleTemplate='%s' />

      <View
        inverted
        top={5}
        css={{ background: '$text !important', paddingLeft: '$5', paddingRight: '$5' }}>
        <Stack direction='row' minimal>
          <Stack direction='column' width={50} minimal>
            <Box
              theme='fill'
              css={{
                '::placeholder': {
                  color: '$text',
                  fontSize: '$p !important',
                  opacity: 0.6,
                },
                'background': 'rgb(33, 52, 68) !important',
                'borderBottomRightRadius': '0 !important',
                'borderTopRightRadius': '0 !important',

                'button': {
                  background: '$blueOverlay !important',
                  borderColor: '$blueBorder !important',
                  color: '$text !important',
                  fontWeight: 'bold !important',
                  opacity: 1,
                },

                'padding': 'calc($8 * 1.5) $6',

                'phone': {
                  borderBottomLeftRadius: '0 !important',
                  borderBottomRightRadius: '0 !important',
                  borderTopLeftRadius: '$3 !important',
                  borderTopRightRadius: '$3 !important',
                  padding: '$6 $5',
                },
              }}>
              <Text
                as='h1'
                css={{
                  animation: `${fadeIn}  0.5s ease-in-out`,
                }}>
                Airbnb and Holiday Home Management on all the major booking platforms.
              </Text>
              <Text
                as='h5'
                accent
                bottom={6}
                css={{
                  animation: `${fadeIn}  0.8s ease-in-out`,
                }}>
                We're your local short-term property management experts. With{' '}
                <b>ihostme</b>, you can achieve better occupancy rates and revenue on
                Airbnb, Stayz, Vrbo, HomeAway, Booking.com and Homes & Villas Management
                by Marriott.
              </Text>

              <Input
                listen
                type='email'
                placeholder='Your email address'
                onChange={(e): void => setEmail(e.target.value)}
                submitFunction={(): void => {
                  if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    router.push(`/start?email=${email}`);
                  } else {
                    toast.error('Please enter a valid email address');
                  }
                }}
                submitValid
                submit='💌 Free estimate'
                css={{
                  animation: `${fadeIn} 1s ease-in-out`,
                }}
              />
            </Box>
          </Stack>
          <Stack
            minimal
            direction='column'
            width={50}
            css={{
              animation: `${fadeIn} 0.5s ease-in-out`,
              phone: { height: '40rem' },
            }}>
            <Image
              src='/images/misc-07.jpg'
              alt='airbnb'
              fill
              css={{
                img: {
                  borderBottomRightRadius: '$3 !important',
                  borderTopRightRadius: '$3 !important',

                  phone: {
                    borderBottomLeftRadius: '$3 !important',
                    borderBottomRightRadius: '$3 !important',
                    borderTopLeftRadius: '0 !important',
                    borderTopRightRadius: '0 !important',
                  },
                },
              }}
            />
          </Stack>
        </Stack>
      </View>

      <View container top={7}>
        <Stack
          direction='row'
          align='center'
          css={{ animation: `${fadeIn}  0.8s ease-in-out` }}>
          <Stack direction='column' width={50} offset={25}>
            <Text as='h3' top={5}>
              ihostme operates out of the top holiday destinations
            </Text>
            <Text as='h5'>
              We are a team of highly skilled and experienced property managers who are
              dedicated to providing the best service to owners and investors, from Point
              Lonsdale to Hobart.
            </Text>
          </Stack>
        </Stack>
        <Stack direction='row' top={6} css={{ animation: `${fadeIn}  0.8s ease-in-out` }}>
          <Stack direction='column' width={100} align='center'>
            <Stack>
              <Link href='/locations'>
                {locations.map((location, index) => (
                  <Stack
                    key={index}
                    css={{
                      display: 'inline-block',
                      marginRight: '$4',
                      paddingTop: '$4',
                    }}>
                    <Badge theme='border' css={{ borderColor: 'rgba(0,0,0,0.05)' }}>
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
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </View>
      <View container top={7} bottom={7}>
        <Stack
          direction='row'
          flex='stretch'
          css={{ animation: `${fadeIn}  0.8s ease-in-out` }}>
          <Stack direction='column' width={33}>
            <Box theme='fill'>
              <Text as='h4'>Your One Stop Hosting Shop</Text>
              <Text as='h6' accent>
                We understand that your vacation rental is more than just an
                investment—it’s your home away from home.
              </Text>
              <Text as='h6' accent>
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
            <Box theme='fill'>
              <Text as='h4'>Simple, Easy Pricing</Text>
              <Text as='h6' accent>
                Our standard management fee is 20% + GST for fully hosted clients, or 14%
                + GST for those who already have their own housekeeping and maintenance
                team in place.
              </Text>
              <Text as='h6' accent>
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
            <Box theme='fill'>
              <Text as='h4'>Your Holiday Home in Good Hands</Text>
              <Text as='h6' accent>
                We&apos;ve developed an intuitive app that gives you full transparency of
                bookings and property performance.
              </Text>
              <Text as='h6' accent>
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
