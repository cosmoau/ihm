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
      value: "https://cosmo.homes",
    },
  ];

  const optionsResources = [
    {
      label: "Blog",
      value: "https://cosmogroup.io/blog",
    },
    {
      label: "Legal",
      value: "https://cosmogroup.io/legal",
    },
    {
      label: "Calculator",
      value: "https://cosmogroup.io/airbnb-calculator",
    },
    {
      label: "Contact",
      value: "https://cosmogroup.io/contact",
    },
    {
      label: "🏡 Book a stay",
      value: "https://cosmo.homes",
    },
  ];

  const handleSelection = (value: string): void => {
    if (value.includes("http")) {
      window.open(value, "_blank");
    } else {
      router.push(value);
    }
  };

  const activeSelection =
    optionsPhone.find((option) => option.value === router.pathname)?.value || "/";

  return (
    <header>
      <View bottom="small" inverted top="small">
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
                  blurDataURL="/images/logo-new-light.png"
                  height={36.5}
                  placeholder="blur"
                  src="/images/logo-new-light.png"
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
              <Button inline="small">Owners</Button>
            </a>
            <Select
              horizontal="right"
              last
              locked={false}
              options={optionsPhone}
              selection={[activeSelection]}
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
            <Link href="/testimonials">
              <Button theme={router.pathname === "/testimonials" ? "fill" : "minimal"}>
                Testimonials
              </Button>
            </Link>
            <Link href="/team">
              <Button theme={router.pathname === "/team" ? "fill" : "minimal"}>Team</Button>
            </Link>

            <Link href="/locations">
              <Button theme={router.pathname === "/locations" ? "fill" : "minimal"}>
                Locations
              </Button>
            </Link>

            <Select
              last
              locked={false}
              options={optionsResources}
              selection={[activeSelection]}
              trigger={
                <Button icon={<CaretDown weight="light" />} iconPosition="right" theme="minimal">
                  More
                </Button>
              }
              width="15rem"
              onSelection={(value): void => handleSelection(value)}
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
