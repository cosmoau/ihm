/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Text, View, Box } from '@withcosmo/design-system';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Locations(): JSX.Element {
  return (
    <>
      <NextSeo title='Service Areas' />
      <View inverted container top={7} bottom={7}>
        <Stack direction='row'>
          <Stack direction='column' align='center'>
            <Text as='h2'>Service Areas</Text>
          </Stack>
        </Stack>
      </View>
      <View container top={7} bottom={7}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={20}>
            <Link href='/start?city=Geelong'>
              <a>
                <Box image='/images/location-geelong.jpg' imageAlt='Geelong'>
                  <Text as='h4'>Geelong</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Portarlington'>
              <a>
                <Box image='/images/location-portarlington.jpg'>
                  <Text as='h4'>Portarlington</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Queenscliff'>
              <a>
                <Box image='/images/location-queenscliff.jpg'>
                  <Text as='h4'>Queenscliff</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Point%20Lonsdale'>
              <a>
                <Box image='/images/location-pointlonsdale.jpg'>
                  <Text as='h4'>Point Lonsdale</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Ocean%20Grove'>
              <a>
                <Box image='/images/location-oceangrove.jpg'>
                  <Text as='h4'>Ocean Grove</Text>
                </Box>
              </a>
            </Link>
          </Stack>
        </Stack>
        <Stack
          direction='row'
          flex='stretch'
          top={6}
          css={{
            phone: {
              paddingTop: '$5',
            },
          }}>
          <Stack direction='column' width={20}>
            <Link href='/start?city=Barwon%20Heads'>
              <a>
                <Box image='/images/location-barwonheads.jpg'>
                  <Text as='h4'>Barwon Heads</Text>
                </Box>
              </a>
            </Link>
          </Stack>

          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Torquay'>
              <a>
                <Box image='/images/location-torquay.jpg'>
                  <Text as='h4'>Torquay</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Jan%20Juc'>
              <a>
                <Box image='/images/location-janjuc.jpg'>
                  <Text as='h4'>Jan Juc</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Anglesea'>
              <a>
                <Box image='/images/location-anglesea.jpg'>
                  <Text as='h4'>Anglesea</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Bellarine%20Peninsula'>
              <a>
                <Box image='/images/location-bellarinepeninsula.jpg'>
                  <Text as='h4'>Bellarine Peninsula</Text>
                </Box>
              </a>
            </Link>
          </Stack>
        </Stack>
        <Stack direction='row' flex='stretch' top={6}>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Aireys%20Inlet'>
              <a>
                <Box image='/images/location-aireysinlet.jpg'>
                  <Text as='h4'>Aireys Inlet</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Fairhaven'>
              <a>
                <Box image='/images/location-fairhaven.jpg'>
                  <Text as='h4'>Fairhaven</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Lorne'>
              <a>
                <Box image='/images/location-lorne.jpg'>
                  <Text as='h4'>Lorne</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Apollo%20Bay'>
              <a>
                <Box image='/images/location-apollobay.jpg'>
                  <Text as='h4'>Apollo Bay</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Surf%20Coast'>
              <a>
                <Box image='/images/location-surfcoast.jpg'>
                  <Text as='h4'>Surf Coast</Text>
                </Box>
              </a>
            </Link>
          </Stack>
        </Stack>
        <Stack direction='row' flex='stretch' top={6}>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Mornington'>
              <a>
                <Box image='/images/location-mornington.jpg'>
                  <Text as='h4'>Mornington</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Mt%20Eliza'>
              <a>
                <Box image='/images/location-mteliza.jpg'>
                  <Text as='h4'>Mt Eliza</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Mt%20Martha'>
              <a>
                <Box image='/images/location-mtmartha.jpg'>
                  <Text as='h4'>Mt Martha</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Sorrento'>
              <a>
                <Box image='/images/location-sorrento.jpg'>
                  <Text as='h4'>Sorrento</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Portsea'>
              <a>
                <Box image='/images/location-portsea.jpg'>
                  <Text as='h4'>Portsea</Text>
                </Box>
              </a>
            </Link>
          </Stack>
        </Stack>
        <Stack direction='row' flex='stretch' top={6}>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Rye'>
              <a>
                <Box image='/images/location-rye.jpg'>
                  <Text as='h4'>Rye</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Flinders'>
              <a>
                <Box image='/images/location-flinders.jpg'>
                  <Text as='h4'>Flinders</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Balnarring'>
              <a>
                <Box image='/images/location-balnarring.jpg'>
                  <Text as='h4'>Balnarring</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Somers'>
              <a>
                <Box image='/images/location-somers.jpg'>
                  <Text as='h4'>Somers</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Red%20Hill'>
              <a>
                <Box image='/images/location-redhill.jpg'>
                  <Text as='h4'>Red Hill</Text>
                </Box>
              </a>
            </Link>
          </Stack>
        </Stack>
        <Stack direction='row' flex='stretch' top={6}>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Safety%20Beach'>
              <a>
                <Box image='/images/location-safetybeach.jpg'>
                  <Text as='h4'>Safety Beach</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Mornington%20Peninsula'>
              <a>
                <Box image='/images/location-morningtonpeninsula.jpg'>
                  <Text as='h4'>Mornington Peninsula</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Cowes'>
              <a>
                <Box image='/images/location-cowes.jpg'>
                  <Text as='h4'>Cowes</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Smiths%20Beach'>
              <a>
                <Box image='/images/location-smithsbeach.jpg'>
                  <Text as='h4'>Smiths Beach</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Ventnor'>
              <a>
                <Box image='/images/location-ventnor.jpg'>
                  <Text as='h4'>Ventnor</Text>
                </Box>
              </a>
            </Link>
          </Stack>
        </Stack>
        <Stack direction='row' flex='stretch' top={6}>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Cape%20Woolamai'>
              <a>
                <Box image='/images/location-capewoolamai.jpg'>
                  <Text as='h4'>Cape Woolamai</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Rhyll'>
              <a>
                <Box image='/images/location-rhyll.jpg'>
                  <Text as='h4'>Rhyll</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=San%20Remo'>
              <a>
                <Box image='/images/location-sanremo.jpg'>
                  <Text as='h4'>San Remo</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Phillip%20Island'>
              <a>
                <Box image='/images/location-phillipisland.jpg'>
                  <Text as='h4'>Phillip Island</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Cape%20Paterson'>
              <a>
                <Box image='/images/location-capepaterson.jpg'>
                  <Text as='h4'>Cape Paterson</Text>
                </Box>
              </a>
            </Link>
          </Stack>
        </Stack>
        <Stack direction='row' flex='stretch' top={6}>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Venus%20Bay'>
              <a>
                <Box image='/images/location-venusbay.jpg'>
                  <Text as='h4'>Venus Bay</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Inverloch'>
              <a>
                <Box image='/images/location-inverloch.jpg'>
                  <Text as='h4'>Inverloch</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Bass%20Coast'>
              <a>
                <Box image='/images/location-basscoast.jpg'>
                  <Text as='h4'>Bass Coast</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=South%20Gippsland'>
              <a>
                <Box image='/images/location-southgippsland.jpg'>
                  <Text as='h4'>South Gippsland</Text>
                </Box>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Link href='/start?city=Hobart'>
              <a>
                <Box image='/images/location-hobart.jpg'>
                  <Text as='h4'>Hobart & Huon Valley</Text>
                </Box>
              </a>
            </Link>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
