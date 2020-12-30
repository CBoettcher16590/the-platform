import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


 export default function mostRecentArcticles(){
    return(
        <><div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/homepage">The-Platform</Nav.Link>
                    </Nav>

                    <Nav className="mr-auto">
                        <Nav.Link href="/freetoread">Free To Read</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Navbar.Brand href="#">Most Recent</Navbar.Brand>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/profile"> My Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br />
        
        </div><br /><br />
            <section className="homeWelcome">
                <img src="https://images.unsplash.com/photo-1589782182965-c6512208e2b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"></img>
                <div className="welcomeText">
                    <h1>Most Recent Articles</h1>
                    <p>
                                         Shout out to our members who keep our site going.
                        Thanks for supporting our authors.


                    </p>
                </div>
            </section></>
 
 
 
 
 
 
 
 
 
 
 
 
 )
 }
