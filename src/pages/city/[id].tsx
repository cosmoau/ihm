// generate static pages for each city from ../../../locations.json

import { View, Stack, Text, Box, Button, Badge } from "@cosmoau/ui";
import {
  ArrowDown,
  ArrowUp,
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
import { useState } from "react";
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
      return <Sun />;

    case "01n": // clear sky (night
      return <MoonStars />;

    case "02d": // few clouds
      return <CloudSun />;

    case "02n": // few clouds (night)
      return <CloudMoon />;

    case "03d": // scattered clouds
      return <Cloud />;

    case "03n": // scattered clouds (night)
      return <Cloud />;

    case "04d": // broken clouds
      return <Cloud />;

    case "04n": // broken clouds (night)
      return <Cloud />;

    case "09d": // shower rain
      return <CloudRain />;

    case "09n": // shower rain (night)
      return <CloudRain />;

    case "10d": // rain
      return <Umbrella />;

    case "10n": // rain (night)
      return <CloudRain />;
    case "11d": // thunderstorm
      return <CloudLightning />;
    case "11n": // thunderstorm (night)
      return <CloudLightning />;
    case "13d": // snow
      return <CloudSnow />;
    case "13n": // snow (night)
      return <Snowflake />;
    case "50d": // mist
      <CloudFog />;
    case "50n": // mist (night)
      return <CloudFog />;
    default:
      return <ThermometerSimple />;
  }
};

const unavailable = "No data";

export default function City({ location }: { location: ILocation }): JSX.Element {
  const query = `${location.name}, Victoria AU`;
  const [expand, setExpand] = useState(false);
  const { data } = useSWR(`/openweathermap/${query}`, fetcher);

  const weather = {
    description: (data?.weather && data?.weather[0]?.description) || unavailable,
    temp: data?.main?.temp ? data?.main?.temp.toFixed(0) + "°C" : unavailable,
    min: data?.main?.temp_min ? data?.main?.temp_min.toFixed(0) + "°C" : unavailable,
    max: data?.main?.temp_max ? data?.main?.temp_max.toFixed(0) + "°C" : unavailable,
    feels_like: data?.main?.feels_like ? data?.main?.feels_like.toFixed(0) + "°C" : unavailable,
    humidity: data?.main?.humidity ? data?.main?.humidity.toFixed(0) + "%" : unavailable,
    wind: data?.wind?.speed ? data?.wind?.speed.toFixed(0) + "km/h" : unavailable,
    sunrise: data?.sys?.sunrise
      ? new Date(data?.sys?.sunrise * 1000).toLocaleTimeString()
      : unavailable,
    sunset: data?.sys?.sunset
      ? new Date(data?.sys?.sunset * 1000).toLocaleTimeString()
      : unavailable,
    clouds: data?.clouds?.all ? data?.clouds?.all.toFixed(0) + "%" : unavailable,
    icon:
      data?.weather && data?.weather[0]?.icon ? (
        selectEmoji(data?.weather[0]?.icon)
      ) : (
        <ThermometerSimple />
      ),
  };

  return (
    <>
      <Subheader
        image={`/images/location-${location.id}.jpg`}
        title={`${location.name} Airbnb Management`}>
        <Text as="h2">Airbnb Management in {location.name}</Text>
        <Text >
          {location.name} is a popular destination for Airbnb guests in Victoria, offering a range
          of activities and attractions for visitors. We offer Airbnb management services in{" "}
          {location.name} and surrounding areas.
        </Text>
        <Stack
          css={{
            textTransform: "capitalize",
          }}
          top="medium">
          <Stack flexduo>
            <Text accent>Weather</Text>
            <Badge icon={weather.icon} theme="alternate">
              {weather.description}
            </Badge>
          </Stack>
          <Stack flexduo top="small">
            <Text accent>Temperature</Text>
            <Badge theme="alternate">{weather.temp}</Badge>
          </Stack>
          <Stack flexduo top="small">
            <Text accent>Range</Text>
            <Badge theme="alternate">
              {weather.min} - {weather.max}
            </Badge>
          </Stack>
          <Stack flexduo top="small">
            <Text accent>Feels Like</Text>
            <Badge theme="alternate">{weather.feels_like}</Badge>
          </Stack>
          {expand && (
            <>
              <Stack flexduo top="small">
                <Text accent>Humidity</Text>
                <Badge theme="alternate">{weather.humidity}</Badge>
              </Stack>
              <Stack flexduo top="small">
                <Text accent>Wind</Text>
                <Badge theme="alternate">{weather.wind}</Badge>
              </Stack>
              <Stack flexduo top="small">
                <Text accent>Sunrise</Text>
                <Badge theme="alternate">{weather.sunrise}</Badge>
              </Stack>
              <Stack flexduo top="small">
                <Text accent>Sunset</Text>
                <Badge theme="alternate">{weather.sunset}</Badge>
              </Stack>
              <Stack flexduo top="small">
                <Text accent>Clouds</Text>
                <Badge theme="alternate">{weather.clouds}</Badge>
              </Stack>
            </>
          )}
          <Stack top="medium">
            <Button
              icon={expand ? <ArrowUp /> : <ArrowDown />}
              small
              onClick={(): void => setExpand(!expand)}>
              {expand ? "Less" : "More"}
            </Button>
          </Stack>
        </Stack>
      </Subheader>
      <View bottom="largest" container top="largest">
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
                <a
                  href={"https://cosmo-au.typeform.com/to/cAmtR2rI#url=ihostme.com.au"}
                  rel="noreferrer"
                  target="_blank">
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
