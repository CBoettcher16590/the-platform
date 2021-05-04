import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import FeatureSlider from '../../components/faveNav';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<PayButton />', () => {

//renders
    it('PayButton renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FeatureSlider />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('PayButton mounts component without crashing', () => {

        const wrapper = mount(<FeatureSlider />);
        expect(wrapper.find(FeatureSlider)).to.have.lengthOf(1);
    });

//exists
    it(' PayButton profile renders', () => {
        const wrapper = shallow(<FeatureSlider />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

/*

import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import React from "react";
import { LinkContainer } from "react-router-bootstrap";


//This is the container for fave articls so that users can scroll through them



export default function FeatureSlider( props:{}){

    return <Carousel className="featureSlider" controls={false}>
        <Carousel.Item>
            {/* <img className="d-block w-100" src={Images.nivea.feature} alt="Nivea Products"/> }
            <Carousel.Caption>
                <h3>Your picked articles</h3>
                <p>Trump is not a Leader.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <img className="d-block w-100" src={Images.sports.feature} alt="Sports Products"/> }
            <Carousel.Caption>
                <h3>The Cat says Meow</h3>
                <p>Orange cat.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <img className="d-block w-100" src={Images.tech.feature} alt="Tech Gadgets"/> }
        
            <Carousel.Caption>
                <h3>Large Selection of Tech Gadgets</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>;

}

*/