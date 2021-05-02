import React, { useEffect, useState } from 'react';
import './pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import PayButton from '../components/FavButton';
import Footer from '../components/footer';
import HomepageCenterDisplay from '../components/article/homepageCenterDisplay';
import { IUser } from '../../../services/crud-server/src/models/user';
import { useHistory } from 'react-router';
import HomepageFeatureDisplay from '../components/article/homepageFeatureDisplay';
import HomepageNonFeatureDisplay from '../components/article/homepageNonFeatured';
import api from '../api';
import user from '../api/users/user';


function HomePage(props:{  }){

        const [loggedInUser, setLoggedInUser] = useState<IUser>();
        const history = useHistory();
        const userID = window.localStorage.getItem("userID");
        const [navProfileLink, setNavProfileLink] = useState<string>();

        
        function onClickLogout(){
                window.localStorage.clear();
                history.go(0);
                alert("Logged Out");
              }

        // useEffect(() => {
                
        // }, [])


        useEffect(() => {
                //First We make sure that a user is signed in by checking localstorage for information
                
                if(userID){
                        api.users.getById(userID).then((responce) => {
                                const user:IUser = responce.data[0];
                                setLoggedInUser(user); 
                                switch(user.user_type_type_id) { 
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
                                        default: { 
                                           console.error("No User Type by that ID");
                                           break; 
                                        } 
                                }});        
                        history.push("/");       
                }else{
                        history.push("/signin")
                }

                //THEN we check the user type
               
                    },[]);

return  <>
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">The Platform</Navbar.Brand>
<<<<<<< HEAD
                <Nav className="navUser"> Logged In As: {loggedInUser} </Nav>
                <Nav className="mr-auto">
                 </Nav>
                 <Nav>
                         <Nav.Link href= {navProfileLink}>My Account</Nav.Link>
                 </Nav>
                 
                 <Nav>
                         <Nav.Link href= '/OrgHome'>Organization Page</Nav.Link>
                 </Nav>

                 <Nav>
                         <Nav.Link href= '/orgAdminHome'>Organization Admin</Nav.Link>
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
=======
                <Nav className="navUser"> Logged In As: {loggedInUser?.first_name} </Nav>
                <Nav className="mr-auto"></Nav>
                <Nav>
                        <Nav.Link href= {navProfileLink}>My Account</Nav.Link>
     
                        <Nav.Link href= '/OrgHome'>Organization Page</Nav.Link>

                        <Nav.Link href= '/Orgauthors'>Organization Authors</Nav.Link>

                        <Nav.Link href= '/subscription'>Subscription</Nav.Link>

                </Nav>
                        <Button id="logoutButton" onClick={onClickLogout}>Logout</Button>
        </Navbar>

        <section>
                <div className="welcomeText">
                        <h1>Welcome to "The Platform"</h1>
                </div>                        
        </section>
        <section>
        <Row id="homeArticles">
        <Col id="homeArtLeft" sm={5} lg={4}>
                <HomepageFeatureDisplay/>
        </Col>
        <Col id="homeArtCenter" sm={7} lg={5}>
                <HomepageCenterDisplay/>
        </Col>
        <Col id="homeArtRight" sm={12} lg={3}>
                <HomepageNonFeatureDisplay/>
        </Col>
        </Row>                   
        </section>
>>>>>>> 8271ac32dbc7d6d037bf6be8f642a067d2bee54a
                        


         </>    

}





export default HomePage;