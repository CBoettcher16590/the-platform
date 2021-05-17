import React, { Fragment } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Route } from 'react-router';
import './splash.css'
import splash from '../images/splash.jpg'
export default function splashPage() {

    return (<>

        <Navbar collapseOnSelect id="navbar" expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Brand href="/splashPage">The Platform</Navbar.Brand>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <header className="header">
            <body className="body">
                <div className="img-gradient">

                    <p className="text"> <h2 className="welcome">Welcome To The Platfrom</h2>
                        <img src={splash} />
                        <span className="first-letter">T</span>

                            he Platform is a wholesome, unbiased and<br />
                            engaging media platform where people can read,<br />
                            write, and publish their articles<br />
                            to the world from home!<br />

                        <div className="banner-btn">
                            <div className="banner-btns">
                                <a href="/signin"><span></span> Login</a>

                            </div>
                            <a href="/signup"><span></span> Sign Up!</a>
                        </div>

                    </p>


                </div>




            </body>

        </header>


    </>)
}