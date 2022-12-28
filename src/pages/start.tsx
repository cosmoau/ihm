import { Stack, Text, View, Box, Image, fadeIn, Divider, Button } from "@cosmoau/ui";
import { Widget } from "@typeform/embed-react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Start(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <NextSeo title={router.query.city ? `${router.query.city} Property Management` : "Sign Up"} />
      <View
        inverted
        top="e"
        css={{ background: "$text !important", paddingLeft: "$e", paddingRight: "$e" }}>
        <Stack direction="row" minimal>
          <Stack direction="column" width={50} minimal>
            <Box
              theme="fill"
              css={{
                background: "$accentIHM !important",
                borderBottomRightRadius: "0 !important",
                borderTopRightRadius: "0 !important",
                padding: "$g $f",

                phone: {
                  borderRadius: "$c !important",
                  padding: "$f $e",
                },
              }}>
              <Text
                as="h2"
                css={{
                  animation: `${fadeIn}  0.5s ease-in-out`,
                }}>
                {router.query.city ? `List your home in ${router.query.city}` : "Sign Up"}
              </Text>
              <Text
                as="p"
                accent
                css={{
                  animation: `${fadeIn}  0.8s ease-in-out`,
                }}>
                {router.query.email
                  ? `We will send your free earnings estimation, along with information on getting started to ${router.query.email}.`
                  : "Get your free earnings estimation today."}
              </Text>
            </Box>
          </Stack>
          <Stack minimal direction="column" width={50} css={{ hidden: "phone" }}>
            <Image
              src="/images/misc-14.jpg"
              alt="A photo of the beach walk in Point Lonsdale, Victoria, Australia."
              blurDataURL="/images/misc-14.jpg"
              placeholder="blur"
              fill
              css={{
                img: {
                  borderBottomRightRadius: "$c !important",
                  borderTopRightRadius: "$c !important",
                },
              }}
            />
          </Stack>
        </Stack>
      </View>
      <View
        container
        top="g"
        bottom="g"
        css={{
          phone: { paddingBottom: "$e", paddingTop: "$e" },
        }}>
        <Stack
          direction="row"
          flex="stretch"
          align="center"
          css={{ animation: `${fadeIn}  0.8s ease-in-out` }}>
          <Stack direction="column">
            <Box
              theme="fill"
              css={{
                borderRadius: "$c",
              }}>
              <Stack bottom="c">
                <Widget
                  id="cAmtR2rI"
                  height={700}
                  opacity={0}
                  hidden={{
                    email: router.query.email
                      ? router.query.email.toString()
                      : "Not provided somehow, Isaac check this",
                    url: "ihostme.com.au",
                  }}
                  style={{
                    overflowY: "visible",
                  }}
                />
              </Stack>
              <Divider bottom="e" />
              <Text as="small" accent inline="d" css={{ verticalAlign: "middle" }}>
                Form not working?
              </Text>

              <Button external small css={{ verticalAlign: "middle" }}>
                <a
                  href={`https://cosmo-au.typeform.com/to/cAmtR2rI#url=ihostme.com.au&email=${
                    router.query.email ? router.query.email.toString() : "NA"
                  }`}
                  target="_blank"
                  rel="noreferrer">
                  cosmo-au.typeform.com/to/cAmtR2rI
                </a>
              </Button>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
