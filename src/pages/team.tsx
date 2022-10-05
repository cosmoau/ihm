/**
 * /* eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

import { Stack, Text, View, Box, Avatar, Badge } from '@cosmoau/ui';
import { NextSeo } from 'next-seo';

export default function Team(): JSX.Element {
  return (
    <>
      <NextSeo title='Meet the Team' />
      <View inverted container top={7} bottom={7}>
        <Stack direction='row'>
          <Stack direction='column' align='center'>
            <Text as='h2'>Meet the Team</Text>
          </Stack>
        </Stack>
      </View>
      <View container top={7}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={25}>
            <Box>
              <Avatar image='/images/team-kyle.jpg' fallback='Kyle' width={66} />
              <Text
                as='h4'
                top={3}
                bottom={3}
                css={{
                  marginBottom: '0.4rem !important',
                  paddingBottom: '0',
                }}>
                Kyle Fitzsimmons
              </Text>
              <Badge theme='border'>Managing Director</Badge>
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
            <Box>
              <Avatar image='/images/team-jayne.jpg' fallback='Jayne' width={66} />
              <Text
                as='h4'
                bottom={3}
                top={3}
                css={{
                  marginBottom: '0.4rem !important',
                  paddingBottom: '0',
                }}>
                Jayne Parker
              </Text>
              <Badge theme='border'>Head of Projects</Badge>
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
            <Box>
              <Avatar image='/images/team-sharon.jpg' fallback='Jayne' width={66} />
              <Text
                as='h4'
                top={3}
                bottom={3}
                css={{
                  marginBottom: '0.4rem !important',
                  paddingBottom: '0',
                }}>
                Sharon Elliott
              </Text>
              <Badge theme='border'>Regional Coordinator, Vic East</Badge>
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
            <Box>
              <Avatar image='/images/team-victoria.jpg' fallback='Jayne' width={66} />
              <Text
                as='h4'
                top={3}
                bottom={3}
                css={{
                  marginBottom: '0.4rem !important',
                  paddingBottom: '0',
                }}>
                Victoria Mills
              </Text>
              <Badge theme='border'>Regional Coordinator, Vic West</Badge>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
