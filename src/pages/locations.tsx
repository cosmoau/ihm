import { Stack, Text, View, Box } from "@cosmoau/ui";
import Link from "next/link";

import locations from "../../locations.json";
import { Subheader } from "../components/Subheader";

export default function LocationsPage(): JSX.Element {
  return (
    <>
      <Subheader image="/images/misc-13.jpg" title="Service Locations">
        <Text as="h2">Serviced Locations</Text>
      </Subheader>
      <View bottom="largest" container top="large">
        <Stack direction="row">
          {locations.map((location, index) => (
            <Stack key={location.id || index} direction="column" top="large" width={25} widthTablet={50}>
              <Box
                image={`/images/location-${location.id}.jpg`}
                imageAlt={`Airbnb Management in Victoria, Australia - ${location.name}`}
                imageCTA={`/city/${location.id}`}
                imageHeight="10rem"
                theme="fill">
                <Link href={`/city/${location.id}`}>
                  <Text as="h4">{location.name}</Text>
                </Link>
              </Box>
            </Stack>
          ))}
        </Stack>
      </View>
    </>
  );
}
