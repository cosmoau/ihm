/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Text, View, Box, Avatar } from '@cosmo-au/design-system';
import { NextSeo } from 'next-seo';

export default function Team(): JSX.Element {
  return (
    <>
      <NextSeo title='Meet the Team' />
      <View inverted container top={8} bottom={8}>
        <Stack direction='row'>
          <Stack
            direction='column'
            width={50}
            offset={25}
            align='center'
            css={{
              paddingRight: '$7',
            }}>
            <Text as='h1'>Meet the Team</Text>
          </Stack>
        </Stack>
      </View>
      <View container top={8} bottom={8}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={25}>
            <Box theme='border'>
              <Avatar image='/images/team-kyle.jpg' fallback='Kyle' width={80} />
              <Text as='h4' top={4}>
                Kyle Fitzsimmons
              </Text>
              <Text as='h6'>Managing Director</Text>
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
              <Text as='h4' top={4}>
                Jayne Parker
              </Text>
              <Text as='h6'>Chief of Stuff (Back Office)</Text>
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
              <Text as='h4' top={4}>
                Sharon Elliott
              </Text>
              <Text as='h6'>Regional Coordinator - Vic East</Text>
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
              <Text as='h4' top={4}>
                Victoria Mills{' '}
              </Text>
              <Text as='h6'>Regional Coordinator - Vic West</Text>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
