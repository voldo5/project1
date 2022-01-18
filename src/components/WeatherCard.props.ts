import { DetailedHTMLProps, HTMLAttributes } from "react";
import { WeatherAPI, Main, Wind, Sys, Weather } from "../interfaces/weatherAPI";

export interface WeatherCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  temp: Main["temp"];
  humidity: Main["humidity"];
  pressure: Main["pressure"];
  weatherType: Weather["main"];
  name: WeatherAPI["name"];
  speed: Wind["speed"];
  country: Sys["country"];
  dt: WeatherAPI["dt"];
}
