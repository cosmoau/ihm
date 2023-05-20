import { Stack, Text, View, Box, Avatar, Badge } from "@cosmoau/ui";

import { Subheader } from "../components/Subheader";

export default function Team(): JSX.Element {
  return (
    <>
      <Subheader image="/images/misc-12.jpg" title="Our Team">
        <Text as="h2">Our Team</Text>
      </Subheader>

      <View
        bottom="largest"
        container
        css={{
          phone: { paddingBottom: "$large", paddingTop: "$large" },
        }}
        top="largest">
        <Stack direction="row" flex="stretch">
          <Stack direction="column" width={33.33}>
            <Box theme="fill">
              <Stack
                css={{
                  display: "inline-flex",
                  marginRight: "$medium",
                  verticalAlign: "middle",
                }}>
                <Avatar fallback="KF" src="/images/team-kyle.jpg" width={66} />
              </Stack>
              <Stack css={{ display: "inline-block", verticalAlign: "middle" }}>
                <Text as="h4">Kyle Fitzsimmons</Text>
                <Badge theme="border">Managing Director</Badge>
              </Stack>
            </Box>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={33.33}>
            <Box theme="fill">
              <Stack
                css={{
                  display: "inline-flex",
                  marginRight: "$medium",
                  verticalAlign: "middle",
                }}>
                <Avatar fallback="HK" src="/images/team-harry.jpg" width={66} />
              </Stack>

              <Stack css={{ display: "inline-block", verticalAlign: "middle" }}>
                <Text as="h4">Harrison Keck</Text>
                <Badge theme="border">Regional Coordinator</Badge>
              </Stack>
            </Box>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={33.33}>
            <Box theme="fill">
              <Stack
                css={{
                  display: "inline-flex",
                  marginRight: "$medium",
                  verticalAlign: "middle",
                }}>
                <Avatar fallback="VM" src="/images/team-victoria.jpg" width={66} />
              </Stack>

              <Stack css={{ display: "inline-block", verticalAlign: "middle" }}>
                <Text as="h4">Victoria Mills</Text>
                <Badge theme="border">Regional Coordinator</Badge>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
