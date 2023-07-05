import { View, Image, Button, Stack, Text, Badge } from "@cosmoau/ui";
import { ChatCircle, FacebookLogo, InstagramLogo, LinkedinLogo, Phone } from "@phosphor-icons/react";
import { track } from "@vercel/analytics";
import dynamic from "next/dynamic";
import { useState } from "react";

const Places = dynamic(() => import("@cosmoau/ui").then((mod) => mod.Places), {
  ssr: false,
});

export default function Footer(): JSX.Element {
  const [showInput, setShowInput] = useState(false);

  return (
    <footer id="footer">
      <View bottom="largest" container>
        <Stack direction="row">
          <Stack
            css={{
              phone: {
                height: "30rem",
              },
            }}
            direction="column"
            width={50}>
            <Image
              alt="
              A photo of coastal Victoria, Australia where ihostme is based and where we offer Airbnb management services to owners and investors.
            "
              blurDataURL="/images/misc-11.jpg"
              borderRadius="large"
              fill
              placeholder="blur"
              src="/images/misc-11.jpg"
            />
          </Stack>
          <Stack
            bottom="large"
            css={{
              paddingLeft: "$larger",
              phone: {
                paddingBottom: 0,
                paddingLeft: "$small",
              },
            }}
            direction="column"
            top="large"
            width={50}>
            <Text as="h3">Unlock your full earning potential today</Text>
            <Text>
              We manage properties that are available for at least <b>140 nights per year</b>, and currently earn, or have the
              potential to earn, at least <b>$45,000 per year</b>.
            </Text>
            <Text>
              We are interested in speaking to owners, investors and property managers who are interested in earning more from
              their property while enjoying the benefits of a professional Airbnb management service.
            </Text>
            <Text>
              To get an estimate of your property&apos;s potential earnings, try our free Airbnb Calculator. There is no need to
              sign up or share personal information; you&apos;ll get instant results on-screen.
            </Text>
            <Stack top="large">
              {showInput ? (
                <Places
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""}
                  placeholder="Main St, Mornington VIC 3931"
                  restrict
                  submit="Go"
                  submitFunction={(value): void => {
                    track("Pressed Airbnb Calculator (from Footer Address Capture)", {
                      location: "homepage",
                    });
                    if (typeof window === "undefined") return;
                    if (value) {
                      window.open(`https://cosmogroup.io/airbnb-calculator?query=${encodeURIComponent(value)}`);
                    } else {
                      window.open(`https://cosmogroup.io/airbnb-calculator`);
                    }
                  }}
                />
              ) : (
                <Button onClick={(): void => setShowInput(true)}>Airbnb Calculator</Button>
              )}
            </Stack>
            <Stack top="large">
              <Badge icon={<ChatCircle />}>
                <a href="mailto:ihostme@cosmogroup.io">ihostme@cosmogroup.io</a>
              </Badge>

              <Stack top="small">
                <Badge icon={<Phone />}>
                  <a href="tel:+61370355800">(03) 7035 5800</a>
                </Badge>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </View>

      <View
        bottom="medium"
        container
        css={{
          zIndex: 201,
        }}
        top="medium">
        <Stack direction="row" flex="center">
          <Stack direction="column" width={40} widthPhone={15}>
            <Stack>
              <Badge>
                <Image
                  alt="
                  ihostme logo, which is a pink icon of a house.
                  "
                  height={25}
                  src="/favicon.ico"
                  width={25}
                />
                <Text as="span" css={{ hiddenInline: "phone", marginLeft: "$small" }} inline="auto">
                  ihostme
                </Text>
              </Badge>
            </Stack>
          </Stack>
          <Stack align="right" direction="column" width={60} widthPhone={85}>
            <a href="https://www.facebook.com/cosmogroup.io">
              <Button inline="small">
                <FacebookLogo size={20} />
              </Button>
            </a>
            <a href="https://www.instagram.com/cosmogroup.io/" rel="noreferrer" target="_blank">
              <Button inline="small">
                <InstagramLogo size={20} />
              </Button>
            </a>
            <a href="https://www.linkedin.com/company/cosmoau/" rel="noreferrer" target="_blank">
              <Button inline="small">
                <LinkedinLogo size={20} />
              </Button>
            </a>
            <a href="https://cosmogroup.io/legal" rel="noreferrer" target="_blank">
              <Button external>Privacy</Button>
            </a>
          </Stack>
        </Stack>
        <Stack align="center" direction="row" top="large">
          <Stack direction="column">
            <Text accent as="small">
              Made in Ocean Grove and Melbourne. © 2023 <a href="https://cosmogroup.io">Cosmo</a>.
            </Text>
          </Stack>
        </Stack>
      </View>
    </footer>
  );
}
