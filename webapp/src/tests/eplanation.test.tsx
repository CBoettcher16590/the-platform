import React from 'react';
import { assert, expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import sinon, {spy} from 'sinon';
//sinon lets you see if function was called or not, with the spy fun, 
import Adapter from 'enzyme-adapter-react-16';
import SignUp from "../components/SignUpForm"; //i have no clue how I accidently nuked the pages folder 🤪


//each of these will be targetted by means of setupfile.
//crucially each test needs to be named name.test.tsx

describe('Any Page or Compponent', () => {


    it('should test some part of the component or page', ()=>{




    })



})


//on click it should simulate handle... signup....


// it("calls the original function", function () {
//     var callback = sinon.fake();
//     var proxy = once(callback);
  
//     proxy();
  
//     assert(callback.called);
//   });
  