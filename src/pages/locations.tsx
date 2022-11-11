import { Stack, Text, View, Box, Image, fadeIn } from '@cosmoau/ui';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Locations(): JSX.Element {
  return (
    <>
      <NextSeo title='Service Locations' />
      <View
        inverted
        top={5}
        css={{ background: '$text !important', paddingLeft: '$5', paddingRight: '$5' }}>
        <Stack direction='row' minimal>
          <Stack direction='column' width={50} widthPhone={55} minimal>
            <Box
              theme='fill'
              css={{
                background: '$accentIHM !important',
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
                  Serviced Towns &&nbsp;
                </Text>
                Locations
              </Text>
            </Box>
          </Stack>
          <Stack minimal direction='column' width={50} widthPhone={45}>
            <Image
              src='/images/misc-13.jpg'
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
          <Stack direction='column' width={20}>
            <Link href='/start?city=Geelong'>
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-geelong.jpg'
                imageAlt='Geelong'>
                <Text as='h3'>Geelong</Text>
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
                imageHeight='7.5rem'
                image='/images/location-portarlington.jpg'>
                <Text as='h3'>Portarlington</Text>
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
                imageHeight='7.5rem'
                image='/images/location-queenscliff.jpg'>
                <Text as='h3'>Queenscliff</Text>
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
                imageHeight='7.5rem'
                image='/images/location-pointlonsdale.jpg'>
                <Text as='h3'>Point Lonsdale</Text>
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
                imageHeight='7.5rem'
                image='/images/location-oceangrove.jpg'>
                <Text as='h3'>Ocean Grove</Text>
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
                imageHeight='7.5rem'
                image='/images/location-barwonheads.jpg'>
                <Text as='h3'>Barwon Heads</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-torquay.jpg'>
                <Text as='h3'>Torquay</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-janjuc.jpg'>
                <Text as='h3'>Jan Juc</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-anglesea.jpg'>
                <Text as='h3'>Anglesea</Text>
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
                imageHeight='7.5rem'
                image='/images/location-bellarinepeninsula.jpg'>
                <Text as='h3'>Bellarine Peninsula</Text>
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
                imageHeight='7.5rem'
                image='/images/location-aireysinlet.jpg'>
                <Text as='h3'>Aireys Inlet</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-fairhaven.jpg'>
                <Text as='h3'>Fairhaven</Text>
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
              <Box theme='fill' imageHeight='7.5rem' image='/images/location-lorne.jpg'>
                <Text as='h3'>Lorne</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-apollobay.jpg'>
                <Text as='h3'>Apollo Bay</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-surfcoast.jpg'>
                <Text as='h3'>Surf Coast</Text>
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
                imageHeight='7.5rem'
                image='/images/location-mornington.jpg'>
                <Text as='h3'>Mornington</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-mteliza.jpg'>
                <Text as='h3'>Mt Eliza</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-mtmartha.jpg'>
                <Text as='h3'>Mt Martha</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-sorrento.jpg'>
                <Text as='h3'>Sorrento</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-portsea.jpg'>
                <Text as='h3'>Portsea</Text>
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
              <Box theme='fill' imageHeight='7.5rem' image='/images/location-rye.jpg'>
                <Text as='h3'>Rye</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-flinders.jpg'>
                <Text as='h3'>Flinders</Text>
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
                imageHeight='7.5rem'
                image='/images/location-balnarring.jpg'>
                <Text as='h3'>Balnarring</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-somers.jpg'>
                <Text as='h3'>Somers</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-redhill.jpg'>
                <Text as='h3'>Red Hill</Text>
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
                imageHeight='7.5rem'
                image='/images/location-safetybeach.jpg'>
                <Text as='h3'>Safety Beach</Text>
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
                imageHeight='7.5rem'
                image='/images/location-morningtonpeninsula.jpg'>
                <Text as='h3'>Mornington Peninsula</Text>
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
              <Box theme='fill' imageHeight='7.5rem' image='/images/location-cowes.jpg'>
                <Text as='h3'>Cowes</Text>
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
                imageHeight='7.5rem'
                image='/images/location-smithsbeach.jpg'>
                <Text as='h3'>Smiths Beach</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-ventnor.jpg'>
                <Text as='h3'>Ventnor</Text>
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
                imageHeight='7.5rem'
                image='/images/location-capewoolamai.jpg'>
                <Text as='h3'>Cape Woolamai</Text>
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
              <Box theme='fill' imageHeight='7.5rem' image='/images/location-rhyll.jpg'>
                <Text as='h3'>Rhyll</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-sanremo.jpg'>
                <Text as='h3'>San Remo</Text>
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
                imageHeight='7.5rem'
                image='/images/location-phillipisland.jpg'>
                <Text as='h3'>Phillip Island</Text>
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
                imageHeight='7.5rem'
                image='/images/location-capepaterson.jpg'>
                <Text as='h3'>Cape Paterson</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-venusbay.jpg'>
                <Text as='h3'>Venus Bay</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-inverloch.jpg'>
                <Text as='h3'>Inverloch</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-basscoast.jpg'>
                <Text as='h3'>Bass Coast</Text>
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
                imageHeight='7.5rem'
                image='/images/location-southgippsland.jpg'>
                <Text as='h3'>South Gippsland</Text>
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
              <Box
                theme='fill'
                imageHeight='7.5rem'
                image='/images/location-hobart.jpg'>
                <Text as='h3'>Hobart & Huon Valley</Text>
              </Box>
            </Link>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
