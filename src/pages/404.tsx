import { Stack, Image, Text, View, Button, Box } from "@cosmoau/ui";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Custom404(): JSX.Element {
  return (
    <>
      <NextSeo title="Page not found" />
      <View
        css={{ background: "$text !important", paddingLeft: "$medium", paddingRight: "$medium" }}
        inverted
        top="medium">
        <Stack direction="row" minimal>
          <Stack direction="column" minimal width={50}>
            <Box
              css={{
                backgroundColor: "$accentIHM",
                backgroundImage: "url('/overlay.svg')",
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
                <Text as="span" css={{ hiddenInline: "phone" }}>
                  Page&nbsp;
                </Text>
                Not Found
              </Text>
            </Box>
          </Stack>
          <Stack css={{ hidden: "phone" }} direction="column" minimal width={50}>
            <Image
              alt="
                An overhead shot of the Great Ocean Road, where we wish we were driving right now."
              blurDataURL="/images/misc-09.jpg"
              css={{
                img: {
                  borderBottomRightRadius: "$large !important",
                  borderTopRightRadius: "$large !important",
                },
              }}
              fill
              placeholder="blur"
              src="/images/misc-09.jpg"
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
