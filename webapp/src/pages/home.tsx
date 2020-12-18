import React from 'react';
import MainLayout from '../layouts/MainLayout';
import './pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Divider } from '@material-ui/core';







function HomePage(props:{}){

       
return  <>
              
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">The Platform</Navbar.Brand>
                <Nav className="mr-auto">
                 </Nav>
                 <Nav>
                         <Nav.Link href= '/signup'> Sign Up!</Nav.Link>
                 </Nav>
            </Navbar>
                        <section className="homeWelcome">
                                <img src="https://images.unsplash.com/photo-1589782182965-c6512208e2b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"></img>
                                <div className="welcomeText">
                                        <h1>Welcome to "The Platform"</h1>
                                        <p>
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                        </p>
                                </div>                        
                        </section>

                        <section className="homeStories">
                                <div className="homeCard">
                                        <img className="cardImage" src="https://images.unsplash.com/photo-1553598837-21dd2303e506?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80" />
                                        <div className="article">
                                                <h2>Article Title</h2>
                                                <p>
                                                        Article Preview Text *Maecenas tristique volutpat mauris, vel pharetra nulla egestas at. 
                                                        Duis rhoncus eleifend lacinia. Nulla gravida molestie augue non mollis.*
                                                </p>
                                                <a href="/article">Check Out the Articles</a>
                                        </div>
                                </div>
                                <div className="homeCard">
                                        <img className="cardImage"  src="https://images.unsplash.com/photo-1607357574137-d238e9a14383?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                                        <div className="article">
                                                <h2>Article Title</h2>
                                                <p>
                                                        Article Preview Text *Maecenas tristique volutpat mauris, vel pharetra nulla egestas at. 
                                                        Duis rhoncus eleifend lacinia. Nulla gravida molestie augue non mollis.*
                                                </p>
                                                <a href="/article">Check Out the Articles</a>
                                        </div>
                                </div>
                                <div className="homeCard">
                                        <img className="cardImage" src="https://images.unsplash.com/photo-1606352466047-7cef02b312bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1062&q=80" />
                                        <div className="article">
                                                <h2>Article Title</h2>
                                                <p>
                                                        Article Preview Text *Maecenas tristique volutpat mauris, vel pharetra nulla egestas at. 
                                                        Duis rhoncus eleifend lacinia. Nulla gravida molestie augue non mollis.*
                                                </p>
                                                <a href="/article">Check Out the Articles</a>
                                        </div>
                                </div>
                        </section> 
                       

         </>    

  
}

export default HomePage;