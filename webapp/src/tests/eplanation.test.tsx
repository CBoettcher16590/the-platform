import React from 'react';
import { assert, expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import sinon, {spy} from 'sinon';
//sinon lets you see if function was called or not, with the spy fun, 
import Adapter from 'enzyme-adapter-react-16';
import SignUp from "../components/SignUpForm"; //i have no clue how I accidently nuked the pages folder 🤪


//each of these will be targetted by means of setupfile.
//crucially each test needs to be named name.test.tsx
//it prints coverage. 2nd wave is make sure to grab all visuals render pages, +- searches and component counts
//also to render out components via shallow or the react test libary 🦀


//on visual components, you can check if they render correctly
//then search to make sure any text is correct
//this is for purely the visual pages...
//otherwise simulate functionality lets you trigger buttons


//https://devhints.io/enzyme

//The explanation
describe('Any Page or Compponent', () => {


    it('should test some part of the component or page', ()=>{

    })
})


// __tests__/hello_world.test.js



/*
describe('<AU_edit_profile />', () => {

//renders
    it('AU_edit_profile renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AU_edit_profile />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('AU_edit_profile mounts component without crashing', () => {

        const wrapper = mount(<AU_edit_profile />);
        expect(wrapper.find(AU_edit_profile)).to.have.lengthOf(1);
    });

//exists
    it('Au edito profile renders', () => {
        const wrapper = shallow(<AU_edit_profile />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

//important text.
    it('renders three <AU_edit_profile /> components', () => {
        const wrapper = shallow(<AU_edit_profile />);
        expect(wrapper.find('h2')).to.have.lengthOf(1)

        expect(
            wrapper.containsMatchingElement(
                <h2> Change Profile Information</h2>
            )
          ).to.be.true

    });

//grabbing the core <div out.>
    it('renders five <AU_edit_profile /> form group components', () => {
        const wrapper = shallow(<AU_edit_profile />);
        expect(wrapper.find('div')).to.have.lengthOf(1) //multiple attempts made via mount to get to lower level components, not functional
        // console.log(wrapper.debug())

    });
})



*/




















//on click it should simulate handle... signup....
// it("calls the original function", function () {
//     var callback = sinon.fake();
//     var proxy = once(callback);
  
//     proxy();
  
//     assert(callback.called);
//   });
  