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



export default function Subscription() {


  const history = useHistory();

  function onClickLogout() {
    window.localStorage.clear()
    history.push('/');
    alert("Logged Out")
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
        <div className="SubscribeTxt"> Support content creators!</div>
        <br />
        <div className="subscribeButton">
          <div>
            <Button variant="primary" size="lg" block>
              Subscribe Today
            </Button>{' '}
          </div>
        </div>
        <div className="subscribetxtsmol">
          <p> </p>
        </div>
        <div className="subReasonsCards">
            <Card border="light" style={{ width: '16rem' }}>
              <Card.Img className="subCardImg" variant="top" src="https://images.unsplash.com/photo-1618422960849-739830070f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80" />
              <Card.Body>
                <Card.Title>Want to support your favourite creators?</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">Subscribe</Button>
              </Card.Body>
            </Card>

            <Card border="light" style={{ width: '16rem' }}>
              <Card.Img className="subCardImg" variant="top" src="https://images.unsplash.com/photo-1616427758519-c8f639b64134?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
              <Card.Body>
                <Card.Title>Want to get access to exclusive content?</Card.Title>
                <Card.Text>
                  If you are tired of being locked out of your favourite content?
                </Card.Text>
                <Button variant="primary">Subscribe</Button>
              </Card.Body>
            </Card>

            <Card border="light" style={{ width: '16rem' }}>
              <Card.Img className="subCardImg" variant="top" src="https://images.unsplash.com/photo-1607183420110-1eda752919cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=657&q=80" />
              <Card.Body>
                <Card.Title> Tired of waiting? </Card.Title>
                <Card.Text>
                  Why don't you
                </Card.Text>
                <Button variant="primary">Subscribe</Button>
              </Card.Body>
            </Card>

        </div>
      </div>



    </div>














  </>





}


//button to here to become a subscriber today
  //subscribe
//then we get some advertising blurbs.
//maybe using cards to basically say.
//Want more? Acess? Exclusive Articles Super elite stuff.




//sends you to subscription plans. Smol page with options.


/* BIG ALL CUTE BANNER THAT SAYS BANNER SHIP STATUS, maybe light teal or grey.*/
/*
[          ] [          ] [          ] [          ] [          ]
[          ] [          ] [          ] [          ] [          ]
[          ] [          ] [          ] [          ] [          ]

[          ] [          ] [          ] [          ] [          ]
[          ] [          ] [          ] [          ] [          ]
[          ] [          ] [          ] [          ] [          ]
//maybe the subscription look like that. Just a thought. Or if it's one subscription. WE do one page.

implement this first maybe? colour bands aftewarsd. + Something that scales really well.
[       SUBSCRIPTION    ]
[        STATUS         ] as well.
[                       ]

    [               ] < these can pop out to be bigger when hovered over.
    [               ]
    [               ]
*/