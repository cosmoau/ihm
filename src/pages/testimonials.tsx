import { Stack, Text, Image, View, Box, Badge, fadeIn } from "@cosmoau/ui";
import { NextSeo } from "next-seo";

export default function Testimonials(): JSX.Element {
  return (
    <>
      <NextSeo title="Client Testimonials" />
      <View
        inverted
        top={5}
        css={{ background: "$text !important", paddingLeft: "$5", paddingRight: "$5" }}>
        <Stack direction="row" minimal>
          <Stack direction="column" width={50} widthPhone={55} minimal>
            <Box
              theme="fill"
              css={{
                background: "$accentIHM !important",
                borderBottomRightRadius: "0 !important",
                borderTopRightRadius: "0 !important",
                padding: "$7 $6",

                phone: {
                  padding: "$6 $5",
                },
              }}>
              <Text
                as="h2"
                css={{
                  animation: `${fadeIn}  0.5s ease-in-out`,
                }}>
                <Text as="span" css={{ hiddenInline: "phone" }}>
                  Client&nbsp;
                </Text>
                Testimonials
              </Text>
            </Box>
          </Stack>
          <Stack minimal direction="column" width={50} widthPhone={45}>
            <Image
              src="/images/misc-10.jpg"
              alt="A photo of a bed."
              placeholder="blur"
              blurDataURL="/images/misc-10.jpg"
              fill
              css={{
                img: {
                  borderBottomRightRadius: "$3 !important",
                  borderTopRightRadius: "$3 !important",
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
          phone: { paddingBottom: "$5", paddingTop: "$5" },
        }}>
        <Stack direction="row" flex="stretch" css={{ animation: `${fadeIn}  0.8s ease-in-out` }}>
          <Stack direction="column" width={50}>
            <Box theme="fill">
              <Stack bottom={5}>
                <Stack
                  css={{
                    alignItems: "center",
                    display: "inline-flex",
                    justifyContent: "center",
                    marginRight: "$5",
                    verticalAlign: "middle",
                  }}>
                  <Image
                    src="/images/testimonial-01.jpg"
                    width={60}
                    height={60}
                    borderRadius={3}
                    alt="A photo of The Woodville, an Airbnb in Ocean Grove, Victoria, Australia."
                  />
                </Stack>
                <Stack
                  css={{
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}>
                  <Text as="h4">
                    The Woodville
                    <Text as="span" css={{ hidden: "phone" }}>
                      , Ocean Grove
                    </Text>
                  </Text>
                  <Badge>Josie Pileio and Rob Farrugia</Badge>
                </Stack>
              </Stack>
              <Text as="p" accent>
                We were moving overseas and from the very beginning when we were just considering
                our options, ihostme were able to provide advice, support and the peace of mind to
                just make it happen!
              </Text>
              <Text as="p" accent>
                ihostme arranged everything from setting up our listing on the various sites
                available, prepared the host information, all the welcome packs and all other host
                related resources ready for our guests. The guest feedback we’ve had so far, has
                always been very positive about the service they’ve received and the experience they
                have whilst staying in our home.
              </Text>

              <Text as="p" accent>
                We find both Dave and Jayne to be very professional, attentive and very
                knowledgeable about the management of our property and their friendly and
                approachable manner makes it even more enjoyable to work with them.
              </Text>

              <Text as="p" accent>
                We have been with ihostme® for over 6 years and I wouldn’t consider anyone else to
                manage our property.
              </Text>
            </Box>
          </Stack>
          <Stack
            direction="column"
            width={50}
            css={{
              phone: {
                paddingTop: "$5",
              },
            }}>
            <Box theme="fill">
              <Stack bottom={5}>
                <Stack
                  css={{
                    alignItems: "center",
                    display: "inline-flex",
                    justifyContent: "center",
                    marginRight: "$5",
                    verticalAlign: "middle",
                  }}>
                  <Image
                    src="/images/testimonial-02.jpg"
                    width={60}
                    height={60}
                    borderRadius={3}
                    alt="A photo of Blue Waters Retreat, an Airbnb in Ocean Grove, Victoria, Australia."
                  />
                </Stack>
                <Stack
                  css={{
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}>
                  <Text as="h4">
                    Blue Waters Retreat
                    <Text as="span" css={{ hidden: "phone" }}>
                      , Ocean Grove
                    </Text>
                  </Text>
                  <Badge>Lorien and Dean Platt</Badge>
                </Stack>
              </Stack>

              <Text as="p" accent>
                ihostme provided invaluable assistance and advice in getting my property ready to
                list within 2 weeks of first contact, despite being away on holidays themselves at
                the time! ihostme’s marketing expertise ensured that the house was booked for every
                weekend, plus significant numbers of week days as well.
              </Text>

              <Text as="p" accent>
                I have found the services provided through ihostme® to be extremely helpful,
                enabling me to leave all aspects of AirBnB management in their capable and
                experienced hands, and providing peace of mind that it is all under control.
              </Text>
              <Text as="p" accent>
                They are very professional, great communicators and problem solvers and clearly
                willing to go the extra mile to facilitate a positive experience all round for
                owners as well as the all-important guests.
              </Text>

              <Text as="p" accent>
                I highly recommend the ihostme® service and would be surprised if it doesn’t
                continue to grow beyond Ocean Grove and the immediate surrounds as word travels of
                their sterling service.
              </Text>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
