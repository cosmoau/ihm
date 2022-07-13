/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Text, View, Box } from '@cosmo-au/design-system';
import { NextSeo } from 'next-seo';

export default function Team(): JSX.Element {
  return (
    <>
      <NextSeo title='Service Areas' />
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
            <Text as='h1'>Service Areas</Text>
          </Stack>
        </Stack>
      </View>
      <View container top={8} bottom={8}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={20}>
            <Box theme='border' image='/images/location-geelong.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Geelong</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-portarlington.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Portarlington</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-queenscliff.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Queenscliff</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-pointlonsdale.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Point Lonsdale</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-oceangrove.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Ocean Grove</Text>
            </Box>
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
            <Box theme='border' image='/images/location-barwonheads.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Barwon Heads</Text>
            </Box>
          </Stack>

          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-torquay.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Torquay</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-janjuc.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Jan Juc</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-anglesea.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Anglesea</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-bellarinepeninsula.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Bellarine Peninsula</Text>
            </Box>
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
            <Box theme='border' image='/images/location-aireysinlet.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Aireys Inlet</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-fairhaven.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Fairhaven</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-lorne.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Lorne</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-apollobay.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Apollo Bay</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-surfcoast.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Surf Coast</Text>
            </Box>
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
            <Box theme='border' image='/images/location-mornington.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Mornington</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-mteliza.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Mt Eliza</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-mtmartha.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Mt Martha</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-sorrento.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Sorrento</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-portsea.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Portsea</Text>
            </Box>
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
            <Box theme='border' image='/images/location-rye.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Rye</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-flinders.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Flinders</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-balnarring.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Balnarring</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-somers.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Somers</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-redhill.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Red Hill</Text>
            </Box>
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
            <Box theme='border' image='/images/location-safetybeach.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Safety Beach</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-morningtonpeninsula.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Mornington Peninsula</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-cowes.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Cowes</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-smithsbeach.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Smiths Beach</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-ventnor.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Ventnor</Text>
            </Box>
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
            <Box theme='border' image='/images/location-capewoolamai.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Cape Woolamai</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-rhyll.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Rhyll</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-sanremo.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>San Remo</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-phillipisland.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Phillip Island</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-capepaterson.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Cape Paterson</Text>
            </Box>
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
            <Box theme='border' image='/images/location-venusbay.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Venus Bay</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-inverloch.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Inverloch</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-basscoast.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Bass Coast</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-southgippsland.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>South Gippsland</Text>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={20}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border' image='/images/location-hobart.jpg' imageHeight='6rem' imageCTA='/start' imageTarget='_self'>
              <Text as='h4'>Hobart</Text>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
