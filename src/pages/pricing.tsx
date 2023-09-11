import { Stack, Text, View, Box, Badge, Button } from "@cosmoau/ui";
import { CloudCheck, CloudSlash } from "@phosphor-icons/react";
import Link from "next/link";

import { Subheader } from "../components/Subheader";

export default function Pricing(): JSX.Element {
  const services = [
    {
      title: "Listing Management",
      both: true,
    },
    {
      title: "Booking Management",
      both: true,
    },
    {
      title: "Marketing & Acquisition",
      both: true,
    },
    {
      title: "Guest Communication & Support",
      both: true,
    },
    {
      title: "Guest Screening",
      both: true,
    },
    {
      title: "Dispute Resolution",
      both: true,
    },
    {
      title: "Multi-Channel Distribution",
      both: true,
    },
    {
      title: "Adaptive Pricing",
      both: true,
    },
    {
      title: "Cosmo Platform",
      both: true,
    },
    {
      title: "Housekeeping",
      both: false,
    },
    {
      title: "Linens & Towels",
      both: false,
    },
    {
      title: "Consumables",
      both: false,
    },
    {
      title: "Maintenance Facilitation",
      both: false,
    },
  ];

  return (
    <>
      <Subheader image="/images/misc-14.jpg" title="Management Pricing">
        <Text as="h2">Management Pricing</Text>
      </Subheader>

      <View bottom="largest" container top="largest">
        <Stack direction="row" flex="stretch">
          <Stack direction="column" width={50}>
            <Box image="/images/misc-16.jpg" imageAlt="">
              <Text as="h3">Collaborate Plan</Text>
              <Text>14% of the booking total</Text>
              <Text>
                We handle all marketing, bookings and guest support to enable owners to focus on keeping their homes
                clean and comfortable.
              </Text>
              <Text>Available in all locations.</Text>
              {services.map((service, index) => (
                <Stack
                  key={index}
                  css={{
                    opacity: service.both ? 1 : 0.3,
                  }}
                  top={index === 0 ? "medium" : "small"}>
                  <Badge icon={service.both ? <CloudCheck size={24} /> : <CloudSlash size={24} />}>
                    {service.title}
                  </Badge>
                </Stack>
              ))}
              <Stack top="large">
                <Link href="/start">
                  <Button>Get Started</Button>
                </Link>
              </Stack>
            </Box>
          </Stack>
          <Stack
            css={{
              phone: {
                paddingTop: "$medium",
              },
            }}
            direction="column"
            width={50}>
            <Box image="/images/misc-15.jpg" imageAlt="">
              <Text as="h3">Complete Plan</Text>
              <Text>20% of the booking total</Text>
              <Text>
                We take care of all aspects of management, including professional housekeeping, linen, consumables and
                maintenance facilitation.
              </Text>
              <Text>Not available in all locations. Please contact us for more information.</Text>
              {services.map((service, index) => (
                <Stack key={index} top={index === 0 ? "medium" : "small"}>
                  <Badge icon={<CloudCheck size={24} />}>{service.title}</Badge>
                </Stack>
              ))}
              <Stack top="large">
                <Link href="/start">
                  <Button>Get Started</Button>
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Stack direction="row" top="large">
          <Stack align="center" direction="column" offset={10} width={80}>
            <Text accent as="small">
              * All prices are in AUD and exclude GST. Booking total is the total amount paid by the guest including
              cleaning fees and other charges. A setup fee of $500 applies to all new listings and existing listings
              that do not meet our minimum standards.
            </Text>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
