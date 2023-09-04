import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CurrentWeatherComponent from "../../src/components/CurrentWeatherComponent";
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
    cityCurrData: {},
    cityForecastData: {},
    isCityCurrLoading: false,
    isCityForecastLoading: false,
  }),
  useCityDispatch: () => {},
}));

describe("CurrentWeather", () => {
  test("CurrentWeather - CurrentWeather-fetch-data available", () => {
    const wrapper = mount(<CurrentWeatherComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
