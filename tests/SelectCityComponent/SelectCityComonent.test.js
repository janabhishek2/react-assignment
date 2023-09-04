import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import SelectCityComponent from "../../src/components/SelectCityComponent";

configure({ adapter: new Adapter() });

describe("SelectCity tests", () => {
  test("render SelectCity Component", () => {
    const wrapper = mount(<SelectCityComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
