export enum Route {
  LOCATION_ACCESS = "LocationAccess",
  WEATHER_DETAILS = "WeatherDetails"
}

export enum WeatherIcons {
  CLEAR_SKY_DAY = "01d",
  FEW_CLOUDS_DAY = "02d",
  SCATTERED_CLOUDS_DAY = "03d",
  BROKEN_CLOUDS_DAY = "04d",
  SHOWER_RAIN_DAY = "09d",
  RAIN_DAY = "10d",
  THUNDERSTORM_DAY = "11d",
  SNOW_DAY = "13d",
  MIST_DAY = "50d",

  CLEAR_SKY_NIGHT = "01n",
  FEW_CLOUDS_NIGHT = "02n",
  SCATTERED_CLOUDS_NIGHT = "03n",
  BROKEN_CLOUDS_NIGHT = "04n",
  SHOWER_RAIN_NIGHT = "09n",
  RAIN_NIGHT = "10n",
  THUNDERSTORM_NIGHT = "11n",
  SNOW_NIGHT = "13n",
  MIST_NIGHT = "50n"
}

export type RootStackParamList = {
  [Route.LOCATION_ACCESS]: undefined;
  [Route.WEATHER_DETAILS]: undefined;
};

export type MainData = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type WeatherData = {
  id: number;
  description: string;
  icon: WeatherIcons;
};
