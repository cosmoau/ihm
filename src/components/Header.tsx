import {
  View,
  Image,
  Text,
  Stack,
  Button,
  Select,
  Avatar,
  type ISelect,
  useTheme,
  Menu,
  useMountSSR,
} from "@cosmoau/ui";
import { CaretDown, EnvelopeSimple, GridFour, MapPin } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import locations from "../../locations.json";
import logoLight from "../../public/images/logo-new-light.png";
import logoDark from "../../public/images/logo-new.png";

export default function Header(): JSX.Element {
  const router = useRouter();
  const mounted = useMountSSR();
  const [inverted, setInverted] = useState(true);
  const { isDarkTheme } = useTheme();

  const optionsPhone = [
    {
      label: "Home",
      value: "/",
    },
    {
      label: "Testimonials",
      value: "/testimonials",
    },
    {
      label: "Locations",
      value: "/locations",
    },
    {
      label: "Pricing",
      value: "/pricing",
    },
    {
      label: "Contact",
      value: "/contact",
    },
    {
      label: "Bookings",
      value: "https://cosmo.homes",
    },
    {
      label: "Sign Up",
      value: "https://cosmogroup.io/start",
    },
  ];

  const optionsLocations = [
    {
      label: "View All",
      value: "/locations",
      icon: <GridFour />,
      iconPosition: "right",
    },
  ].concat(
    locations.map((location) => ({
      label: location.name,
      value: `/city/${location.id}`,
      icon: (
        <Avatar
          alt={location.name}
          fallback={location.name
            .split(" ")
            .map((word) => word[0])
            .join("")}
          src={`/images/location-${location.id}.jpg`}
        />
      ),
      iconPosition: "right",
    })),
  ) as ISelect["options"];

  const handleSelection = (value: string): void => {
    if (value.includes("http")) {
      window.open(value, "_blank");
    } else {
      router.push(value);
    }
  };

  useEffect(() => {
    if (mounted) {
      window.addEventListener("scroll", () => {
        setInverted(window.scrollY < 500);
      });
    }
  }, [mounted]);

  const activeSelection = optionsPhone.find((option) => option.value === router.pathname)?.value || "";

  return (
    <header
      id="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
      <View bottom="small" inverted={inverted} top="small">
        <Stack css={{ visible: "tablet" }}>
          <Stack direction="row" flex="center">
            <Stack direction="column" width={70} widthPhone={70}>
              <Link href="/">
                <Image
                  alt="
              ihostme logo, which is a pink icon of a house with black sans-serif text next to it.
              "
                  height={36.5}
                  src={!inverted && !isDarkTheme ? logoDark.src : logoLight.src}
                  width={120}
                />{" "}
              </Link>
            </Stack>
            <Stack align="right" direction="column" width={30} widthPhone={30}>
              <Menu
                key={router?.pathname}
                options={optionsPhone}
                selection={activeSelection}
                trigger={<Button theme="fill">Menu</Button>}
                onSelection={(value): void => handleSelection(value)}>
                <Stack bottom="small">
                  <Link href="/contact">
                    <Text accent as="small" inline="auto" link="minimal">
                      <EnvelopeSimple />
                      &nbsp; ihostme@cosmogroup.io
                    </Text>
                  </Link>
                </Stack>

                <Link href="/contact">
                  <Text accent as="small" inline="auto" link="minimal">
                    <MapPin />
                    &nbsp; 8/100 Dover Street, Cremorne, VIC
                  </Text>
                </Link>
              </Menu>
            </Stack>
          </Stack>
        </Stack>
        <Stack css={{ hidden: "tablet" }}>
          <Stack direction="row" flex="center">
            <Stack direction="column" width={80}>
              <Stack
                bottom="smaller"
                css={{
                  display: "inline-flex",
                  verticalAlign: "middle",
                  paddingRight: "$small",
                }}
                top="smaller">
                <Link href="/">
                  <Image
                    alt="
              ihostme logo, which is a pink icon of a house with black sans-serif text next to it.
              "
                    height={36.5 * 0.95}
                    src={!inverted && !isDarkTheme ? logoDark.src : logoLight.src}
                    width={120 * 0.95}
                  />{" "}
                </Link>
              </Stack>
              <Link href="/pricing">
                <Button theme={router.pathname === "/pricing" ? "fill" : "minimal"}>Pricing</Button>
              </Link>
              <Link href="/testimonials">
                <Button theme={router.pathname === "/testimonials" ? "fill" : "minimal"}>Testimonials</Button>
              </Link>
              <Select
                options={optionsLocations}
                selection={[router.asPath]}
                trigger={
                  <Button
                    icon={<CaretDown weight="light" />}
                    iconPosition="right"
                    theme={router.pathname === "/locations" || router.pathname.includes("/city/") ? "fill" : "minimal"}>
                    Locations
                  </Button>
                }
                width="25rem"
                onSelection={(value): void => handleSelection(value)}
              />
              <Link href="/contact">
                <Button theme={router.pathname === "/contact" ? "fill" : "minimal"}>Contact</Button>
              </Link>
              <a href="https://cosmogroup.io/blog" rel="noreferrer" target="_blank">
                <Button theme="minimal">Blog</Button>
              </a>
            </Stack>
            <Stack align="right" direction="column" width={20}>
              <a href="https://cosmogroup.io/start" target="_blank">
                <Button inline="auto" theme="fill">
                  Sign Up
                </Button>
              </a>
            </Stack>
          </Stack>
        </Stack>
      </View>
    </header>
  );
}
