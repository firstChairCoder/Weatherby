import axios from "axios";

export const API_KEY = "4be54dd01f1e896a42b495e2d80c4851";

export const openWeatherMapApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5"
});
