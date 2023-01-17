import { View, Image, Stack, Button, Select } from "@cosmoau/ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretDown } from "phosphor-react";

export default function Header(): JSX.Element {
  const router = useRouter();

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
      label: "Team",
      value: "/team",
    },
    {
      label: "Locations",
      value: "/locations",
    },
    {
      label: "Sign Up",
      value: "/start",
    },
    {
      label: "🏡 Book a stay",
      value: "https://airbnb.com/p/cosmo",
    },
  ];

  const optionsResources = [
    {
      label: "Latest News",
      value: "https://cosmogroup.io/blog",
    },
    {
      label: "Legal Info",
      value: "https://cosmogroup.io/legal",
    },
    {
      label: "Airbnb Calculator",
      value: "https://cosmogroup.io/airbnb-calculator",
    },
    {
      label: "Contact Us",
      value: "https://cosmogroup.io/contact",
    },
    {
      label: "🏡 Book a stay",
      value: "https://airbnb.com/p/cosmo",
    },
  ];

  // now a function that handles the selection, and either router.pushes or window.open
  const handleSelection = (value: string, label: string): void => {
    if (value.includes("http")) {
      // eslint-disable-next-line no-console
      console.log("opening to external", label || value);
      window.open(value, "_blank");
    } else {
      // eslint-disable-next-line no-console
      console.log("opening to internal route", label || value);
      router.push(value);
    }
  };

  const activeSelection =
    optionsPhone.find((option) => option.value === router.pathname)?.value || "/";

  return (
    <header>
      <View
        bottom="small"
        css={{
          borderBottom: "0.1rem solid $border",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
        top="small">
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
                  blurDataURL="/images/logo-new.png"
                  height={36.5}
                  placeholder="blur"
                  src="/images/logo-new.png"
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
              <Button inline="medium">Owners</Button>
            </a>
            <Select
              horizontal="right"
              last
              locked={false}
              options={optionsPhone}
              selection={activeSelection}
              trigger={
                <Button
                  css={{
                    "&:hover": {
                      background: "rgb(95, 113, 128) !important",
                      color: "$background",
                    },
                    background: "$accentIHM !important",
                  }}
                  theme="solid">
                  Menu
                </Button>
              }
              width="16rem"
              onSelection={(value, label): void => handleSelection(value, label)}
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
              <Button theme="minimal">Home</Button>
            </Link>
            <Link href="/testimonials">
              <Button
                css={{
                  color: router.pathname === "/testimonials" ? "$accent !important" : "inherit",
                }}
                theme={router.pathname === "/testimonials" ? "fill" : "minimal"}>
                Testimonials
              </Button>
            </Link>
            <Link href="/team">
              <Button
                css={{
                  color: router.pathname === "/team" ? "$accent !important" : "inherit",
                }}
                theme={router.pathname === "/team" ? "fill" : "minimal"}>
                Team
              </Button>
            </Link>

            <Link href="/locations">
              <Button
                css={{
                  color: router.pathname === "/locations" ? "$accent !important" : "inherit",
                }}
                theme={router.pathname === "/locations" ? "fill" : "minimal"}>
                Locations
              </Button>
            </Link>

            <Select
              last
              locked={false}
              options={optionsResources}
              selection={activeSelection}
              trigger={
                <Button icon={<CaretDown weight="light" />} iconPosition="right" theme="minimal">
                  More
                </Button>
              }
              width="17rem"
              onSelection={(value, label): void => handleSelection(value, label)}
            />
          </Stack>

          <Stack
            align="right"
            css={{
              hidden: "tablet",
            }}
            direction="column"
            width={25}>
            <a href="https://v1.cosmogroup.io" rel="noreferrer" target="_blank">
              <Button inline="small">Owner App</Button>
            </a>
            <Link href="/start">
              <Button
                css={{
                  "&:hover": {
                    background: "rgb(95, 113, 128) !important",
                    color: "$background",
                  },
                  background: "$accentIHM !important",
                }}
                inline="auto"
                theme="solid">
                Sign Up
              </Button>
            </Link>
          </Stack>
        </Stack>
      </View>
    </header>
  );
}
