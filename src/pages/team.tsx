/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Text, View, Box, Avatar, Badge } from '@cosmo-au/design-system';
import { NextSeo } from 'next-seo';

export default function Team(): JSX.Element {
  return (
    <>
      <NextSeo title='Meet the Team' />
      <View inverted container top={8} bottom={8}>
        <Stack direction='row'>
          <Stack direction='column' align='center'>
            <Text as='h1'>Meet the Team</Text>
          </Stack>
        </Stack>
      </View>
      <View container top={8} bottom={8}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={25}>
            <Box theme='border'>
              <Avatar image='/images/team-kyle.jpg' fallback='Kyle' width={80} />
              <Text
                as='h4'
                top={4}
                css={{
                  marginBottom: '0.4rem !important',
                  paddingBottom: '0',
                }}>
                Kyle Fitzsimmons
              </Text>
              <Badge>Managing Director</Badge>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={25}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border'>
              <Avatar image='/images/team-jayne.jpg' fallback='Jayne' width={80} />
              <Text
                as='h4'
                top={4}
                css={{
                  marginBottom: '0.4rem !important',
                  paddingBottom: '0',
                }}>
                Jayne Parker
              </Text>
              <Badge>Chief of Stuff (Back Office)</Badge>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={25}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border'>
              <Avatar image='/images/team-sharon.jpg' fallback='Jayne' width={80} />
              <Text
                as='h4'
                top={4}
                css={{
                  marginBottom: '0.4rem !important',
                  paddingBottom: '0',
                }}>
                Sharon Elliott
              </Text>
              <Badge>Regional Coordinator - Vic East</Badge>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={25}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border'>
              <Avatar image='/images/team-victoria.jpg' fallback='Jayne' width={80} />
              <Text
                as='h4'
                top={4}
                css={{
                  marginBottom: '0.4rem !important',
                  paddingBottom: '0',
                }}>
                Victoria Mills
              </Text>
              <Badge>Regional Coordinator - Vic West</Badge>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
