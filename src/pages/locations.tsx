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
      <View container top={7}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={20}>
            <Link href='/start?city=Geelong'>
              <a>
                <Box imageHeight='9rem' image='/images/location-geelong.jpg' imageAlt='Geelong'>
                  <Text as='h3'>Geelong</Text>
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
                <Box imageHeight='9rem' image='/images/location-portarlington.jpg'>
                  <Text as='h3'>Portarlington</Text>
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
                <Box imageHeight='9rem' image='/images/location-queenscliff.jpg'>
                  <Text as='h3'>Queenscliff</Text>
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
                <Box imageHeight='9rem' image='/images/location-pointlonsdale.jpg'>
                  <Text as='h3'>Point Lonsdale</Text>
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
                <Box imageHeight='9rem' image='/images/location-oceangrove.jpg'>
                  <Text as='h3'>Ocean Grove</Text>
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
                <Box imageHeight='9rem' image='/images/location-barwonheads.jpg'>
                  <Text as='h3'>Barwon Heads</Text>
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
                <Box imageHeight='9rem' image='/images/location-torquay.jpg'>
                  <Text as='h3'>Torquay</Text>
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
                <Box imageHeight='9rem' image='/images/location-janjuc.jpg'>
                  <Text as='h3'>Jan Juc</Text>
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
                <Box imageHeight='9rem' image='/images/location-anglesea.jpg'>
                  <Text as='h3'>Anglesea</Text>
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
                <Box imageHeight='9rem' image='/images/location-bellarinepeninsula.jpg'>
                  <Text as='h3'>Bellarine Peninsula</Text>
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
                <Box imageHeight='9rem' image='/images/location-aireysinlet.jpg'>
                  <Text as='h3'>Aireys Inlet</Text>
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
                <Box imageHeight='9rem' image='/images/location-fairhaven.jpg'>
                  <Text as='h3'>Fairhaven</Text>
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
                <Box imageHeight='9rem' image='/images/location-lorne.jpg'>
                  <Text as='h3'>Lorne</Text>
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
                <Box imageHeight='9rem' image='/images/location-apollobay.jpg'>
                  <Text as='h3'>Apollo Bay</Text>
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
                <Box imageHeight='9rem' image='/images/location-surfcoast.jpg'>
                  <Text as='h3'>Surf Coast</Text>
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
                <Box imageHeight='9rem' image='/images/location-mornington.jpg'>
                  <Text as='h3'>Mornington</Text>
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
                <Box imageHeight='9rem' image='/images/location-mteliza.jpg'>
                  <Text as='h3'>Mt Eliza</Text>
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
                <Box imageHeight='9rem' image='/images/location-mtmartha.jpg'>
                  <Text as='h3'>Mt Martha</Text>
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
                <Box imageHeight='9rem' image='/images/location-sorrento.jpg'>
                  <Text as='h3'>Sorrento</Text>
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
                <Box imageHeight='9rem' image='/images/location-portsea.jpg'>
                  <Text as='h3'>Portsea</Text>
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
                <Box imageHeight='9rem' image='/images/location-rye.jpg'>
                  <Text as='h3'>Rye</Text>
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
                <Box imageHeight='9rem' image='/images/location-flinders.jpg'>
                  <Text as='h3'>Flinders</Text>
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
                <Box imageHeight='9rem' image='/images/location-balnarring.jpg'>
                  <Text as='h3'>Balnarring</Text>
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
                <Box imageHeight='9rem' image='/images/location-somers.jpg'>
                  <Text as='h3'>Somers</Text>
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
                <Box imageHeight='9rem' image='/images/location-redhill.jpg'>
                  <Text as='h3'>Red Hill</Text>
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
                <Box imageHeight='9rem' image='/images/location-safetybeach.jpg'>
                  <Text as='h3'>Safety Beach</Text>
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
                <Box imageHeight='9rem' image='/images/location-morningtonpeninsula.jpg'>
                  <Text as='h3'>Mornington Peninsula</Text>
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
                <Box imageHeight='9rem' image='/images/location-cowes.jpg'>
                  <Text as='h3'>Cowes</Text>
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
                <Box imageHeight='9rem' image='/images/location-smithsbeach.jpg'>
                  <Text as='h3'>Smiths Beach</Text>
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
                <Box imageHeight='9rem' image='/images/location-ventnor.jpg'>
                  <Text as='h3'>Ventnor</Text>
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
                <Box imageHeight='9rem' image='/images/location-capewoolamai.jpg'>
                  <Text as='h3'>Cape Woolamai</Text>
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
                <Box imageHeight='9rem' image='/images/location-rhyll.jpg'>
                  <Text as='h3'>Rhyll</Text>
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
                <Box imageHeight='9rem' image='/images/location-sanremo.jpg'>
                  <Text as='h3'>San Remo</Text>
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
                <Box imageHeight='9rem' image='/images/location-phillipisland.jpg'>
                  <Text as='h3'>Phillip Island</Text>
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
                <Box imageHeight='9rem' image='/images/location-capepaterson.jpg'>
                  <Text as='h3'>Cape Paterson</Text>
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
                <Box imageHeight='9rem' image='/images/location-venusbay.jpg'>
                  <Text as='h3'>Venus Bay</Text>
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
                <Box imageHeight='9rem' image='/images/location-inverloch.jpg'>
                  <Text as='h3'>Inverloch</Text>
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
                <Box imageHeight='9rem' image='/images/location-basscoast.jpg'>
                  <Text as='h3'>Bass Coast</Text>
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
                <Box imageHeight='9rem' image='/images/location-southgippsland.jpg'>
                  <Text as='h3'>South Gippsland</Text>
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
                <Box imageHeight='9rem' image='/images/location-hobart.jpg'>
                  <Text as='h3'>Hobart & Huon Valley</Text>
                </Box>
              </a>
            </Link>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
