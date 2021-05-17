import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import Footer from '../../components/footer';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<Footer />', () => {

//renders
    it('Footer renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('Footer mounts component without crashing', () => {

        const wrapper = mount(<Footer />);
        expect(wrapper.find(Footer)).to.have.lengthOf(1);
    });

//exists
    it(' Footer profile renders', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})


/*
import React from "react";

export default function Footer(props: {}) {
  return (
    <>
      <div className="footer">
      <a href="/signin">  <p><button>Editor</button></p></a>
      <a href="/sigin">  <p><button>Organizations</button></p></a>
      <a href="/sigin">  <p><button>Author</button></p></a>
      </div>
    </>
  );
}
*/