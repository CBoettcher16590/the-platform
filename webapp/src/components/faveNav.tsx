
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import React from "react";
import { LinkContainer } from "react-router-bootstrap";


//This is the container for fave articls so that users can scroll through them



export default function FeatureSlider(props: {}) {

    return <Carousel className="featureSlider" controls={false}>
        <Carousel.Item>
            <Carousel.Caption>
                <h3>Your picked articles</h3>
                <p>Trump is not a Leader.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <h3>The Cat says Meow</h3>
                <p>Orange cat.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <h3>Large Selection of Tech Gadgets</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>;

}
