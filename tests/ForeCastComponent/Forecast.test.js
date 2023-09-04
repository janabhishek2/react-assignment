import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import ForecastComponent from "../../src/components/ForecastComponent";

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
  useCityDispatch: jest.fn(),
}));

describe("Forecast", () => {
  test("Forecast - Forecast data to be fetched -na", () => {
    const wrapper = mount(<ForecastComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
