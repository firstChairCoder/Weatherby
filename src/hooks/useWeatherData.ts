import { useEffect, useState } from "react";

import type { MainData, WeatherData } from "../typings";
import { API_KEY, openWeatherMapApi } from "../services/api";

export type GetWeatherDataResponse = {
  main: MainData;
  weather: WeatherData[];
};

interface WeatherDataProps {
  latitude: number;
  longitude: number;
}

export type WeatherDataResponse = [GetWeatherDataResponse | undefined, boolean];
export default function useWeatherData(
  coords?: WeatherDataProps
): WeatherDataResponse {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<GetWeatherDataResponse>();

  useEffect(() => {
    async function fetchWeather() {
      if (!coords) {
        return;
      }

      setIsLoading(true);

      const { latitude, longitude } = coords;

      try {
        const params = {
          appid: API_KEY,
          lon: longitude,
          lat: latitude,
          units: "metric"
          // lang: "pt_br"
        };

        const response = await openWeatherMapApi.get<GetWeatherDataResponse>(
          "weather",
          { params }
        );

        setData(response.data);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather();
  }, [coords]);

  return [data, isLoading];
}
