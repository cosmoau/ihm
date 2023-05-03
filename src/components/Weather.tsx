// a damn simple component that displays the weather based on a city name
// uses openweathermap.org API

import { Badge, Dialog, Stack, Text } from "@cosmoau/ui";
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
} from "phosphor-react";
import useSWR from "swr";

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

export function Weather({ city }: { city: string }): JSX.Element {
  const query = `${city}, Victoria AU`;
  const { data, error } = useSWR(`/openweathermap/${query}`, fetcher);

  const weather = data && data.weather && data.weather[0];

  if (!weather || error) return <> </>;

  return (
    <Stack top="small">
      <Dialog
        trigger={
          <Badge icon={weather.icon ? selectEmoji(weather.icon) : undefined}>
            {data.main.temp.toFixed(0) + "°C"}
          </Badge>
        }>
        <Text as="h4" css={{ textTransform: "capitalize" }}>
          {weather.description} in {city}
        </Text>
        <Stack flexduo top="medium">
          <Text accent>High</Text>
          <Badge>{data.main.temp_max.toFixed(0) + "°C"}</Badge>
        </Stack>
        <Stack flexduo top="small">
          <Text accent>Low</Text>
          <Badge>{data.main.temp_min.toFixed(0) + "°C"}</Badge>
        </Stack>
        <Stack flexduo top="small">
          <Text accent>Feels like</Text>
          <Badge>{data.main.feels_like.toFixed(0) + "°C"}</Badge>
        </Stack>
        <Stack flexduo top="small">
          <Text accent>Sunrise</Text>
          <Badge>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Badge>
        </Stack>
        <Stack flexduo top="small">
          <Text accent>Sunset</Text>
          <Badge>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Badge>
        </Stack>
        <Stack flexduo top="small">
          <Text accent>Humidity</Text>
          <Badge>{data.main.humidity}%</Badge>
        </Stack>
        <Stack flexduo top="small">
          <Text accent>Wind</Text>
          <Badge>{data.wind.speed}km/h</Badge>
        </Stack>
        <Stack flexduo top="small">
          <Text accent>Clouds</Text>
          <Badge>{data.clouds.all}%</Badge>
        </Stack>
      </Dialog>
    </Stack>
  );
}
