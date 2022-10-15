import { Stack, Text, View, Box, Avatar, Badge } from '@cosmoau/ui';
import { NextSeo } from 'next-seo';

export default function Team(): JSX.Element {
  return (
    <>
      <NextSeo title='Meet the Team' />
      <View inverted container top={7} bottom={6}>
        <Stack direction='row'>
          <Stack direction='column'>
            <Text as='h2'>Meet the Team</Text>
          </Stack>
        </Stack>
      </View>
      <View container top={7}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={33}>
            <Box theme='fill'>
              <Stack
                css={{
                  display: 'inline-flex',
                  marginRight: '$5',
                  verticalAlign: 'middle',
                }}>
                <Avatar image='/images/team-kyle.jpg' fallback='KF' width={66} />
              </Stack>

              <Stack css={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <Text as='h4'>Kyle Fitzsimmons</Text>
                <Badge theme='border'>Managing Director</Badge>
              </Stack>
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
              <Stack
                css={{
                  display: 'inline-flex',
                  marginRight: '$5',
                  verticalAlign: 'middle',
                }}>
                <Avatar image='/images/team-jayne.jpg' fallback='JP' width={66} />
              </Stack>

              <Stack css={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <Text as='h4'>Jayne Parker</Text>
                <Badge theme='border'>Head of Projects</Badge>
              </Stack>
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
              <Stack
                css={{
                  display: 'inline-flex',
                  marginRight: '$5',
                  verticalAlign: 'middle',
                }}>
                <Avatar image='/images/team-victoria.jpg' fallback='VM' width={66} />
              </Stack>

              <Stack css={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <Text as='h4'>Victoria Mills</Text>
                <Badge theme='border'>Regional Coordinator</Badge>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
