import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import renderer from 'react-test-renderer';
import LoginForm from '../components/LoginForm'


//expand tests to all components and expand snapshot testing
//prints tree, you can search tree to find different items
//for more cmplicated integration testing react testing libary
//enzyme is there to assist with unit testing


//react-test-render
test("Snap shot test one.", () => {
  const tree = renderer.create(<LoginForm/>).toJSON();
  expect(tree).toMatchSnapshot();
});
 


//from jest docs
it('Snap shot test method two.', () => {
  const tree = renderer
    .create(<LoginForm/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


//enzyme no dice
// test("should render correctly", () => {
//   const wrapper = shallow(<LoginForm/>).toJSON();
//   expect(toJson(wrapper)).toMatchSnapshot();
// });





