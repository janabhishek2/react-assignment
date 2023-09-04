import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import SelectCityComponent from "../../src/components/SelectCityComponent";

configure({ adapter: new Adapter() });

jest.mock("app/context/cityContext", () => ({
  useCityDispatch: () => jest.fn(),
  cityActions: {
    setCity: (city) => ({
      type: "SET_CITY",
      payload: city,
    }),
  },
}));

describe("SelectCity tests", () => {
  test("render SelectCity Component", () => {
    const wrapper = mount(<SelectCityComponent />);
    wrapper.find("select").simulate("change", {
      target: {
        value: {
          id: 3038756,
          nm: "Ablis",
          lat: 48.5172,
          lon: 1.83624,
        },
      },
    });
  });
});
