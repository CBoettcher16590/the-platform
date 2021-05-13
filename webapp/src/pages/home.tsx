import React, { useEffect, useState } from 'react';
import './pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import { Button, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { render } from '@testing-library/react';
import PayButton from '../components/PayButton';



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
                                                <a href="/article">Check Out the Articles</a>
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
                                                <a href="/article">Check Out the Articles</a>
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
                                                <a href="/article">Check Out the Articles</a>
                                                <PayButton/>
                                        </div>
                                </div>
                        </section> 
                       
=======
import { Button, Col, Nav, Navbar, Row } from 'react-bootstrap';

import Footer from '../components/footer';
import HomepageCenterDisplay from '../components/article/homepageCenterDisplay';
import { IUser } from '../../../services/crud-server/src/models/user';
import { useHistory } from 'react-router';
import HomepageFeatureDisplay from '../components/article/homepageFeatureDisplay';
import HomepageNonFeatureDisplay from '../components/article/homepageNonFeatured';
import api from '../api';


function HomePage(props: {}) {

        const [loggedInUser, setLoggedInUser] = useState<IUser>();
        const history = useHistory();
        const userID = window.localStorage.getItem("userID");
        const [navProfileLink, setNavProfileLink] = useState<string>();


        function onClickLogout() {
                window.localStorage.clear();
                history.go(0);
                alert("Logged Out");
                }


        useEffect(() => {
                //First We make sure that a user is signed in by checking localstorage for information

                if (userID) {
                        api.users.getById(userID).then((responce) => {
                                const user: IUser = responce.data[0];
                                setLoggedInUser(user);
                                switch (user.user_type_type_id) {
                                        case 1: {
                                                setNavProfileLink("/ADProfile");
                                                break;
                                        }
                                        case 2: {
                                                //author
                                                setNavProfileLink("/AUProfile");
                                                break;
                                        }
                                        case 3: {
                                                //editor
                                                setNavProfileLink("/editorProfile");
                                                break;
                                        }
                                        case 4: {
                                                //member
                                                setNavProfileLink("/profile");
                                                break;
                                        }

                                        case 5: {
                                                //Organization Admin
                                                setNavProfileLink("/orgAdminProfile");
                                                break;
                                        }
                                        case 6: {
                                                //Organization Admin
                                                setNavProfileLink("/orgAuthProfile");
                                                break;
                                        }
                                        case 7: {
                                                //Organization
                                                setNavProfileLink("/orgProfile");
                                                break;
                                        }
                                        default: {
                                                console.error("No User Type by that ID");
                                                break;
                                        }
                                }
                        });
                        history.push("/");
                } else {
                        history.push("/splashPage")
                }

               
                    },[]);


        return <>
                <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/">The Platform</Navbar.Brand>
                        <Nav className="navUser"> Logged In As: {loggedInUser?.first_name} </Nav>
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                                <Nav.Link href={navProfileLink}>My Account</Nav.Link>

                                <Nav.Link href='/subscription'>Subscription</Nav.Link>


                        </Nav>
                        <Button id="logoutButton" onClick={onClickLogout}>Logout</Button>
        </Navbar>

>>>>>>> aesthetic/update/userpage

        <section className="homeArticles">
        
        <Row>
        <Col id="homeArtLeft" sm={5} lg={4}>
                <h2></h2>
                <HomepageFeatureDisplay/>
        </Col>
        <Col id="homeArtCenter" sm={7} lg={5}>
                 <h2></h2>
                <HomepageCenterDisplay/>
        </Col>
        <Col id="homeArtRight" sm={12} lg={3}>
                <h2>Discover Articles</h2>
                <HomepageNonFeatureDisplay/>
        </Col>
        </Row>                   
        </section>
         </>    

}

export default HomePage;