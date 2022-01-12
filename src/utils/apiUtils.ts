import { WeatherAPI } from "../interfaces/weatherAPI";
import { WeatherCardProps } from "../components/WeatherCard.props";

export const getWeatherInfo = async (
  city: string
): Promise<WeatherCardProps> => {
  try {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=54564adc4a3e0ada20cd7cb1a5888d81`;
    let res = await fetch(url);

    let weatherInfo = (await res.json()) as WeatherAPI;

    const { temp, humidity, pressure } = weatherInfo.main;
    const { main: weatherType } = weatherInfo.weather[0];
    const { name } = weatherInfo;
    const { speed } = weatherInfo.wind;
    const { country } = weatherInfo.sys;

    const myNewWeatherInfo: WeatherCardProps = {
      temp,
      humidity,
      pressure,
      weatherType,
      name,
      speed,
      country,
    };
    console.log("myNewWeatherInfo = ", myNewWeatherInfo);

    return myNewWeatherInfo;
  } catch (error) {
    console.log(error);
    return {} as WeatherCardProps;
  }
};
