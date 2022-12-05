import { parseISO } from "date-fns";
import { Box, Skeleton } from "native-base";
import React, { Fragment } from "react";
import { ScrollView } from "react-native";

import type { ForecastMap } from "../../hooks/useForecastData";

import ForecastDaySection from "./DaySection";

interface ForecastListsProps {
  data?: ForecastMap;
  isLoading: boolean;
}

const ForecastLists = ({ data, isLoading }: ForecastListsProps) => {
  if (isLoading) {
    return (
      <Box mx="4">
        {[1, 2].map((item) => (
          <Fragment key={item}>
            <Skeleton h="24px" w="100px" mt="4" borderRadius="sm" />

            <ScrollView horizontal>
              <Skeleton h="126px" w="96px" borderRadius="md" />
              <Skeleton h="126px" w="96px" borderRadius="md" ml="4" />
              <Skeleton h="126px" w="96px" borderRadius="md" ml="4" />
            </ScrollView>
          </Fragment>
        ))}
      </Box>
    );
  }

  if (data === undefined) {
    return null;
  }

  return (
    <>
      {Object.keys(data)
        .splice(0, 3)
        .map((day) => (
          <ForecastDaySection
            testID={`forecast-day-section-${day}`}
            key={day}
            day={parseISO(day)}
            data={data[day]}
          />
        ))}
    </>
  );
};

export default ForecastLists;
