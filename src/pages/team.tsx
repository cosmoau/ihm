import { Stack, Text, View, Box, Avatar, Image, Badge, fadeIn } from '@cosmoau/ui';
import { NextSeo } from 'next-seo';

export default function Team(): JSX.Element {
  return (
    <>
      <NextSeo title='Meet the Team' />
      <View
        inverted
        top={5}
        css={{ background: '$text !important', paddingLeft: '$5', paddingRight: '$5' }}>
        <Stack direction='row' minimal>
          <Stack direction='column' width={50} widthPhone={55} minimal>
            <Box
              theme='fill'
              css={{
                background: 'rgb(33, 52, 68) !important',
                borderBottomRightRadius: '0 !important',
                borderTopRightRadius: '0 !important',
                padding: '$7 $6',

                phone: {
                  padding: '$6 $5',
                },
              }}>
              <Text
                as='h2'
                css={{
                  animation: `${fadeIn}  0.5s ease-in-out`,
                }}>
                <Text as='span' css={{ hiddenInline: 'phone' }}>
                  Meet The&nbsp;
                </Text>
                Team
              </Text>
            </Box>
          </Stack>
          <Stack minimal direction='column' width={50} widthPhone={45}>
            <Image
              src='/images/misc-12.jpg'
              fillPosition='left'
              alt='airbnb'
              fill
              css={{
                img: {
                  borderBottomRightRadius: '$3 !important',
                  borderTopRightRadius: '$3 !important',
                },
              }}
            />
          </Stack>
        </Stack>
      </View>

      <View
        container
        top={7}
        bottom={7}
        css={{
          phone: { paddingBottom: '$5', paddingTop: '$5' },
        }}>
        <Stack
          direction='row'
          flex='stretch'
          css={{ animation: `${fadeIn}  0.8s ease-in-out` }}>
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
                <Text as='h3' css={{ marginBottom: '$2 !important' }}>
                  Kyle Fitzsimmons
                </Text>
                <Badge>Managing Director</Badge>
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
                <Text as='h3' css={{ marginBottom: '$2 !important' }}>
                  Jayne Parker
                </Text>
                <Badge>Head of Projects</Badge>
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
                <Text as='h3' css={{ marginBottom: '$2 !important' }}>
                  Victoria Mills
                </Text>
                <Badge>Regional Coordinator</Badge>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
