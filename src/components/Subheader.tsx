import { Box, Stack, Image, View } from "@cosmoau/ui";
import { NextSeo } from "next-seo";
import { ReactNode } from "react";
/*
 title: string,
  children: ReactNode,
  image: string,
    parent?: boolean,
    */

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
  return (
    <View
      bottom="large"
      container
      css={{
        paddingLeft: "$medium",
        paddingRight: "$medium",
        backgroundImage: "url('/overlay.svg')",
      }}
      inverted
      top="large">
      <NextSeo title={title} titleTemplate={parent ? "%s" : undefined} />

      <Stack direction="row" flex="normal" minimal>
        <Stack direction="column" minimal width={50} widthTablet={100}>
          <Box
            css={{
              borderBottomRightRadius: "0 !important",
              borderTopRightRadius: "0 !important",
              background: "#1b2536",

              padding: parent ? "$largest $large" : "$larger $large",

              tablet: {
                borderBottomLeftRadius: "0 !important",
                borderBottomRightRadius: "0 !important",
                borderTopLeftRadius: "$large !important",
                borderTopRightRadius: "$large !important",
                padding: "$large $medium",
              },
            }}
            theme="fill">
            {children}
          </Box>
        </Stack>
        <Stack
          css={{
            tablet: { height: parent ? "40rem" : "20rem" },
          }}
          direction="column"
          minimal
          width={50}
          widthTablet={100}>
          <Image
            alt=""
            blurDataURL={image}
            css={{
              img: {
                borderBottomRightRadius: "$large !important",
                borderTopRightRadius: "$large !important",

                tablet: {
                  borderBottomLeftRadius: "$large !important",
                  borderBottomRightRadius: "$large !important",
                  borderTopLeftRadius: "0 !important",
                  borderTopRightRadius: "0 !important",
                },
              },
            }}
            fill
            placeholder="blur"
            priority
            src={image}
          />
        </Stack>
      </Stack>
    </View>
  );
}
