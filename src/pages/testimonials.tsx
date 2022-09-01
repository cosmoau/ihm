/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Text, View, Box, Avatar, Badge } from '@withcosmo/design-system';
import { NextSeo } from 'next-seo';

export default function Testimonials(): JSX.Element {
  return (
    <>
      <NextSeo title='Customer Testimonials' />
      <View inverted container top={7} bottom={7}>
        <Stack direction='row'>
          <Stack direction='column' align='center'>
            <Text as='h2'>Customer Testimonials</Text>
          </Stack>
        </Stack>
      </View>
      <View container top={7} bottom={7}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={50}>
            <Box>
              <Stack bottom={5}>
                <Stack
                  css={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    verticalAlign: 'middle',
                    marginRight: '$5',
                    phone: {
                      display: 'block',
                      marginRight: 0,
                      marginBottom: '$3',
                    },
                  }}>
                  <Avatar image='/images/testimonial-01.jpg' width={66} fallback='' />
                </Stack>
                <Stack
                  css={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                  }}>
                  <Text
                    as='h4'
                    css={{
                      marginBottom: '0.4rem !important',
                      paddingBottom: '0',
                    }}>
                    The Woodville, Ocean Grove
                  </Text>
                  <Badge>Josie Pileio and Rob Farrugia, Owners</Badge>
                </Stack>
              </Stack>
              <Text as='h6' top={4}>
                We were moving overseas and from the very beginning when we were just considering our options, ihostme were able to provide advice, support and the peace of mind to
                just make it happen!
              </Text>
              <Text as='h6'>
                ihostme arranged everything from setting up our listing on the various sites available, prepared the host information, all the welcome packs and all other host
                related resources ready for our guests. The guest feedback we’ve had so far, has always been very positive about the service they’ve received and the experience
                they have whilst staying in our home.
              </Text>

              <Text as='h6'>
                We find both Dave and Jayne to be very professional, attentive and very knowledgeable about the management of our property and their friendly and approachable
                manner makes it even more enjoyable to work with them.
              </Text>

              <Text as='h6'>We have been with ihostme® for over 6 years and I wouldn’t consider anyone else to manage our property.</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={50}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box>
              <Stack bottom={5}>
                <Stack
                  css={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    verticalAlign: 'middle',
                    marginRight: '$5',
                    phone: {
                      display: 'block',
                      marginRight: 0,
                      marginBottom: '$3',
                    },
                  }}>
                  <Avatar image='/images/testimonial-02.jpg' width={66} fallback='' />
                </Stack>
                <Stack
                  css={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                  }}>
                  <Text
                    as='h4'
                    css={{
                      marginBottom: '0.4rem !important',
                      paddingBottom: '0',
                    }}>
                    Blue Waters Retreat, Ocean Grove
                  </Text>
                  <Badge>Lorien and Dean Platt, Owners</Badge>
                </Stack>
              </Stack>

              <Text as='h6' top={4}>
                ihostme provided invaluable assistance and advice in getting my property ready to list within 2 weeks of first contact, despite being away on holidays themselves at
                the time! ihostme’s marketing expertise ensured that the house was booked for every weekend, plus significant numbers of week days as well.
              </Text>

              <Text as='h6'>
                I have found the services provided through ihostme® to be extremely helpful, enabling me to leave all aspects of AirBnB management in their capable and experienced
                hands, and providing peace of mind that it is all under control.
              </Text>
              <Text as='h6'>
                They are very professional, great communicators and problem solvers and clearly willing to go the extra mile to facilitate a positive experience all round for
                owners as well as the all-important guests.
              </Text>

              <Text as='h6'>
                I highly recommend the ihostme® service and would be surprised if it doesn’t continue to grow beyond Ocean Grove and the immediate surrounds as word travels of
                their sterling service.
              </Text>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
