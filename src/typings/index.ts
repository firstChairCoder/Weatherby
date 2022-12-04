export enum Route {
  LOCATION_ACCESS = "LocationAccess",
  WEATHER_DETAILS = "WeatherDetails"
}

export type RootStackParamList = {
  [Route.LOCATION_ACCESS]: undefined;
  [Route.WEATHER_DETAILS]: undefined;
};
