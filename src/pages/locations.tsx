import { Stack, Text, View, Box, Image } from "@cosmoau/ui";
import { NextSeo } from "next-seo";

import locations from "../../locations.json";

export default function LocationsPage(): JSX.Element {
  return (
    <>
      <NextSeo title="Service Locations" />
      <View
        bottom="large"
        css={{ paddingLeft: "$medium", paddingRight: "$medium" }}
        inverted
        top="medium">
        <Stack direction="row" minimal>
          <Stack direction="column" minimal width={50}>
            <Box
              css={{
                borderBottomRightRadius: "0 !important",
                borderTopRightRadius: "0 !important",
                padding: "$larger $large",
                phone: {
                  padding: "$large $medium",
                  borderRadius: "$large !important",
                  textAlign: "center",
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
          <Stack css={{ hidden: "phone" }} direction="column" minimal width={50}>
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
        bottom="medium"
        container
        css={{
          phone: { paddingBottom: "$large", paddingTop: "$medium" },
        }}
        top="large">
        <Stack direction="row">
          {locations.map((location, index) => (
            <Stack
              key={location.id || index}
              direction="column"
              top="medium"
              width={25}
              widthTablet={50}>
              <Box
                image={`/images/location-${location.id}.jpg`}
                imageAlt={`Airbnb Management in Victoria, Australia - ${location.name}`}
                imageCTA={`/city/${location.id}`}
                imageHeight="10rem"
                theme="fill">
                <Text as="h4">{location.name}</Text>
              </Box>
            </Stack>
          ))}
        </Stack>
      </View>
    </>
  );
}
