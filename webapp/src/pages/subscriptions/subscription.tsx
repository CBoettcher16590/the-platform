import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, CardGroup, Button, Container, Jumbotron, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import FavoriteArticles from '../../components/article/favoriteArticle';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';



export default function Subscription() {


  const history = useHistory();

  function onClickLogout() {
    window.localStorage.clear()
    history.push('/');
    alert("Logged Out")
  }

  function routeToSub(){
    history.push('/plans');

  }

  return <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand href="/">The Platform</Navbar.Brand>        </Nav>
        <Nav>
          <Navbar.Brand href="/editorProfile"> My Account</Navbar.Brand>
        </Nav>
        <Nav>
          <Button onClick={onClickLogout}>Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <div className="alignSubContent">
      <div className="subcontent">
        <div className="SubscribeTxt"> Support Content Creators!</div>
        <br />
        <div className="subscribeButton">
          <div>
              <Button variant="primary" size="lg" block  onClick={routeToSub}>
              Subscribe Today
             </Button>{''}
          </div>
        </div>
        <div className="subscribetxtsmol">
          <p> </p>
        </div>
        <div className="subReasonsCards">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col sm={4}>
                <Card border="light" style={{ width: '16rem' }}>
                  <Card.Img className="subCardImg" variant="top" src="https://images.unsplash.com/photo-1618422960849-739830070f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80" />
                  <Card.Body className="subCardText">
                    <Card.Title>Want to support your favourite creators? If so  </Card.Title>
                    <Card.Text>
                    </Card.Text>
                    Better filler text

                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card border="light" style={{ width: '16rem' }}>
                  <Card.Img className="subCardImg" variant="top" src="https://images.unsplash.com/photo-1616427758519-c8f639b64134?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                  <Card.Body className="subCardText">
                    <Card.Title>Want exclusive content?</Card.Title>
                    <Card.Text>
                       Tired of being locked out?
                       Better filler text

                  </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card border="light" style={{ width: '16rem' }}>
                  <Card.Img className="subCardImg" variant="top" src="https://images.unsplash.com/photo-1607183420110-1eda752919cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=657&q=80" />
                  <Card.Body className="subCardText">
                    <Card.Title> Tired of waiting? </Card.Title>
                    <Card.Text>
                      Better filler text
                  </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

    </div>

  </>
}


