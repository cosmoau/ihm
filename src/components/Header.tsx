import { View, Image, Stack, Button, Select, Avatar } from "@cosmoau/ui";
import type { ISelect } from "@cosmoau/ui/dist/cjs/types";
import { CaretDown, GridFour } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTernaryDarkMode } from "usehooks-ts";

import locations from "../../locations.json";
import logoLight from "../../public/images/logo-new-light.png";
import logoDark from "../../public/images/logo-new.png";

export default function Header(): JSX.Element {
  const router = useRouter();
  const [inverted, setInverted] = useState(true);
  const { isDarkMode } = useTernaryDarkMode();

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
      label: "Blog",
      value: "https://cosmogroup.io/blog",
    },
    {
      label: "Bookings",
      value: "https://cosmo.homes",
    },
    {
      label: "Sign Up",
      value: "/start",
    },
  ] as ISelect["options"];

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
    }))
  ) as ISelect["options"];

  const handleSelection = (value: string): void => {
    if (value.includes("http")) {
      window.open(value, "_blank");
    } else {
      router.push(value);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setInverted(window.scrollY < 500);
      });
    }
  }, []);

  return (
    <header
      id="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
      <View bottom="small" inverted={inverted} top="small">
        <Stack direction="row" flex="center">
          <Stack direction="column" width={25} widthPhone={50} widthTablet={40}>
            <Link href="/">
              <Stack
                css={{
                  display: "inline-flex",
                  verticalAlign: "middle",
                }}>
                <Image
                  alt="
              ihostme logo, which is a pink icon of a house with black sans-serif text next to it.
              "
                  height={36.5}
                  src={!inverted && !isDarkMode ? logoDark.src : logoLight.src}
                  width={120}
                />
              </Stack>
            </Link>
          </Stack>
          <Stack
            align="right"
            css={{
              visible: "tablet",
            }}
            direction="column"
            widthPhone={50}
            widthTablet={60}>
            <a href="https://v1.cosmogroup.io" rel="noreferrer" target="_blank">
              <Button inline="small">Clients</Button>
            </a>
            <Select
              horizontal="right"
              last
              options={optionsPhone}
              selection={[
                optionsPhone.find((option) => option.value === router.pathname)?.value || "/",
              ]}
              trigger={<Button theme="solid">Menu</Button>}
              width="16rem"
              onSelection={(value): void => handleSelection(value)}
            />
          </Stack>
          <Stack
            align="center"
            css={{
              hidden: "tablet",
            }}
            direction="column"
            width={50}>
            <Link href="/">
              <Button theme={router.pathname === "/" ? "fill" : "minimal"}>Home</Button>
            </Link>
            <Link href="/pricing">
              <Button theme={router.pathname === "/pricing" ? "fill" : "minimal"}>Pricing</Button>
            </Link>
            <Link href="/testimonials">
              <Button theme={router.pathname === "/testimonials" ? "fill" : "minimal"}>
                Testimonials
              </Button>
            </Link>
            <Select
              options={optionsLocations}
              selection={[router.asPath]}
              trigger={
                <Button
                  icon={<CaretDown weight="light" />}
                  iconPosition="right"
                  theme={
                    router.pathname === "/locations" || router.pathname.includes("/city/")
                      ? "fill"
                      : "minimal"
                  }>
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

          <Stack
            align="right"
            css={{
              hidden: "tablet",
            }}
            direction="column"
            width={25}>
            <a href="https://v1.cosmogroup.io" rel="noreferrer" target="_blank">
              <Button inline="small">Client App</Button>
            </a>
            <Link href="/start">
              <Button inline="auto" theme="solid">
                Sign Up
              </Button>
            </Link>
          </Stack>
        </Stack>
      </View>
    </header>
  );
}
