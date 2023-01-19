import { Stack, Text, Image, View, Box, Badge } from "@cosmoau/ui";
import { NextSeo } from "next-seo";

export default function Testimonials(): JSX.Element {
  return (
    <>
      <NextSeo title="Client Testimonials" />
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
                  Client&nbsp;
                </Text>
                Testimonials
              </Text>
            </Box>
          </Stack>
          <Stack direction="column" minimal width={50} widthPhone={45}>
            <Image
              alt="A photo of a bed."
              blurDataURL="/images/misc-10.jpg"
              css={{
                img: {
                  borderBottomRightRadius: "$large !important",
                  borderTopRightRadius: "$large !important",
                },
              }}
              fill
              placeholder="blur"
              src="/images/misc-10.jpg"
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
          <Stack direction="column" width={50}>
            <Box
              image="/images/testimonial-01.jpg"
              imageAlt="A photo of The Woodville, an Airbnb in Ocean Grove, Victoria, Australia."
              theme="fill">
              <Text as="h4">The Woodville, Ocean Grove</Text>

              <Text accent as="p">
                We were moving overseas and from the very beginning when we were just considering
                our options, ihostme were able to provide advice, support and the peace of mind to
                just make it happen!
              </Text>
              <Text accent as="p">
                ihostme arranged everything from setting up our listing on the various sites
                available, prepared the host information, all the welcome packs and all other host
                related resources ready for our guests. The guest feedback we’ve had so far, has
                always been very positive about the service they’ve received and the experience they
                have whilst staying in our home.
              </Text>

              <Text accent as="p">
                We find both Dave and Jayne to be very professional, attentive and very
                knowledgeable about the management of our property and their friendly and
                approachable manner makes it even more enjoyable to work with them.
              </Text>

              <Text accent as="p" bottom="medium">
                We have been with ihostme® for over 6 years and I wouldn’t consider anyone else to
                manage our property.
              </Text>
              <Badge theme="border">Josie P. and Rob F.</Badge>
            </Box>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={50}>
            <Box
              image="/images/testimonial-02.jpg"
              imageAlt="A photo of Blue Waters Retreat, an Airbnb in Ocean Grove, Victoria, Australia."
              theme="fill">
              <Text as="h4">Blue Waters Retreat, Ocean Grove</Text>

              <Text accent as="p">
                ihostme provided invaluable assistance and advice in getting my property ready to
                list within 2 weeks of first contact, despite being away on holidays themselves at
                the time! ihostme’s marketing expertise ensured that the house was booked for every
                weekend, plus significant numbers of week days as well.
              </Text>

              <Text accent as="p">
                I have found the services provided through ihostme® to be extremely helpful,
                enabling me to leave all aspects of AirBnB management in their capable and
                experienced hands, and providing peace of mind that it is all under control.
              </Text>
              <Text accent as="p">
                They are very professional, great communicators and problem solvers and clearly
                willing to go the extra mile to facilitate a positive experience all round for
                owners as well as the all-important guests.
              </Text>

              <Text accent as="p" bottom="medium">
                I highly recommend the ihostme® service and would be surprised if it doesn’t
                continue to grow beyond Ocean Grove and the immediate surrounds as word travels of
                their sterling service.
              </Text>
              <Badge theme="border">Lorien and Dean P.</Badge>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
