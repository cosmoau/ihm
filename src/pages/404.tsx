import { Stack, Text, View, Button } from "@cosmoau/ui";
import Link from "next/link";

import { Subheader } from "../components/Subheader";

export default function Custom404(): JSX.Element {
  return (
    <>
      <Subheader image="/images/misc-09.jpg" title="Page not found">
        <Text as="h2">
          <Text as="span" css={{ hiddenInline: "phone" }}>
            Page&nbsp;
          </Text>
          Not Found
        </Text>
      </Subheader>
      <View
        bottom="largest"
        container
        css={{
          phone: { paddingBottom: "$large", paddingTop: "$large" },
        }}
        top="largest">
        <Stack direction="row">
          <Stack direction="column">
            <Text as="h3">Sorry, the page you are looking for is not available. </Text>
            <Text as="p" bottom="large">
              Feel free to browse our site from the menu at the top of the page.
            </Text>
            <Link href="/">
              <Button>Go to our homepage</Button>
            </Link>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
