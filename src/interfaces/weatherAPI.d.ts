export type WeatherAPI = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type Clouds = {
  all: number;
};

export type Coord = {
  lon: number;
  lat: number;
};

export type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type Sys = {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Wind = {
  speed: number;
  deg: number;
};

// export interface TimeApi {
//   year: number;
//   month: number;
//   day: number;
//   hour: number;
//   minute: number;
//   seconds: number;
//   milliSeconds: number;
//   dateTime: Date;
//   date: string;
//   time: string;
//   timeZone: string;
//   dayOfWeek: string;
//   dstActive: boolean;
// }

export interface TimeZoneAPI {
  status: string;
  message: string;
  countryCode: string;
  countryName: string;
  regionName: string;
  cityName: string;
  zoneName: string;
  abbreviation: string;
  gmtOffset: number;
  dst: string;
  zoneStart: number;
  zoneEnd: number;
  nextAbbreviation: string;
  timestamp: number;
  formatted: string;
}
