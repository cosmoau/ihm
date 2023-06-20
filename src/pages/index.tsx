import { Stack, Text, View, Box, Badge, Avatar, Input, Button } from "@cosmoau/ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

import locations from "../../locations.json";
import { Subheader } from "../components/Subheader";

const nextMonth = new Date();

nextMonth.setMonth(nextMonth.getMonth() + 1);

export default function Home(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <>
      <Subheader image="/images/misc-07.jpg" parent title="ihostme | Airbnb Management">
        <Text as="h1">Holiday Home Management on all the major booking platforms</Text>
        <Text>
          We&apos;re your local short-term property management experts. With <b>ihostme</b>, you can
          achieve better occupancy rates and revenue on Airbnb, Stayz, Vrbo, HomeAway, Booking.com
          and Homes & Villas Management by Marriott.
        </Text>
        <Stack
          css={{
            button: {
              background: "$text !important",
              color: "$background !important",
            },
          }}
          top="large">
          <Input
            listen
            placeholder="Your email"
            submit="Get Started"
            submitFunction={(): void => {
              if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                router.push(`/start?email=${email}`);
              } else {
                toast.error("Please enter a valid email address");
              }
            }}
            submitValid={(): boolean => email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) !== null}
            type="email"
            onChange={(e): void => setEmail(e.target.value)}
          />
        </Stack>
      </Subheader>

      <View bottom="largest" container top="largest">
        <Stack direction="row">
          <Stack align="center" direction="column" offset={20} width={60}>
            <Text as="h3">ihostme operates out of the top holiday destinations</Text>
            <Text bottom="medium">
              We are a team of highly skilled and experienced property managers who are dedicated to
              providing the best service to owners and investors across the Bellarine and Surf Coast
              regions of Victoria.
            </Text>
            <Link href="/start">
              <Button>List your Airbnb</Button>
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" top="large">
          <Stack align="center" direction="column">
            {locations.slice(0, 14).map((location, index) => (
              <Stack
                key={index}
                css={{
                  display: "inline-block",
                  marginRight: "$small",
                  paddingTop: "$smaller",
                  paddingBottom: "$smaller",
                }}>
                <Link href={`/city/${location.id}`}>
                  <Badge link theme="border">
                    <Stack
                      css={{
                        alignItems: "center",
                        display: "flex",
                        marginRight: "$small",
                        verticalAlign: "middle",
                      }}>
                      <Avatar fallback="" src={`/images/location-${location.id}.jpg`} width={15} />{" "}
                    </Stack>

                    <Text as="span" inline={"auto"}>
                      {location.name}
                    </Text>
                  </Badge>
                </Link>
              </Stack>
            ))}
            <Badge css={{ opacity: 0.5 }} small theme="border">
              + more
            </Badge>
          </Stack>
        </Stack>

        <Stack direction="row" flex="stretch" top="larger">
          <Stack direction="column" width={33.33}>
            <Box theme="fill">
              <Text as="h5">Your One Stop Hosting Shop</Text>
              <Text accent>
                We understand that your vacation rental is more than just an investment—it’s your
                home away from home.
              </Text>
              <Text accent>
                That’s why we offer a complete suite of services to help you manage your property,
                from real-time pricing optimisation to guest and bookings management.
              </Text>
            </Box>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={33.33}>
            <Box theme="fill">
              <Text as="h5">Simple, Easy Pricing</Text>
              <Text accent>
                Our standard management fee is 20% + GST for fully hosted clients, or 14% + GST for
                those who already have their own housekeeping and maintenance team in place.
              </Text>
              <Text accent>
                We also have a one-time set up fee of $500, and third-party charges are at cost.
              </Text>
            </Box>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$large",
              },
            }}
            direction="column"
            width={33.33}>
            <Box theme="fill">
              <Text as="h5">Your Holiday Home in Good Hands</Text>
              <Text accent>
                We&apos;ve developed an intuitive app that gives you full transparency of bookings
                and property performance.
              </Text>
              <Text accent>
                We also have an experienced client support team available 7/11 and specialist
                housekeepers to take care of all the little details.
              </Text>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
