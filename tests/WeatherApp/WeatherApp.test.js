import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WeatherApp from "../../src/components/WeatherApp";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

jest.mock("app/context/cityContext.js", () => ({
  useCityState: () => ({
    city: {
      id: 3038789,
      nm: "Abbeville",
      lat: 50.099998,
      lon: 1.83333,
    },
    cityCurrData: {
      coord: {
        lon: 1.8333,
        lat: 50.1,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      base: "stations",
      main: {
        temp: 25.27,
        feels_like: 25.11,
        temp_min: 23.98,
        temp_max: 25.27,
        pressure: 1022,
        humidity: 48,
        sea_level: 1022,
        grnd_level: 1021,
      },
      visibility: 10000,
      wind: {
        speed: 6,
        deg: 97,
        gust: 8.47,
      },
      clouds: {
        all: 86,
      },
      dt: 1693823528,
      sys: {
        type: 2,
        id: 2011713,
        country: "FR",
        sunrise: 1693804291,
        sunset: 1693852356,
      },
      timezone: 7200,
      id: 3038789,
      name: "Abbeville",
      cod: 200,
    },
    cityForecastData: {
      cod: "200",
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1693828800,
          main: {
            temp: 25.27,
            feels_like: 25,
            temp_min: 25.27,
            temp_max: 25.83,
            pressure: 1021,
            sea_level: 1021,
            grnd_level: 1021,
            humidity: 44,
            temp_kf: -0.56,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 88,
          },
          wind: {
            speed: 5.78,
            deg: 97,
            gust: 7.77,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-04 12:00:00",
        },
        {
          dt: 1693839600,
          main: {
            temp: 25.7,
            feels_like: 25.47,
            temp_min: 25.7,
            temp_max: 26.56,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 1018,
            humidity: 44,
            temp_kf: -0.86,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 92,
          },
          wind: {
            speed: 5.17,
            deg: 90,
            gust: 7.93,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-04 15:00:00",
        },
        {
          dt: 1693850400,
          main: {
            temp: 22.7,
            feels_like: 22.54,
            temp_min: 21.42,
            temp_max: 22.7,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 1018,
            humidity: 58,
            temp_kf: 1.28,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 96,
          },
          wind: {
            speed: 3.78,
            deg: 78,
            gust: 9.51,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-04 18:00:00",
        },
        {
          dt: 1693861200,
          main: {
            temp: 19.22,
            feels_like: 19.05,
            temp_min: 19.22,
            temp_max: 19.22,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1018,
            humidity: 71,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 3.86,
            deg: 78,
            gust: 10.18,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-04 21:00:00",
        },
        {
          dt: 1693872000,
          main: {
            temp: 18.59,
            feels_like: 18.46,
            temp_min: 18.59,
            temp_max: 18.59,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1016,
            humidity: 75,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 3.87,
            deg: 90,
            gust: 9.95,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-05 00:00:00",
        },
        {
          dt: 1693882800,
          main: {
            temp: 17.29,
            feels_like: 17.01,
            temp_min: 17.29,
            temp_max: 17.29,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1016,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 3.86,
            deg: 89,
            gust: 8.49,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-05 03:00:00",
        },
        {
          dt: 1693893600,
          main: {
            temp: 16.56,
            feels_like: 16.33,
            temp_min: 16.56,
            temp_max: 16.56,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1016,
            humidity: 79,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 59,
          },
          wind: {
            speed: 3.6,
            deg: 100,
            gust: 9.33,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-05 06:00:00",
        },
        {
          dt: 1693904400,
          main: {
            temp: 22.75,
            feels_like: 22.62,
            temp_min: 22.75,
            temp_max: 22.75,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1015,
            humidity: 59,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 67,
          },
          wind: {
            speed: 5.57,
            deg: 110,
            gust: 8.35,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-05 09:00:00",
        },
        {
          dt: 1693915200,
          main: {
            temp: 27.83,
            feels_like: 28.18,
            temp_min: 27.83,
            temp_max: 27.83,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 1015,
            humidity: 49,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 69,
          },
          wind: {
            speed: 4.89,
            deg: 134,
            gust: 6.56,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-05 12:00:00",
        },
        {
          dt: 1693926000,
          main: {
            temp: 30.22,
            feels_like: 30.61,
            temp_min: 30.22,
            temp_max: 30.22,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1014,
            humidity: 45,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 3.72,
            deg: 126,
            gust: 4.86,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-05 15:00:00",
        },
        {
          dt: 1693936800,
          main: {
            temp: 25.55,
            feels_like: 25.83,
            temp_min: 25.55,
            temp_max: 25.55,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 1014,
            humidity: 64,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 78,
          },
          wind: {
            speed: 3.1,
            deg: 94,
            gust: 3.77,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-05 18:00:00",
        },
        {
          dt: 1693947600,
          main: {
            temp: 21.98,
            feels_like: 22.19,
            temp_min: 21.98,
            temp_max: 21.98,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1015,
            humidity: 75,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 6,
          },
          wind: {
            speed: 3.54,
            deg: 118,
            gust: 7.77,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-05 21:00:00",
        },
        {
          dt: 1693958400,
          main: {
            temp: 20.93,
            feels_like: 20.96,
            temp_min: 20.93,
            temp_max: 20.93,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1016,
            humidity: 72,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 8,
          },
          wind: {
            speed: 3.26,
            deg: 134,
            gust: 4.74,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-06 00:00:00",
        },
        {
          dt: 1693969200,
          main: {
            temp: 20.14,
            feels_like: 20.06,
            temp_min: 20.14,
            temp_max: 20.14,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1016,
            humidity: 71,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 7,
          },
          wind: {
            speed: 1.87,
            deg: 139,
            gust: 1.99,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-06 03:00:00",
        },
        {
          dt: 1693980000,
          main: {
            temp: 19.56,
            feels_like: 19.45,
            temp_min: 19.56,
            temp_max: 19.56,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1017,
            humidity: 72,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "few clouds",
              icon: "02d",
            },
          ],
          clouds: {
            all: 12,
          },
          wind: {
            speed: 2.3,
            deg: 110,
            gust: 2.37,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-06 06:00:00",
        },
        {
          dt: 1693990800,
          main: {
            temp: 25.22,
            feels_like: 25.23,
            temp_min: 25.22,
            temp_max: 25.22,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1018,
            humidity: 55,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 7,
          },
          wind: {
            speed: 2.5,
            deg: 101,
            gust: 2.94,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-06 09:00:00",
        },
        {
          dt: 1694001600,
          main: {
            temp: 29.43,
            feels_like: 29.6,
            temp_min: 29.43,
            temp_max: 29.43,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1017,
            humidity: 45,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 4,
          },
          wind: {
            speed: 2.89,
            deg: 81,
            gust: 3.3,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-06 12:00:00",
        },
        {
          dt: 1694012400,
          main: {
            temp: 30.36,
            feels_like: 29.99,
            temp_min: 30.36,
            temp_max: 30.36,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1016,
            humidity: 39,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 1,
          },
          wind: {
            speed: 2.8,
            deg: 67,
            gust: 3.15,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-06 15:00:00",
        },
        {
          dt: 1694023200,
          main: {
            temp: 24.54,
            feels_like: 24.51,
            temp_min: 24.54,
            temp_max: 24.54,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1016,
            humidity: 56,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "few clouds",
              icon: "02d",
            },
          ],
          clouds: {
            all: 24,
          },
          wind: {
            speed: 2.68,
            deg: 84,
            gust: 2.76,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-06 18:00:00",
        },
        {
          dt: 1694034000,
          main: {
            temp: 20.68,
            feels_like: 20.47,
            temp_min: 20.68,
            temp_max: 20.68,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1017,
            humidity: 64,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n",
            },
          ],
          clouds: {
            all: 44,
          },
          wind: {
            speed: 2.35,
            deg: 103,
            gust: 2.43,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-06 21:00:00",
        },
        {
          dt: 1694044800,
          main: {
            temp: 18.87,
            feels_like: 18.67,
            temp_min: 18.87,
            temp_max: 18.87,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1017,
            humidity: 71,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n",
            },
          ],
          clouds: {
            all: 27,
          },
          wind: {
            speed: 2.8,
            deg: 104,
            gust: 3.3,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-07 00:00:00",
        },
        {
          dt: 1694055600,
          main: {
            temp: 17.5,
            feels_like: 17.24,
            temp_min: 17.5,
            temp_max: 17.5,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1016,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "few clouds",
              icon: "02n",
            },
          ],
          clouds: {
            all: 16,
          },
          wind: {
            speed: 2.53,
            deg: 110,
            gust: 2.85,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-07 03:00:00",
        },
        {
          dt: 1694066400,
          main: {
            temp: 17.15,
            feels_like: 16.83,
            temp_min: 17.15,
            temp_max: 17.15,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1016,
            humidity: 73,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "few clouds",
              icon: "02d",
            },
          ],
          clouds: {
            all: 21,
          },
          wind: {
            speed: 2.65,
            deg: 101,
            gust: 3.19,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-07 06:00:00",
        },
        {
          dt: 1694077200,
          main: {
            temp: 23.7,
            feels_like: 23.56,
            temp_min: 23.7,
            temp_max: 23.7,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1017,
            humidity: 55,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 7,
          },
          wind: {
            speed: 2.64,
            deg: 111,
            gust: 3.36,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-07 09:00:00",
        },
        {
          dt: 1694088000,
          main: {
            temp: 28.28,
            feels_like: 28.23,
            temp_min: 28.28,
            temp_max: 28.28,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1016,
            humidity: 44,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 3,
          },
          wind: {
            speed: 2.37,
            deg: 113,
            gust: 2.45,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-07 12:00:00",
        },
        {
          dt: 1694098800,
          main: {
            temp: 30,
            feels_like: 29.69,
            temp_min: 30,
            temp_max: 30,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 1015,
            humidity: 40,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 0.82,
            deg: 161,
            gust: 1.21,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-07 15:00:00",
        },
        {
          dt: 1694109600,
          main: {
            temp: 24.36,
            feels_like: 24.44,
            temp_min: 24.36,
            temp_max: 24.36,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1015,
            humidity: 61,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 1.76,
            deg: 3,
            gust: 1.84,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-07 18:00:00",
        },
        {
          dt: 1694120400,
          main: {
            temp: 21.38,
            feels_like: 21.3,
            temp_min: 21.38,
            temp_max: 21.38,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1016,
            humidity: 66,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 0.94,
            deg: 48,
            gust: 0.98,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-07 21:00:00",
        },
        {
          dt: 1694131200,
          main: {
            temp: 19.96,
            feels_like: 19.84,
            temp_min: 19.96,
            temp_max: 19.96,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1016,
            humidity: 70,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 0.46,
            deg: 57,
            gust: 0.64,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-08 00:00:00",
        },
        {
          dt: 1694142000,
          main: {
            temp: 18.93,
            feels_like: 18.81,
            temp_min: 18.93,
            temp_max: 18.93,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1016,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 0.7,
            deg: 347,
            gust: 0.86,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-08 03:00:00",
        },
        {
          dt: 1694152800,
          main: {
            temp: 18.83,
            feels_like: 18.7,
            temp_min: 18.83,
            temp_max: 18.83,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1017,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 1.11,
            deg: 2,
            gust: 1.19,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-08 06:00:00",
        },
        {
          dt: 1694163600,
          main: {
            temp: 25.02,
            feels_like: 24.99,
            temp_min: 25.02,
            temp_max: 25.02,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1018,
            humidity: 54,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 1.82,
            deg: 21,
            gust: 2.23,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-08 09:00:00",
        },
        {
          dt: 1694174400,
          main: {
            temp: 28.77,
            feels_like: 28.55,
            temp_min: 28.77,
            temp_max: 28.77,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1017,
            humidity: 42,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 2.37,
            deg: 354,
            gust: 2.58,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-08 12:00:00",
        },
        {
          dt: 1694185200,
          main: {
            temp: 29.4,
            feels_like: 29.12,
            temp_min: 29.4,
            temp_max: 29.4,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1017,
            humidity: 41,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 3.05,
            deg: 340,
            gust: 3.42,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-08 15:00:00",
        },
        {
          dt: 1694196000,
          main: {
            temp: 22.67,
            feels_like: 22.82,
            temp_min: 22.67,
            temp_max: 22.67,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1018,
            humidity: 70,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 2.47,
            deg: 345,
            gust: 4.07,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-08 18:00:00",
        },
        {
          dt: 1694206800,
          main: {
            temp: 19.31,
            feels_like: 19.25,
            temp_min: 19.31,
            temp_max: 19.31,
            pressure: 1019,
            sea_level: 1019,
            grnd_level: 1018,
            humidity: 75,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 2.57,
            deg: 43,
            gust: 3.54,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-08 21:00:00",
        },
        {
          dt: 1694217600,
          main: {
            temp: 17.87,
            feels_like: 17.8,
            temp_min: 17.87,
            temp_max: 17.87,
            pressure: 1019,
            sea_level: 1019,
            grnd_level: 1018,
            humidity: 80,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 1.42,
            deg: 49,
            gust: 1.52,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-09 00:00:00",
        },
        {
          dt: 1694228400,
          main: {
            temp: 17.44,
            feels_like: 17.49,
            temp_min: 17.44,
            temp_max: 17.44,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1017,
            humidity: 86,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 1,
          },
          wind: {
            speed: 1.71,
            deg: 65,
            gust: 1.78,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-09-09 03:00:00",
        },
        {
          dt: 1694239200,
          main: {
            temp: 17.79,
            feels_like: 17.84,
            temp_min: 17.79,
            temp_max: 17.79,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1017,
            humidity: 85,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 1,
          },
          wind: {
            speed: 1.61,
            deg: 75,
            gust: 1.65,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-09 06:00:00",
        },
        {
          dt: 1694250000,
          main: {
            temp: 24.22,
            feels_like: 24.29,
            temp_min: 24.22,
            temp_max: 24.22,
            pressure: 1019,
            sea_level: 1019,
            grnd_level: 1018,
            humidity: 61,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 5,
          },
          wind: {
            speed: 1.94,
            deg: 80,
            gust: 2.31,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-09-09 09:00:00",
        },
      ],
      city: {
        id: 3038789,
        name: "Abbeville",
        coord: {
          lat: 50.1,
          lon: 1.8333,
        },
        country: "FR",
        population: 26461,
        timezone: 7200,
        sunrise: 1693804291,
        sunset: 1693852356,
      },
    },
    isCityCurrLoading: false,
    isCityForecastLoading: false,
  }),
  useCityDispatch: jest.fn(),
}));

describe("WeatherApp tests", () => {
  test("render WeatherApp component", () => {
    const wrapper = mount(<WeatherApp />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
