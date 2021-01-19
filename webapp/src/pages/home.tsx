import React, { useEffect, useState } from 'react';
import './pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import PayButton from '../components/PayButton';
import Footer from '../components/footer';


function HomePage(props:{}){

              
       
return  <>
              
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">The Platform</Navbar.Brand>
                <Nav className="mr-auto">
                 </Nav>
                 <Nav>
                         <Nav.Link href= '/profile'>Member Page</Nav.Link>
                 </Nav>
                 <Nav>
                         <Nav.Link href= '/editorProfile'>Editor Page</Nav.Link>
                 </Nav>
                 <Nav>
                         <Nav.Link href= '/ADProfile'>Admin Page</Nav.Link>
                 </Nav>
                 <Nav>
                         <Nav.Link href= '/signup'> Sign Up!</Nav.Link>
                 </Nav>
                        <Nav.Link href= '/signin'>Sign In!</Nav.Link>
            </Navbar>

                        <section className="homeWelcome">
                                <img src="https://images.unsplash.com/photo-1589782182965-c6512208e2b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"></img>
                                <div className="welcomeText">
                                        <h1>Welcome to "The Platform"</h1>
                                        <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a
                                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                                        normal distribution of letters, as opposed to using 'Content here, content here', making it
                                        look like readable English. Many desktop publishing packages and web page editors now use Lorem
                                        Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                        in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                                        purpose (injected humour and the like).
                                        </p>
                                </div>                        
                        </section>
                        <section className="homeSearch">
                                <Form inline id="search">
                                        <FormControl type="text" placeholder="Search" id="searchText" />
                                        <Button variant="outline-success">Search</Button>
                                </Form>
                                <DropdownButton id="dropdown-basic-button" title="Filter By Category">
                                        <Dropdown.Item href="#/action-1">Animals</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Tech</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Holiday History</Dropdown.Item>
                                </DropdownButton>
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
                                                <a href="/article/1">Check Out the Articles</a>
                                                <PayButton/>
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
                                                <a href="/article/1">Check Out the Articles</a>
                                                <PayButton/>
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
                                                <a href="/article/1">Check Out the Articles</a>
                                                <PayButton/>
                                        </div>
                                </div>
                        </section> 
                       
<Footer/>
<Nav.Link href= '/signin'>Sign In!</Nav.Link>

         </>    

}





export default HomePage;
