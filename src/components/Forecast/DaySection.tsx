import { format, isToday } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { IFlexProps } from "native-base";
import { FlatList, Flex, Heading, useTheme } from "native-base";
import React, { useMemo } from "react";

import type { ForecastData } from "../../typings";
import { capitalize } from "../../utils";

import ForecastHourCard from "./HourCard";

interface DaySectionProps extends IFlexProps {
  day: Date;
  data: ForecastData[];
}
const ForecastDaySection = ({ day, data, ...rest }: DaySectionProps) => {
  const theme = useTheme();

  const formattedDay = useMemo(() => {
    if (isToday(day)) {
      return format(day, "'Today,' dd MMMM", { locale: ptBR });
    }

    return capitalize(format(day, "E'.' dd MMMM"));
  }, [day]);

  return (
    <Flex {...rest}>
      <Heading fontSize="md" fontWeight="normal" ml="4" mt="4" mb="2">
        {formattedDay}
      </Heading>

      <FlatList
        horizontal
        data={data}
        contentContainerStyle={{ paddingHorizontal: theme.sizes[4] }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.dt_txt}
        renderItem={({ item, index }) => (
          <ForecastHourCard ml={index ? "4" : "0"} data={item} />
        )}
      />
    </Flex>
  );
};

export default ForecastDaySection;
