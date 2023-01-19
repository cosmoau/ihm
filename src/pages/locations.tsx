import { Stack, Text, View, Box, Image, Button } from "@cosmoau/ui";
import Link from "next/link";
import { NextSeo } from "next-seo";

export const serviceLocations = [
  {
    name: "Geelong, Victoria",
    id: "geelong",
  },
  {
    name: "Bellarine Peninsula",
    id: "bellarine-peninsula",
  },
  {
    name: "Portarlington",
    id: "portarlington",
  },
  {
    name: "Queenscliff",
    id: "queenscliff",
  },
  {
    name: "Point Lonsdale",
    id: "point-lonsdale",
  },
  {
    name: "Ocean Grove",
    id: "ocean-grove",
  },
  {
    name: "Barwon Heads",
    id: "barwon-heads",
  },
  {
    name: "Torquay",
    id: "torquay",
  },
  {
    name: "Jan Juc",
    id: "jan-juc",
  },
  {
    name: "Anglesea",
    id: "anglesea",
  },
  {
    name: "Bellarine Peninsula",
    id: "bellarine-peninsula",
  },
  {
    name: "Aireys Inlet",
    id: "aireys-inlet",
  },
  {
    name: "Fairhaven",
    id: "fairhaven",
  },
  {
    name: "Lorne",
    id: "lorne",
  },
  {
    name: "Apollo Bay",
    id: "apollo-bay",
  },
  {
    name: "Surf Coast",
    id: "surf-coast",
  },
  {
    name: "Mornington",
    id: "mornington",
  },
  {
    name: "Mt Eliza",
    id: "mt-eliza",
  },
  {
    name: "Mt Martha",
    id: "mt-martha",
  },
  {
    name: "Sorrento",
    id: "sorrento",
  },
  {
    name: "Portsea",
    id: "portsea",
  },
  {
    name: "Rye",
    id: "rye",
  },
  {
    name: "Flinders",
    id: "flinders",
  },
  {
    name: "Balnarring",
    id: "balnarring",
  },
  {
    name: "Somers",
    id: "somers",
  },
  {
    name: "Red Hill",
    id: "red-hill",
  },
  {
    name: "Safety Beach",
    id: "safety-beach",
  },
  {
    name: "Mornington Peninsula",
    id: "mornington-peninsula",
  },
  {
    name: "Cowes",
    id: "cowes",
  },
  {
    name: "Smiths Beach",
    id: "smiths-beach",
  },
  {
    name: "Ventnor",
    id: "ventnor",
  },
  {
    name: "Cape Woolamai",
    id: "cape-woolamai",
  },
  {
    name: "Rhyll",
    id: "rhyll",
  },
  {
    name: "San Remo",
    id: "san-remo",
  },
  {
    name: "Phillip Island",
    id: "phillip-island",
  },
  {
    name: "Cape Paterson",
    id: "cape-paterson",
  },
  {
    name: "Venus Bay",
    id: "venus-bay",
  },
  {
    name: "Inverloch",
    id: "inverloch",
  },
  {
    name: "Bass Coast",
    id: "bass-coast",
  },
  {
    name: "South Gippsland",
    id: "south-gippsland",
  },
];

export default function Locations(): JSX.Element {
  return (
    <>
      <NextSeo title="Service Locations" />
      <View
        css={{ background: "$text !important", paddingLeft: "$medium", paddingRight: "$medium" }}
        inverted
        top="medium">
        <Stack direction="row" minimal>
          <Stack direction="column" minimal width={50} widthPhone={55}>
            <Box
              css={{
                background: "$accentIHM !important",
                borderBottomRightRadius: "0 !important",
                borderTopRightRadius: "0 !important",
                padding: "$larger $large",
                phone: {
                  padding: "$large $medium",
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
        <Stack direction="row">
          {serviceLocations.map((location, index) => (
            <Stack
              key={location.id || index}
              css={{
                phone: {
                  paddingTop: index >= 1 ? "$medium" : 0,
                },
                tabletX: {
                  paddingTop: index > 1 ? "$medium" : 0,
                },
                paddingTop: index >= 5 ? "$medium" : 0,
              }}
              direction="column"
              width={20}
              widthTablet={50}>
              <Box
                image={`/images/location-${location.id}.jpg`}
                imageAlt={`Airbnb Management in Victoria, Australia - ${location.name}`}
                imageHeight="7.5rem"
                theme="fill">
                <Text as="h4" bottom="medium">
                  {location.name}
                </Text>
                <Link href={`/start?city=${location.name}`}>
                  <Button>Sign Up</Button>
                </Link>
              </Box>
            </Stack>
          ))}
        </Stack>
      </View>
    </>
  );
}
