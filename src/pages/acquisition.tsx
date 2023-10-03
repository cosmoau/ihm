import { View, Text, Image, Stack, Button, fadeIn, Logo } from "@cosmoau/ui";
import Link from "next/link";
import { useState } from "react";

import logoLight from "../../public/images/logo-new-light.png";

export default function Fin(): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  return (
    <View
      bottom="medium"
      container
      css={{
        display: "flex",
        justifyContent: "center",

        minHeight: "100vh",
      }}
      inverted
      top="medium">
      <Stack
        css={{
          maxWidth: "120rem",
          margin: "0 auto",
        }}>
        <Link href="/">
          <Image
            alt="
              ihostme logo, which is a pink icon of a house with black sans-serif text next to it.
              "
            height={36.5 * 1.15}
            src={logoLight.src}
            width={120 * 1.15}
          />
        </Link>
        <Stack bottom="medium" top="large">
          <Text as="h3" bottom="large">
            Thank you for your business over the years, we are now part of the Cosmo family.
          </Text>
          <Text>
            <Text as="strong">Client Notice:</Text> On the 1st of January, 2024, the merger and acquisition of IHOSTME
            PTY LTD (ABN: 94628464246) into COSMO AU PTY LTD (ABN: 22139144915) was successfully completed. This
            strategic decision is a part of our ongoing efforts to streamline our operations and improve our services
            for our valued clients. As a result of this merger, our brand has been officially retired, and all
            operations and services have been integrated into Cosmo.
          </Text>
        </Stack>
        {expanded ? (
          <Stack
            css={{
              animation: `${fadeIn} 0.7s ease-in-out`,
            }}>
            <Text>
              Our decision to form a partnership and merge with Cosmo was founded on our shared commitment to core
              values and an unwavering dedication to delivering exceptional client experiences. This collaborative
              effort offered our current clients the invaluable opportunity to leverage the technological and resource
              advantages of a larger, more robust enterprise. We embarked on this transformative journey with immense
              enthusiasm, wholeheartedly embracing the chance to become an integral part of the Cosmo family.
            </Text>
            <Text>
              The steadfast support our clients have provided over the years has not only been deeply appreciated but
              has also played a pivotal role in our growth and ultimate success. As we integrate our strengths and
              capabilities with Cosmo, we eagerly anticipate a future brimming with even greater opportunities for
              innovation and excellence in serving our valued clients.
            </Text>
            <Text>
              If you have any questions or concerns, please do not hesitate to contact us at{" "}
              <a href="mailto:contact@cosmogroup.io">
                <Text as="span" link="default">
                  contact@cosmogroup.io
                </Text>
              </a>
              . For now, we invite you to visit and get started over at{" "}
              <a href="https://cosmogroup.io">
                {" "}
                <Text as="span" link="default">
                  www.cosmogroup.io
                </Text>
              </a>
              , or click the button below.
            </Text>
          </Stack>
        ) : (
          <Text as="span" link="default" onClick={(): void => setExpanded(true)}>
            Read more
          </Text>
        )}
        <Stack top="large">
          <a href="https://cosmogroup.io" rel="noopener noreferrer" target="_blank">
            <Button external>Visit Cosmo</Button>
          </a>
        </Stack>

        <Stack top="larger">
          <Logo inline="medium" width={80} />

          <Text
            accent
            as="small"
            css={{
              fontSize: "1.2rem",
              textTransform: "uppercase",
              opacity: 0.75,
            }}>
            &copy; 2024 COSMO AU PTY LTD, 8/100 Dover Street, Cremorne, VIC 3121, Australia.
          </Text>
        </Stack>
      </Stack>
    </View>
  );
}
