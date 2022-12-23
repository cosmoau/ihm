import { View, Image, Button, Stack, Text, Badge, fadeIn } from "@cosmoau/ui";
import { ChatCircle, FacebookLogo, InstagramLogo, LinkedinLogo, Phone } from "phosphor-react";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <View container top={7} bottom={7} css={{ borderTop: "0.1rem solid $border" }}>
        <Stack direction="row" css={{ animation: `${fadeIn}  0.8s ease-in-out` }}>
          <Stack
            direction="column"
            width={50}
            css={{
              phone: {
                height: "30rem",
              },
            }}>
            <Image
              src="/images/misc-11.jpg"
              alt="
              A photo of coastal Victoria, Australia where ihostme is based and where we offer Airbnb management services to owners and investors.
            "
              fill
              blurDataURL="/images/misc-11.jpg"
              placeholder="blur"
              borderRadius={3}
            />
          </Stack>
          <Stack
            top={6}
            bottom={6}
            direction="column"
            width={50}
            css={{
              paddingLeft: "$7",
              phone: {
                paddingBottom: 0,
                paddingLeft: "$3",
              },
            }}>
            <Text as="h3">Unlock your full earning potential today</Text>
            <Text as="p" accent>
              ihostme manages properties that earn $40,000 or more in rental income per year.
            </Text>
            <Text as="p" accent>
              We are interested in speaking to owners of homes and holiday rentals that are
              available for at least 140 nights per year.
            </Text>
            <Stack top={5}>
              <a href="mailto:ihostme@cosmogroup.io">
                <Badge
                  inline={4}
                  icon={<ChatCircle />}
                  css={{
                    phone: {
                      marginBottom: "$3",
                      marginTop: "$3",
                    },
                  }}>
                  ihostme@cosmogroup.io
                </Badge>
              </a>
              <Badge
                inline="auto"
                icon={<Phone />}
                css={{
                  phone: {
                    marginBottom: "$3",
                    marginTop: "$3",
                  },
                }}>
                <a href="tel:+61370355800">(03) 7035 5800</a>
              </Badge>
            </Stack>
          </Stack>
        </Stack>
      </View>

      <View
        css={{
          background: "$accentIHM !important",
          borderTop: "0.1rem solid $border",
          zIndex: 201,
        }}
        container
        top={6}
        inverted
        bottom={6}>
        <Stack
          direction="row"
          flex="center"
          css={{
            animation: `${fadeIn}  0.8s ease-in-out`,
          }}>
          <Stack direction="column" width={40} widthPhone={15}>
            <Stack>
              <Badge theme="border">
                <Image
                  src="/favicon.ico"
                  width={25}
                  height={25}
                  placeholder="blur"
                  blurDataURL="/favicon.ico"
                  alt="
                  ihostme logo, which is a pink icon of a house.
                  "
                />
                <Text as="p" bold inline="auto" css={{ hiddenInline: "phone", marginLeft: "$4" }}>
                  ihostme
                </Text>
              </Badge>
            </Stack>
          </Stack>
          <Stack direction="column" width={60} widthPhone={85} align="right">
            <a href="https://www.facebook.com/cosmogroup.io">
              <Button theme="fill" inline={4} ariaLabel="Facebook" name="facebook">
                <FacebookLogo size={20} />
              </Button>
            </a>
            <a href="https://www.instagram.com/cosmogroup.io/" rel="noreferrer" target="_blank">
              <Button theme="fill" inline={4} ariaLabel="Instagram" name="instagram">
                <InstagramLogo size={20} />
              </Button>
            </a>
            <a href="https://www.linkedin.com/company/cosmoau/" rel="noreferrer" target="_blank">
              <Button theme="fill" inline={4} ariaLabel="LinkedIn" name="linkedin">
                <LinkedinLogo size={20} />
              </Button>
            </a>
            <a href="https://cosmogroup.io/legal" target="_blank" rel="noreferrer">
              <Button theme="fill" external>
                Privacy
              </Button>
            </a>
          </Stack>
        </Stack>
        <Stack direction="row" align="center" top={5}>
          <Stack direction="column">
            <Text as="small" accent>
              Made in Ocean Grove and Melbourne. Operated by Cosmo AU Pty Ltd (ABN 22139144915).
            </Text>
          </Stack>
        </Stack>
      </View>
    </footer>
  );
}
