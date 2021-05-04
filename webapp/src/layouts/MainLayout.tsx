import React, { PropsWithChildren } from "react";
import TopNavbar from "../components/TopNavbar";
import {Col, Container, Row } from "react-bootstrap";


export default function MainLayout(props: PropsWithChildren<{}>) {
    return (
        <>
            
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
        </>
    );
}
