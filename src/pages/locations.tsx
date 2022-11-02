import { Stack, Text, View, Box } from '@cosmoau/ui';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Locations(): JSX.Element {
  return (
    <>
      <NextSeo title='Service Areas' />
      <View inverted container top={7} bottom={6}>
        <Stack direction='row'>
          <Stack direction='column'>
            <Text as='h2'>Service Areas</Text>
          </Stack>
        </Stack>
      </View>
      <View container top={7}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={20}>
            <Link href='/start?city=Geelong'>
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-geelong.jpg'
                imageAlt='Geelong'>
                <Text as='h4'>Geelong</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-portarlington.jpg'>
                <Text as='h4'>Portarlington</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-queenscliff.jpg'>
                <Text as='h4'>Queenscliff</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-pointlonsdale.jpg'>
                <Text as='h4'>Point Lonsdale</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-oceangrove.jpg'>
                <Text as='h4'>Ocean Grove</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-barwonheads.jpg'>
                <Text as='h4'>Barwon Heads</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-torquay.jpg'>
                <Text as='h4'>Torquay</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-janjuc.jpg'>
                <Text as='h4'>Jan Juc</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-anglesea.jpg'>
                <Text as='h4'>Anglesea</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-bellarinepeninsula.jpg'>
                <Text as='h4'>Bellarine Peninsula</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-aireysinlet.jpg'>
                <Text as='h4'>Aireys Inlet</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-fairhaven.jpg'>
                <Text as='h4'>Fairhaven</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-lorne.jpg'>
                <Text as='h4'>Lorne</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-apollobay.jpg'>
                <Text as='h4'>Apollo Bay</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-surfcoast.jpg'>
                <Text as='h4'>Surf Coast</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-mornington.jpg'>
                <Text as='h4'>Mornington</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-mteliza.jpg'>
                <Text as='h4'>Mt Eliza</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-mtmartha.jpg'>
                <Text as='h4'>Mt Martha</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-sorrento.jpg'>
                <Text as='h4'>Sorrento</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-portsea.jpg'>
                <Text as='h4'>Portsea</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-rye.jpg'>
                <Text as='h4'>Rye</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-flinders.jpg'>
                <Text as='h4'>Flinders</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-balnarring.jpg'>
                <Text as='h4'>Balnarring</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-somers.jpg'>
                <Text as='h4'>Somers</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-redhill.jpg'>
                <Text as='h4'>Red Hill</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-safetybeach.jpg'>
                <Text as='h4'>Safety Beach</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-morningtonpeninsula.jpg'>
                <Text as='h4'>Mornington Peninsula</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-cowes.jpg'>
                <Text as='h4'>Cowes</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-smithsbeach.jpg'>
                <Text as='h4'>Smiths Beach</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-ventnor.jpg'>
                <Text as='h4'>Ventnor</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-capewoolamai.jpg'>
                <Text as='h4'>Cape Woolamai</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-rhyll.jpg'>
                <Text as='h4'>Rhyll</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-sanremo.jpg'>
                <Text as='h4'>San Remo</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-phillipisland.jpg'>
                <Text as='h4'>Phillip Island</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-capepaterson.jpg'>
                <Text as='h4'>Cape Paterson</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-venusbay.jpg'>
                <Text as='h4'>Venus Bay</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-inverloch.jpg'>
                <Text as='h4'>Inverloch</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-basscoast.jpg'>
                <Text as='h4'>Bass Coast</Text>
              </Box>
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
              <Box
                theme='fill'
                imageHeight='9rem'
                image='/images/location-southgippsland.jpg'>
                <Text as='h4'>South Gippsland</Text>
              </Box>
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
              <Box theme='fill' imageHeight='9rem' image='/images/location-hobart.jpg'>
                <Text as='h4'>Hobart & Huon Valley</Text>
              </Box>
            </Link>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
