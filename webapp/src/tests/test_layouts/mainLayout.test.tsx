import React from 'react';

//article testing
//some of this is still not completly sure.
//Do I query the databse for this or not?

//unsure if I'll break apart. 

describe('Any Page or Compponent', () => {

//probably just a render test?
    it('should test some part of the component or page', ()=>{




    })

})



/*

import React, { PropsWithChildren } from "react";
import TopNavbar from "../components/TopNavbar";
import {Col, Container, Row } from "react-bootstrap";


export default function MainLayout(props: PropsWithChildren<{}>) {
    return (
        <>
            <Container className="main">
                <TopNavbar />
                <Row>
                    <Col>{props.children}</Col>
                </Row>
                <footer>
                    <Container fluid>
                        <Row>
                            <Col md={10} sm={8}></Col>
                            <Col md={2} sm={4}>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </Container>
        </>
    );
}

*/