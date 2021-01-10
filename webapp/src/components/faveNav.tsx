import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import React, { PropsWithChildren } from "react";
import { LinkContainer } from "react-router-bootstrap";


//This is the container for fave articls so that users can scroll through them



export default function FeatureSlider( props:{}){

    return <Carousel className="featureSlider" controls={false}>
        <Carousel.Item>
            <img className="d-block w-100" src={Images.nivea.feature} alt="Nivea Products"/>
            <Carousel.Caption>
                <h3>Your picked articles</h3>
                <p>Trump is not a Leader.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={Images.sports.feature} alt="Sports Products"/>
            <Carousel.Caption>
                <h3>The Cat says Meow</h3>
                <p>Orange cat.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={Images.tech.feature} alt="Tech Gadgets"/>
        
            <Carousel.Caption>
                <h3>Large Selection of Tech Gadgets</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>;

}
