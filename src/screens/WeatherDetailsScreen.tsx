/* eslint-disable react-hooks/exhaustive-deps */
import type { LocationObjectCoords } from "expo-location";
import { reverseGeocodeAsync, getCurrentPositionAsync } from "expo-location";
import { useToast } from "native-base";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { InfoCard } from "../components/Cards";
import Container from "../components/Container";
import useWeatherData from "../hooks/useWeatherData";
import { capitalize, formatTemp } from "../utils";

// interface WeatherDetailsScreenProps {}

const WeatherDetailsScreen = () => {
  const toast = useToast();
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [coords, setCoords] = useState<LocationObjectCoords>();
  const [locationLines, setLocationLines] = useState<string[]>([]);

  const [currentWeather, isCurrentWeatherLoading] = useWeatherData(coords);
  const currentWeatherLines = useMemo(() => {
    const lines: string[] = [];

    if (!currentWeather) {
      return ["Sorry! Couldn't find your weather details...😰"];
    }

    const { temp, humidity } = currentWeather.main;
    // eslint-disable-next-line prefer-destructuring
    const { description } = currentWeather.weather[0];

    lines.push(`${formatTemp(temp)}, ${humidity}%`);
    lines.push(capitalize(description));

    return lines;
  }, [currentWeather]);

  const loadLocation = useCallback(async (successFn?: () => void) => {
    toast.closeAll();
    setIsLocationLoading(true);
    try {
      const currentPosition = await getCurrentPositionAsync();
      const { latitude, longitude } = currentPosition.coords;

      setCoords(currentPosition.coords);

      const [{ street, streetNumber, city, region, subregion }] =
        await reverseGeocodeAsync({ latitude, longitude });

      const locationLine1: string[] = [];
      const locationLine2: string[] = [];

      if (street) {
        locationLine1.push(street);
      }
      if (streetNumber) {
        locationLine1.push(`No. ${streetNumber}`);
      }
      if (city || subregion) {
        locationLine2.push(String(city || subregion));
      }
      if (region) {
        locationLine2.push(region);
      }
      setLocationLines([locationLine1.join(", "), locationLine2.join(" - ")]);
      if (successFn) {
        successFn();
      }
    } catch {
      setLocationLines(["Cannot find location"]);

      if (!toast.isActive("error-toast")) {
        toast.show({
          id: "error-toast",
          title: "An error occurred",
          description: "Permission access request has been denied.",
          placement: "top",
          variant: "subtle"
        });
      }
    } finally {
      setIsLocationLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLocation();
  }, []);

  return (
    <Container>
      <InfoCard
        label={"Your Location"}
        iconName={"map-marker"}
        lines={locationLines}
        isLoading={isLocationLoading}
      />

      <InfoCard
        my="8"
        iconName={"map-marker"}
        label={"Weather"}
        lines={currentWeatherLines}
        isLoading={isLocationLoading || isCurrentWeatherLoading}
      />
    </Container>
  );
};

export default WeatherDetailsScreen;
