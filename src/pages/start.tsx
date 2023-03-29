import { Stack, Text, View, Box, Image, Divider, Button } from "@cosmoau/ui";
import { Widget } from "@typeform/embed-react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export default function Start(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <NextSeo title={router.query.city ? `${router.query.city} Property Management` : "Sign Up"} />
      <View css={{ background: "$text !important", paddingLeft: "$medium", paddingRight: "$medium" }} inverted top="medium">
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
              <Text as="h2">{router.query.city ? `List your home in ${router.query.city}` : "Sign Up"}</Text>
              <Text accent as="p">
                {router.query.email
                  ? `We will send your free earnings estimation, along with information on getting started to ${router.query.email}.`
                  : "Get your free earnings estimation today."}
              </Text>
            </Box>
          </Stack>
          <Stack css={{ hidden: "phone" }} direction="column" minimal width={50}>
            <Image
              alt="A photo of the beach walk in Point Lonsdale, Victoria, Australia."
              blurDataURL="/images/misc-14.jpg"
              css={{
                img: {
                  borderBottomRightRadius: "$large !important",
                  borderTopRightRadius: "$large !important",
                },
              }}
              fill
              placeholder="blur"
              src="/images/misc-14.jpg"
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
        <Stack align="center" direction="row" flex="stretch">
          <Stack direction="column">
            <Box
              css={{
                borderRadius: "large",
              }}
              theme="fill">
              <Stack bottom="small">
                <Widget
                  height={700}
                  hidden={{
                    email: router.query.email ? router.query.email.toString() : "Not provided somehow, Isaac check this",
                    url: "ihostme.com.au",
                  }}
                  id="cAmtR2rI"
                  opacity={0}
                  style={{
                    overflowY: "visible",
                  }}
                />
              </Stack>
              <Divider bottom="large" />
              <Text accent as="small" css={{ verticalAlign: "middle" }} inline="small">
                This form can also be found at:
              </Text>

              <Button css={{ verticalAlign: "middle" }} external small>
                <a
                  href={`https://cosmo-au.typeform.com/to/cAmtR2rI#url=ihostme.com.au&email=${
                    router.query.email ? router.query.email.toString() : "NA"
                  }`}
                  rel="noreferrer"
                  target="_blank">
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
