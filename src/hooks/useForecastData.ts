import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";

import { API_KEY, openWeatherMapApi } from "../services/api";
import type { ForecastData } from "../typings";

import type { WeatherDataProps } from "./useWeatherData";

type DayString = string; // YYYY-MM-DD

export type ForecastMap = Record<DayString, ForecastData[]>;
export type ForecastDataResponse = [ForecastMap | undefined, boolean];
export type GetForecastDataResponse = {
  list: ForecastData[];
};

export default function useForecastData(
  coords?: WeatherDataProps
): ForecastDataResponse {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ForecastMap>();

  useEffect(() => {
    async function fetchForecast() {
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
        };

        const response = await openWeatherMapApi.get<GetForecastDataResponse>(
          "forecast",
          { params }
        );

        const forecastMap: ForecastMap = {};

        response.data.list.forEach((forecast) => {
          const forecastDate = format(parseISO(forecast.dt_txt), "yyyy-MM-dd");

          forecastMap[forecastDate] = [
            ...(forecastMap[forecastDate] || []),
            forecast
          ];
        });

        setData(forecastMap);
      } finally {
        setIsLoading(false);
      }
    }

    fetchForecast();
  }, [coords]);

  return [data, isLoading];
}
