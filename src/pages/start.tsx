import { Stack, Text, View, Box, Button, Badge } from "@cosmoau/ui";
import { Widget } from "@typeform/embed-react";
import { useRouter } from "next/router";

import { Subheader } from "../components/Subheader";

export default function Start(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Subheader image="/images/misc-09.jpg" title={router.query.city ? `${router.query.city} Property Management` : "Sign Up"}>
        <Text as="h2">{router.query.city ? `List your Airbnb in ${router.query.city}` : "Sign Up"}</Text>
        <Text accent>We will send information on getting started to your email address.</Text>
        {router.query.email && (
          <Stack top="medium">
            <Badge>{router.query.email}</Badge>
          </Stack>
        )}
      </Subheader>

      <View bottom="largest" container top="largest">
        <Stack align="center" direction="row" flex="baseline">
          <Stack direction="column">
            <Box
              css={{
                borderRadius: "large",
                height: 700,
                width: "100%",
                darkModeSpec: {
                  backgroundColor: "$text",
                },
              }}
              theme="fill">
              <Widget
                height={700}
                hidden={{
                  ...(router.query.email && {
                    email: router.query.email.toString(),
                  }),
                  url: "ihostme.com.au",
                }}
                id="cAmtR2rI"
                opacity={0}
                style={{
                  overflowY: "visible",
                }}
              />
            </Box>
            <Stack top="medium">
              <Text accent as="small" css={{ verticalAlign: "middle" }} inline="small">
                This form can also be found at:
              </Text>

              <Button css={{ verticalAlign: "middle" }} external small>
                <a href={"https://cosmo-au.typeform.com/to/cAmtR2rI#url=ihostme.com.au"} rel="noreferrer" target="_blank">
                  cosmo-au.typeform.com/to/cAmtR2rI
                </a>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
