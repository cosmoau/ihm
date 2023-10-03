import { Stack, View, Text, Button, LogoIcon } from "@cosmoau/ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { ReactNode } from "react";
import toast from "react-hot-toast";

export function Subheader({
  title,
  children,
  image,
  parent,
}: {
  children: ReactNode;
  image: string;
  parent?: boolean;
  title: string;
}): JSX.Element {
  const router = useRouter();

  return (
    <>
      <View
        css={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          zIndex: 0,
          padding: "0 0 0 0",
        }}
        inverted>
        <NextSeo title={title} titleTemplate={parent ? "%s" : undefined} />

        <Stack
          align="center"
          bottom="larger"
          css={{
            backgroundColor: "rgba(14, 22, 35, 0.65)",
            backdropFilter: "blur(0.25rem)",
            flex: "1 1 auto",

            zIndex: 1,
            paddingTop: "calc($largest + $medium)",
          }}
          direction="row">
          <Stack
            align="center"
            css={{
              paddingLeft: "$large !important",
              paddingRight: "$large !important",
            }}
            direction="column"
            offset={27.5}
            offsetTablet={15}
            width={45}
            widthTablet={70}>
            {children}
          </Stack>
        </Stack>
      </View>
      <View
        bottom={router.asPath === "/" ? "medium" : "small"}
        css={{
          borderTop: "0.1rem solid $border",
          borderBottom: "0.1rem solid $border",
        }}
        gradient
        top={router.asPath === "/" ? "medium" : "small"}>
        <Stack direction="row">
          <Stack align="center" direction="column">
            {router.asPath === "/" ? (
              <>
                <Text as="small" balanced bottom="medium">
                  <Text as="strong">Client Notice:</Text> In 2022, Cosmo acquired ihostme. On the 1st of January 2024,
                  this website will be shut down as the merger completes. All services are currently operated by Cosmo,
                  ensuring no disruption for existing clients. We invite you to visit and get started on our updated
                  website at www.cosmogroup.io.
                </Text>
                <a
                  href="https://cosmogroup.io/?utm_source=ihostme&utm_medium=referral&utm_campaign=website&utm_content=client-notice"
                  rel="noopener noreferrer"
                  target="_blank">
                  <Button icon={<LogoIcon width={18} />} inline="small" small>
                    Visit Cosmo
                  </Button>
                </a>
                <Link href="/acquisition">
                  <Button
                    small
                    theme="minimal"
                    onClick={(): string =>
                      toast(
                        "Please note: This preview page will replace the current website on the 1st of January 2024.",
                      )
                    }>
                    Learn more
                  </Button>
                </Link>
              </>
            ) : (
              <Text as="small" balanced>
                <Text as="strong">Client Notice:</Text> In 2022, Cosmo acquired ihostme. On the 1st of January 2024,
                this website will be shut down as the merger completes.
              </Text>
            )}
          </Stack>
        </Stack>
      </View>
    </>
  );
}
