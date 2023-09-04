import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "app/App.js";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("App render", () => {
  test("shallow render App componentn", () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
