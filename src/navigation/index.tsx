import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { LocationAccessScreen, WeatherDetailsScreen } from "../screens";
import type { RootStackParamList } from "../typings";
import { Route } from "../typings";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={Route.LOCATION_ACCESS} component={LocationAccessScreen} />
        <Screen name={Route.WEATHER_DETAILS} component={WeatherDetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
