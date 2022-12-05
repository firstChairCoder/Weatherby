import { Feather } from "@expo/vector-icons";
import { format, parseISO } from "date-fns";
import { Card, Icon, Text } from "native-base";
import React from "react";

import type { ForecastData } from "../../typings";
import { WeatherIcons } from "../../typings";
import { formatTemp, WEATHER_ICONS_MAP } from "../../utils";
import type { CardProps } from "../BasicLoader";

interface HourCardProps extends CardProps {
  data: ForecastData;
}
const ForecastHourCard = ({ data, ...rest }: HourCardProps) => {
  const hour = format(parseISO(data.dt_txt), "HH:mm");
  const temperature = formatTemp(data.main.temp);
  const iconName =
    WEATHER_ICONS_MAP[data.weather[0]?.icon || WeatherIcons.MIST_DAY];

  return (
    <Card w="96px" direction="column" align="center" p="4" {...rest}>
      <Text fontSize="sm" color="trueGray.300">
        {hour}
      </Text>
      <Icon as={Feather} name={iconName} my="4" color="primary.500" />
      <Text fontWeight="bold" fontSize="md">
        {temperature}
      </Text>
    </Card>
  );
};

export default ForecastHourCard;
