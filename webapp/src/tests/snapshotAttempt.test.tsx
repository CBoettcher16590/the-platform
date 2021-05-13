import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Login from '../pages/forms/signin';

test("should render correctly", () => {
  const wrapper = shallow(<Login />).toJSON();
  expect(toJson(wrapper)).toMatchSnapshot();
});


import { CountDown } from "./CountDown";

test("should render correctly", () => {
  const wrapper = shallow(<CountDown startTime={30} />).toJSON();
  expect(toJson(wrapper)).toMatchSnapshot();
});








// import * as React from "react";
// import * as renderer from "react-test-renderer";
// import Login from '../pages/forms/signin';


// describe('<CheckoutFormYear as a snapshot??????', () => {

//     test("should render correctly", () => {
//     const tree = renderer.create(<Login />).toJSON();
//     expect(tree).toMatchSnapshot();
//     });

// })
