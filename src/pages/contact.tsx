import { Stack, Text, View, Box, Button, Badge } from "@cosmoau/ui";
import { Widget } from "@typeform/embed-react";

import { Subheader } from "../components/Subheader";

export default function Contact(): JSX.Element {
  return (
    <>
      <Subheader image="/images/misc-06.jpg" title="Contact Us">
        <Text as="h2">Contact Us</Text>
        <Text as="p">
          Our team is here to help you with any questions you may have. Please fill out the form
          below and we will get back to you as soon as possible.
        </Text>
        <Stack flexduo top="medium">
          <Text accent>Email</Text>
          <Badge copy copyText="ihostme@cosmogroup.io">
            ihostme@cosmogroup.io
          </Badge>
        </Stack>
        <Stack flexduo top="small">
          <Text accent>Phone</Text>
          <Badge copy copyText="+61370355800">
            (03) 7035 5800
          </Badge>
        </Stack>
        <Stack flexduo top="small">
          <Text accent>Head Office</Text>
          <Badge copy copyText="COSMO AU PTY LTD, 8/100 Dover St, Cremorne VIC 3121">
            8/100 Dover St, Cremorne VIC
          </Badge>
        </Stack>
      </Subheader>

      <View
        bottom="largest"
        container
        css={{
          phone: { paddingBottom: "$large", paddingTop: "$large" },
        }}
        top="largest">
        <Stack align="center" direction="row" flex="baseline">
          <Stack direction="column">
            <Box
              css={{
                borderRadius: "large",
              }}
              theme="fill">
              <Widget
                height={700}
                hidden={{
                  url: "ihostme.com.au",
                }}
                id="dA0mHRs2"
                opacity={0}
                style={{
                  overflowY: "visible",
                }}
              />
            </Box>
            <Stack top="large">
              <Text accent as="small" css={{ verticalAlign: "middle" }} inline="small">
                This form can also be found at:
              </Text>

              <Button css={{ verticalAlign: "middle" }} external small>
                <a
                  href={"https://cosmo-au.typeform.com/to/dA0mHRs2#url=ihostme.com.au"}
                  rel="noreferrer"
                  target="_blank">
                  cosmo-au.typeform.com/to/dA0mHRs2
                </a>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
