import { Stack, Text, View, Box, Image } from "@cosmoau/ui";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Locations(): JSX.Element {
  return (
    <>
      <NextSeo title="Service Locations" />
      <View
        css={{ background: "$text !important", paddingLeft: "$large", paddingRight: "$large" }}
        inverted
        top="large">
        <Stack direction="row" minimal>
          <Stack direction="column" minimal width={50} widthPhone={55}>
            <Box
              css={{
                background: "$accentIHM !important",
                borderBottomRightRadius: "0 !important",
                borderTopRightRadius: "0 !important",
                padding: "$larger",

                phone: {
                  padding: "$larger $large",
                },
              }}
              theme="fill">
              <Text as="h2">
                <Text as="span" css={{ hiddenInline: "phone" }}>
                  Serviced Towns &&nbsp;
                </Text>
                Locations
              </Text>
            </Box>
          </Stack>
          <Stack direction="column" minimal width={50} widthPhone={45}>
            <Image
              alt="
                A photo of a the Point Lonsdale Lighthouse, which is in one of the many locations we service."
              blurDataURL="/images/misc-13.jpg"
              css={{
                img: {
                  borderBottomRightRadius: "$large !important",
                  borderTopRightRadius: "$large !important",
                },
              }}
              fill
              placeholder="blur"
              src="/images/misc-13.jpg"
            />
          </Stack>
        </Stack>
      </View>

      <View
        bottom="largest"
        container
        css={{
          phone: { paddingBottom: "$large", paddingTop: "$large" },
        }}
        top="largest">
        <Stack direction="row" flex="stretch">
          <Stack direction="column" width={20}>
            <Link href="/start?city=Geelong">
              <Box
                image="/images/location-geelong.jpg"
                imageAlt="Airbnb Management in Victoria, Australia - Geelong"
                imageHeight="7.5rem"
                theme="fill">
                <Text as="h4">Geelong</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Portarlington">
              <Box image="/images/location-portarlington.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Portarlington</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Queenscliff">
              <Box image="/images/location-queenscliff.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Queenscliff</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Point%20Lonsdale">
              <Box image="/images/location-pointlonsdale.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Point Lonsdale</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Ocean%20Grove">
              <Box image="/images/location-oceangrove.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Ocean Grove</Text>
              </Box>
            </Link>
          </Stack>
        </Stack>
        <Stack
          css={{
            phone: {
              paddingTop: "$large",
            },
          }}
          direction="row"
          flex="stretch"
          top="large">
          <Stack direction="column" width={20}>
            <Link href="/start?city=Barwon%20Heads">
              <Box image="/images/location-barwonheads.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Barwon Heads</Text>
              </Box>
            </Link>
          </Stack>

          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Torquay">
              <Box image="/images/location-torquay.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Torquay</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Jan%20Juc">
              <Box image="/images/location-janjuc.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Jan Juc</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Anglesea">
              <Box image="/images/location-anglesea.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Anglesea</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Bellarine%20Peninsula">
              <Box
                image="/images/location-bellarinepeninsula.jpg"
                imageHeight="7.5rem"
                theme="fill">
                <Text as="h4">Bellarine Peninsula</Text>
              </Box>
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" flex="stretch" top="large">
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Aireys%20Inlet">
              <Box image="/images/location-aireysinlet.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Aireys Inlet</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Fairhaven">
              <Box image="/images/location-fairhaven.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Fairhaven</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Lorne">
              <Box image="/images/location-lorne.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Lorne</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Apollo%20Bay">
              <Box image="/images/location-apollobay.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Apollo Bay</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Surf%20Coast">
              <Box image="/images/location-surfcoast.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Surf Coast</Text>
              </Box>
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" flex="stretch" top="large">
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Mornington">
              <Box image="/images/location-mornington.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Mornington</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Mt%20Eliza">
              <Box image="/images/location-mteliza.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Mt Eliza</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Mt%20Martha">
              <Box image="/images/location-mtmartha.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Mt Martha</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Sorrento">
              <Box image="/images/location-sorrento.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Sorrento</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Portsea">
              <Box image="/images/location-portsea.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Portsea</Text>
              </Box>
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" flex="stretch" top="large">
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Rye">
              <Box image="/images/location-rye.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Rye</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Flinders">
              <Box image="/images/location-flinders.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Flinders</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Balnarring">
              <Box image="/images/location-balnarring.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Balnarring</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Somers">
              <Box image="/images/location-somers.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Somers</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Red%20Hill">
              <Box image="/images/location-redhill.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Red Hill</Text>
              </Box>
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" flex="stretch" top="large">
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Safety%20Beach">
              <Box image="/images/location-safetybeach.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Safety Beach</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Mornington%20Peninsula">
              <Box
                image="/images/location-morningtonpeninsula.jpg"
                imageHeight="7.5rem"
                theme="fill">
                <Text as="h4">Mornington Peninsula</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Cowes">
              <Box image="/images/location-cowes.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Cowes</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Smiths%20Beach">
              <Box image="/images/location-smithsbeach.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Smiths Beach</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Ventnor">
              <Box image="/images/location-ventnor.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Ventnor</Text>
              </Box>
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" flex="stretch" top="large">
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Cape%20Woolamai">
              <Box image="/images/location-capewoolamai.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Cape Woolamai</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Rhyll">
              <Box image="/images/location-rhyll.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Rhyll</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=San%20Remo">
              <Box image="/images/location-sanremo.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">San Remo</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Phillip%20Island">
              <Box image="/images/location-phillipisland.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Phillip Island</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Cape%20Paterson">
              <Box image="/images/location-capepaterson.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Cape Paterson</Text>
              </Box>
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" flex="stretch" top="large">
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Venus%20Bay">
              <Box image="/images/location-venusbay.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Venus Bay</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Inverloch">
              <Box image="/images/location-inverloch.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Inverloch</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Bass%20Coast">
              <Box image="/images/location-basscoast.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Bass Coast</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=South%20Gippsland">
              <Box image="/images/location-southgippsland.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">South Gippsland</Text>
              </Box>
            </Link>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={20}>
            <Link href="/start?city=Hobart">
              <Box image="/images/location-hobart.jpg" imageHeight="7.5rem" theme="fill">
                <Text as="h4">Hobart & Huon Valley</Text>
              </Box>
            </Link>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
