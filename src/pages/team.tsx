import { Stack, Text, View, Box, Avatar, Image, Badge } from "@cosmoau/ui";
import { NextSeo } from "next-seo";

export default function Team(): JSX.Element {
  return (
    <>
      <NextSeo title="Meet the Team" />
      <View
        inverted
        top="large"
        css={{ background: "$text !important", paddingLeft: "$large", paddingRight: "$large" }}>
        <Stack direction="row" minimal>
          <Stack direction="column" width={50} widthPhone={55} minimal>
            <Box
              theme="fill"
              css={{
                background: "$accentIHM !important",
                borderBottomRightRadius: "0 !important",
                borderTopRightRadius: "0 !important",
                padding: "$larger",

                phone: {
                  padding: "$larger $large",
                },
              }}>
              <Text as="h2">
                <Text as="span" css={{ hiddenInline: "phone" }}>
                  Meet The&nbsp;
                </Text>
                Team
              </Text>
            </Box>
          </Stack>
          <Stack minimal direction="column" width={50} widthPhone={45}>
            <Image
              src="/images/misc-12.jpg"
              fillPosition="left"
              alt="A photo of a dining table with festive decorations."
              placeholder="blur"
              blurDataURL="/images/misc-12.jpg"
              fill
              css={{
                img: {
                  borderBottomRightRadius: "$large !important",
                  borderTopRightRadius: "$large !important",
                },
              }}
            />
          </Stack>
        </Stack>
      </View>

      <View
        container
        top="largest"
        bottom="largest"
        css={{
          phone: { paddingBottom: "$large", paddingTop: "$large" },
        }}>
        <Stack direction="row" flex="stretch">
          <Stack direction="column" width={33.334}>
            <Box theme="fill">
              <Stack
                css={{
                  display: "inline-flex",
                  marginRight: "$large",
                  verticalAlign: "middle",
                }}>
                <Avatar src="/images/team-kyle.jpg" fallback="KF" width={66} />
              </Stack>
              <Stack css={{ display: "inline-block", verticalAlign: "middle" }}>
                <Text as="h4" css={{ marginBottom: "$smaller !important" }}>
                  Kyle Fitzsimmons
                </Text>
                <Badge>Managing Director</Badge>
              </Stack>
            </Box>
          </Stack>
          <Stack
            direction="column"
            width={33.334}
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}>
            <Box theme="fill">
              <Stack
                css={{
                  display: "inline-flex",
                  marginRight: "$large",
                  verticalAlign: "middle",
                }}>
                <Avatar src="/images/team-harry.jpg" fallback="HK" width={66} />
              </Stack>

              <Stack css={{ display: "inline-block", verticalAlign: "middle" }}>
                <Text as="h4" css={{ marginBottom: "$smaller !important" }}>
                  Harrison Keck
                </Text>
                <Badge>Regional Coordinator</Badge>
              </Stack>
            </Box>
          </Stack>
          <Stack
            direction="column"
            width={33.334}
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}>
            <Box theme="fill">
              <Stack
                css={{
                  display: "inline-flex",
                  marginRight: "$large",
                  verticalAlign: "middle",
                }}>
                <Avatar src="/images/team-victoria.jpg" fallback="VM" width={66} />
              </Stack>

              <Stack css={{ display: "inline-block", verticalAlign: "middle" }}>
                <Text as="h4" css={{ marginBottom: "$smaller !important" }}>
                  Victoria Mills
                </Text>
                <Badge>Regional Coordinator</Badge>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
