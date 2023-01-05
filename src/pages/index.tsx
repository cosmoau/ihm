import { Stack, Text, View, Box, Badge, Image, Avatar, Input, Button } from "@cosmoau/ui";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Home(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const locations = [
    "Geelong",
    "Portarlington",
    "Queenscliff",
    "Point Lonsdale",
    "Ocean Grove",
    "Barwon Heads",
    "Torquay",
    "Jan Juc",
    "Anglesea",
    "Bellarine Peninsula",
    "Aireys Inlet",
    "Fairhaven",
    "Lorne",
    "Apollo Bay",
    "Surf Coast",
    "Mornington",
    "Mt Eliza",
    "Mt Martha",
    "Sorrento",
    "Portsea",
    "Rye",
    "Flinders",
    "Balnarring",
    "Somers",
    "Red Hill",
    "Safety Beach",
    "Mornington Peninsula",
    "Cowes",
    "Smiths Beach",
    "Ventnor",
    "Cape Woolamai",
    "Rhyll",
    "San Remo",
    "Phillip Island",
    "Cape Paterson",
    "Venus Bay",
    "Inverloch",
    "Bass Coast",
    "South Gippsland",
    "Hobart",
  ];

  return (
    <>
      <NextSeo title="ihostme | Airbnb Management" titleTemplate="%s" />

      <View
        css={{ background: "$text !important", paddingLeft: "$large", paddingRight: "$large" }}
        inverted
        top="large">
        <Stack direction="row" minimal>
          <Stack direction="column" minimal width={50}>
            <Box
              css={{
                "::placeholder": {
                  color: "$text",
                  fontSize: "$p !important",
                  opacity: 0.6,
                },
                background: "$accentIHM !important",
                borderBottomRightRadius: "0 !important",
                borderTopRightRadius: "0 !important",

                button: {
                  background: "$blueOverlay !important",
                  borderColor: "$blueBorder !important",
                  color: "$text !important",
                  fontWeight: "bold !important",
                  opacity: 1,
                },

                padding: "calc($largest * 1.5) $larger",

                phone: {
                  borderBottomLeftRadius: "0 !important",
                  borderBottomRightRadius: "0 !important",
                  borderTopLeftRadius: "$large !important",
                  borderTopRightRadius: "$large !important",
                  padding: "$larger $large",
                },
              }}
              theme="fill">
              <Text as="h1">Holiday Home Management on all the major booking platforms</Text>
              <Text accent as="p" bottom="larger">
                We&apos;re your local short-term property management experts. With <b>ihostme</b>,
                you can achieve better occupancy rates and revenue on Airbnb, Stayz, Vrbo, HomeAway,
                Booking.com and Homes & Villas Management by Marriott.
              </Text>

              <Input
                listen
                placeholder="Your email address"
                submit="💌 Free estimate"
                submitFunction={(): void => {
                  if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    router.push(`/start?email=${email}`);
                  } else {
                    toast.error("Please enter a valid email address");
                  }
                }}
                submitValid
                type="email"
                onChange={(e): void => setEmail(e.target.value)}
              />
            </Box>
          </Stack>
          <Stack
            css={{
              phone: { height: "40rem" },
            }}
            direction="column"
            minimal
            width={50}>
            <Image
              alt="A photo of a couch in a living room, with a flower vase on the coffee table."
              blurDataURL="/images/misc-07.jpg"
              css={{
                img: {
                  borderBottomRightRadius: "$large !important",
                  borderTopRightRadius: "$large !important",

                  phone: {
                    borderBottomLeftRadius: "$large !important",
                    borderBottomRightRadius: "$large !important",
                    borderTopLeftRadius: "0 !important",
                    borderTopRightRadius: "0 !important",
                  },
                },
              }}
              fill
              placeholder="blur"
              src="/images/misc-07.jpg"
            />
          </Stack>
        </Stack>
      </View>

      <View container top="largest">
        <Stack align="center" direction="row">
          <Stack direction="column" offset={25} width={50}>
            <Text as="h3">ihostme operates out of the top holiday destinations</Text>
            <Text as="p" bottom="large">
              We are a team of highly skilled and experienced property managers who are dedicated to
              providing the best service to owners and investors, from Point Lonsdale to Hobart.
            </Text>
            <Link href="/start">
              <Button>List your home</Button>
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" top="larger">
          <Stack align="center" direction="column" width={100}>
            <Stack>
              <Link href="/locations">
                {locations.map((location, index) => (
                  <Stack
                    key={index}
                    css={{
                      display: "inline-block",
                      marginRight: "$medium",
                      paddingTop: "$medium",
                    }}>
                    <Badge css={{ borderColor: "rgba(0,0,0,0.05)" }} theme="border">
                      <Stack
                        css={{
                          alignItems: "center",
                          display: "flex",
                          marginRight: "$smaller",
                          verticalAlign: "middle",
                        }}>
                        <Avatar
                          fallback=""
                          src={`/images/location-${location.toLowerCase().replace(/\s/g, "")}.jpg`}
                          width={15}
                        />{" "}
                      </Stack>

                      <Text accent as="span" inline={"auto"}>
                        {location}
                        {index !== locations.length - 1 ? "" : ""}
                      </Text>
                    </Badge>
                  </Stack>
                ))}
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container top="largest">
        <Stack direction="row" flex="stretch">
          <Stack direction="column" width={33.334}>
            <Box theme="fill">
              <Text as="h5">Your One Stop Hosting Shop</Text>
              <Text accent as="p">
                We understand that your vacation rental is more than just an investment—it’s your
                home away from home.
              </Text>
              <Text accent as="p">
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
            width={33.334}>
            <Box theme="fill">
              <Text as="h5">Simple, Easy Pricing</Text>
              <Text accent as="p">
                Our standard management fee is 20% + GST for fully hosted clients, or 14% + GST for
                those who already have their own housekeeping and maintenance team in place.
              </Text>
              <Text accent as="p">
                We also have a one-time set up fee from $400, and third-party charges are at cost.
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
            width={33.334}>
            <Box theme="fill">
              <Text as="h5">Your Holiday Home in Good Hands</Text>
              <Text accent as="p">
                We&apos;ve developed an intuitive app that gives you full transparency of bookings
                and property performance.
              </Text>
              <Text accent as="p">
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
