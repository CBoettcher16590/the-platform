import React from 'react';
import { assert, expect } from 'chai';
import ThePlatform from '../ThePlatform';
import { mount, } from 'enzyme';
import sinon from 'sinon';

//something with shallow to check if it exists or a fulll render. 

//https://enzymejs.github.io/enzyme/docs/api/mount.html

describe('Does the platform render', () => {

 const wrapper = mount(<ThePlatform />);

    it("should render the application", ()=> {

        expect(wrapper).to.exist;

    })

    it('calls componentDidMount', () => {
    //   sinon.spy(ThePlatform.prototype, 'componentDidMount');
      
      const wrapper = mount(<ThePlatform />);
      console.log(wrapper);

    })


    xit('should be called once', () => {

        expect(ThePlatform.prototype.componentDidMount).to.have.property('callCount', 1)

    })


})