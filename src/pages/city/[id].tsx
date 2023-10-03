// generate static pages for each city from ../../../locations.json

import { View, Stack, Text, Box, Button, Badge, Icon } from "@cosmoau/ui";
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudSnow,
  CloudSun,
  MoonStars,
  Snowflake,
  Sun,
  ThermometerSimple,
  Umbrella,
} from "@phosphor-icons/react";
import { Widget } from "@typeform/embed-react";
import useSWR from "swr";

import locations from "../../../locations.json";
import { Subheader } from "../../components/Subheader";

interface ILocation {
  id: string;
  name: string;
}

export const getStaticPaths = async (): Promise<{
  fallback: boolean;
  paths: { params: { id: string } }[];
}> => {
  const paths = locations.map((location: ILocation) => ({
    params: { id: location.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}): Promise<{
  props: { location: ILocation | undefined };
}> => {
  const location = locations.find((location: ILocation) => location.id === params.id);

  return { props: { location } };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetcher = (url: string): any => fetch(url).then((res) => res.json());

const selectEmoji = (icon: string): JSX.Element => {
  switch (icon) {
    case "01d": // clear sky
      return <Sun weight="fill" />;

    case "01n": // clear sky (night
      return <MoonStars weight="fill" />;

    case "02d": // few clouds
      return <CloudSun weight="fill" />;

    case "02n": // few clouds (night)
      return <CloudMoon weight="fill" />;

    case "03d": // scattered clouds
      return <Cloud weight="fill" />;

    case "03n": // scattered clouds (night)
      return <Cloud weight="fill" />;

    case "04d": // broken clouds
      return <Cloud weight="fill" />;

    case "04n": // broken clouds (night)
      return <Cloud weight="fill" />;

    case "09d": // shower rain
      return <CloudRain weight="fill" />;

    case "09n": // shower rain (night)
      return <CloudRain weight="fill" />;

    case "10d": // rain
      return <Umbrella weight="fill" />;

    case "10n": // rain (night)
      return <CloudRain weight="fill" />;
    case "11d": // thunderstorm
      return <CloudLightning weight="fill" />;
    case "11n": // thunderstorm (night)
      return <CloudLightning weight="fill" />;
    case "13d": // snow
      return <CloudSnow weight="fill" />;
    case "13n": // snow (night)
      return <Snowflake weight="fill" />;
    case "50d": // mist
      <CloudFog weight="fill" />;
    case "50n": // mist (night)
      return <CloudFog weight="fill" />;
    default:
      return <ThermometerSimple weight="fill" />;
  }
};

const unavailable = "No data";

export default function City({ location }: { location: ILocation }): JSX.Element {
  const query = `${location.name}, Victoria AU`;
  const { data } = useSWR(`/openweathermap/${query}`, fetcher);

  const weather = {
    description: (data?.weather && data?.weather[0]?.description) || unavailable,
    temp: data?.main?.temp ? data?.main?.temp.toFixed(0) + "°C" : unavailable,
    min: data?.main?.temp_min ? data?.main?.temp_min.toFixed(0) + "°C" : unavailable,
    max: data?.main?.temp_max ? data?.main?.temp_max.toFixed(0) + "°C" : unavailable,
    feels_like: data?.main?.feels_like ? data?.main?.feels_like.toFixed(0) + "°C" : unavailable,
    humidity: data?.main?.humidity ? data?.main?.humidity.toFixed(0) + "%" : unavailable,
    wind: data?.wind?.speed ? data?.wind?.speed.toFixed(0) + "km/h" : unavailable,
    sunrise: data?.sys?.sunrise ? new Date(data?.sys?.sunrise * 1000).toLocaleTimeString() : unavailable,
    sunset: data?.sys?.sunset ? new Date(data?.sys?.sunset * 1000).toLocaleTimeString() : unavailable,
    clouds: data?.clouds?.all ? data?.clouds?.all.toFixed(0) + "%" : unavailable,
    icon: data?.weather && data?.weather[0]?.icon ? selectEmoji(data?.weather[0]?.icon) : <ThermometerSimple />,
  };

  return (
    <>
      <Subheader image={`/images/location-${location.id}.jpg`} title={`${location.name} Airbnb Management`}>
        <Text as="h2">Airbnb Management in {location.name}</Text>
        <Text accent>
          {location.name} is a popular destination for Airbnb guests in Victoria, offering a range of activities and
          attractions for visitors.
        </Text>
      </Subheader>
      <View bottom="largest" container top="largest">
        <Stack direction="row">
          <Stack
            css={{
              hidden: "phone",
            }}
            direction="column"
            width={40}>
            <Box>
              <Icon forceSize={33} inline="small">
                {weather.icon}
              </Icon>
              <Text
                as="h4"
                css={{
                  textTransform: "capitalize",
                }}
                inline="auto">
                {weather?.description || "Weather"} in {location.name}
              </Text>

              <Stack flexduo top="small">
                <Text accent>Temperature</Text>
                <Badge small>{weather.temp}</Badge>
              </Stack>
              <Stack flexduo top="small">
                <Text accent>Range</Text>
                <Badge small>
                  {weather.min} - {weather.max}
                </Badge>
              </Stack>
              <Stack flexduo top="small">
                <Text accent>Feels Like</Text>
                <Badge small>{weather.feels_like}</Badge>
              </Stack>

              <Stack flexduo top="small">
                <Text accent>Humidity</Text>
                <Badge small>{weather.humidity}</Badge>
              </Stack>
              <Stack flexduo top="small">
                <Text accent>Wind</Text>
                <Badge small>{weather.wind}</Badge>
              </Stack>
              <Stack flexduo top="small">
                <Text accent>Sunrise</Text>
                <Badge small>{weather.sunrise}</Badge>
              </Stack>
              <Stack flexduo top="small">
                <Text accent>Sunset</Text>
                <Badge>{weather.sunset}</Badge>
              </Stack>
              <Stack flexduo top="small">
                <Text accent>Clouds</Text>
                <Badge small>{weather.clouds}</Badge>
              </Stack>
              <Stack
                align="left"
                css={{
                  // position at bottom of container
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  position: "absolute",
                  bottom: "$medium",
                }}>
                <Text accent as="small" top="medium">
                  This form can also be found at:
                </Text>

                <Stack top="smallest">
                  <Button external small>
                    <a
                      href={"https://cosmo-au.typeform.com/to/cAmtR2rI#url=ihostme.com.au"}
                      rel="noreferrer"
                      target="_blank">
                      cosmo-au.typeform.com/to/cAmtR2rI
                    </a>
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
          <Stack direction="column" width={60}>
            <Box
              css={{
                borderRadius: "large",
                darkModeSpec: {
                  backgroundColor: "$text",
                },
              }}
              theme="fill">
              <Widget
                height={600}
                hidden={{
                  url: "ihostme.com.au",
                }}
                id="cAmtR2rI"
                opacity={0}
                style={{
                  overflowY: "visible",
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
