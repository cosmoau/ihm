/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Text, View, Box } from '@cosmo-au/design-system';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Locations(): JSX.Element {
  return (
    <>
      <NextSeo title='Service Areas' />
      <View inverted container top={8} bottom={8}>
        <Stack direction='row'>
          <Stack direction='column' align='center'>
            <Text as='h1'>Service Areas</Text>
          </Stack>
        </Stack>
      </View>
      <View container top={8} bottom={8}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={20}>
            <Link href='/start?city=Geelong'>
              <a>
                <Box theme='border' image='/images/location-geelong.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-portarlington.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-queenscliff.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-pointlonsdale.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-oceangrove.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-barwonheads.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-torquay.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-janjuc.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-anglesea.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-bellarinepeninsula.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-aireysinlet.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-fairhaven.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-lorne.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-apollobay.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-surfcoast.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-mornington.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-mteliza.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-mtmartha.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-sorrento.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-portsea.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-rye.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-flinders.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-balnarring.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-somers.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-redhill.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-safetybeach.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-morningtonpeninsula.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-cowes.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-smithsbeach.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-ventnor.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-capewoolamai.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-rhyll.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-sanremo.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-phillipisland.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-capepaterson.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-venusbay.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-inverloch.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-basscoast.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-southgippsland.jpg' imageHeight='4.20rem'>
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
                <Box theme='border' image='/images/location-hobart.jpg' imageHeight='4.20rem'>
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
