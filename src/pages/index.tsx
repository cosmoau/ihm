import { Stack, Text, View, Box, Badge, Button, Image } from '@cosmo-au/design-system';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { Heart } from 'phosphor-react';

export default function Home(): JSX.Element {
  return (
    <>
      <NextSeo title='ihostme' titleTemplate='%s' />
      <View inverted container top={8} bottom={8}>
        <Stack direction='row'>
          <Stack
            direction='column'
            width={50}
            top={7}
            bottom={7}
            css={{
              paddingRight: '$7',

              phone: {
                paddingRight: '$3',
                paddingTop: 0,
              },
            }}>
            <Text as='h1'>Bespoke Airbnb, Stayz, Booking.com and Homes & Villas Management</Text>
            <Text as='h5' accent bottom={5}>
              ihostme® by Cosmo is the go-to team for managing the rental of your holiday home and all your hosting and short term property management needs. We maximise your
              occupancy by listing your property on the top booking sites.
            </Text>
            <Button theme='solid' inline={4}>
              <Link href='/start'>
                <a>List your home</a>
              </Link>
            </Button>
            <Button>
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
            <Image src='/images/misc-01.jpg' alt='airbnb' layout='fill' borderRadius={3} objectFit='cover' />
          </Stack>
        </Stack>
      </View>
      <View container top={8} bottom={8}>
        <Stack direction='row'>
          <Stack direction='column' width={60} offset={20} align='center'>
            <a href='https://cosmogroup.io'>
              <Badge theme='pink' icon={<Heart weight='duotone' />}>
                ihostme is now part of Cosmo AU Pty Ltd
              </Badge>
            </a>
            <Text as='h2' top={5} bottom={6}>
              ihostme® operates out of the top holiday destinations in Victoria.
            </Text>
            <Link href='/locations'>
              <a>
                <Button>Explore our service areas</Button>
              </a>
            </Link>
          </Stack>
        </Stack>
        <Stack direction='row' flex='stretch' top={8}>
          <Stack direction='column' width={33}>
            <Box theme='border' image='/images/misc-02.jpg'>
              <Text as='h4'>Your One Stop Hosting Shop</Text>
              <Text as='h6'>We understand that your vacation rental is more than just an investment—it’s your home away from home.</Text>
              <Text as='h6'>
                That’s why we offer a complete suite of services to help you manage your property, from real-time pricing optimisation to guest and bookings management.
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
            <Box theme='border' image='/images/misc-03.jpg'>
              <Text as='h4'>Simple, Easy Pricing</Text>
              <Text as='h6'>
                Our standard management fee is 20% + GST for fully hosted clients, or 14% + GST for those who already have their own housekeeping and maintenance team in place.
              </Text>
              <Text as='h6'>We also have a one-time set up fee from $400, and third-party charges are at cost.</Text>
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
            <Box theme='border' image='/images/misc-04.jpg'>
              <Text as='h4'>Your Holiday Home in Good Hands</Text>
              <Text as='h6'>We've developed an intuitive app that gives you full transparency of bookings and property performance.</Text>
              <Text as='h6'>We also have an experienced client support team available 7/11 and specialist housekeepers to take care of all the little details.</Text>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
