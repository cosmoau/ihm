import { Stack, Text, View, Box, Avatar, Image, Badge } from "@cosmoau/ui";
import { NextSeo } from "next-seo";

export default function Team(): JSX.Element {
  return (
    <>
      <NextSeo title="Our Team" />
      <View
        css={{ background: "$text !important", paddingLeft: "$medium", paddingRight: "$medium" }}
        inverted
        top="medium">
        <Stack direction="row" minimal>
          <Stack direction="column" minimal width={50}>
            <Box
              css={{
                backgroundColor: "$accentIHM",
                backgroundImage:  "url('/overlay.svg')",
                borderBottomRightRadius: "0 !important",
                borderTopRightRadius: "0 !important",
                padding: "$larger $large",
                phone: {
                  padding: "$large $medium",
                  borderRadius: "$medium !important",
                  textAlign: "center",
                },
              }}
              theme="fill">
              <Text as="h2">
                  Our Team
              </Text>
            </Box>
          </Stack>
          <Stack css={{
            hidden: "phone",
          }} direction="column" minimal width={50}>
            <Image
              alt="A photo of a dining table with festive decorations."
              blurDataURL="/images/misc-12.jpg"
              css={{
                img: {
                  borderBottomRightRadius: "$large !important",
                  borderTopRightRadius: "$large !important",
                },
              }}
              fill
              fillPosition="left"
              placeholder="blur"
              src="/images/misc-12.jpg"
            />
          </Stack>
        </Stack>
      </View>

      <View
        bottom="larger"
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
