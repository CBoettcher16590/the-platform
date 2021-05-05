import React, { useEffect, useState } from 'react';
import './pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Nav, Navbar, Row } from 'react-bootstrap';

import Footer from '../components/footer';
import HomepageCenterDisplay from '../components/article/homepageCenterDisplay';
import { IUser } from '../../../services/crud-server/src/models/user';
import { useHistory } from 'react-router';
import HomepageFeatureDisplay from '../components/article/homepageFeatureDisplay';
import HomepageNonFeatureDisplay from '../components/article/homepageNonFeatured';
import api from '../api';


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
                                             case 5: { 
                                                //Organization
                                                setNavProfileLink("/orgProfile"); 
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

               
                    },[]);

return  <>
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">The Platform</Navbar.Brand>
                <Nav className="navUser"> Logged In As: {loggedInUser?.first_name} </Nav>
                <Nav className="mr-auto"></Nav>
                <Nav>
                        <Nav.Link href= {navProfileLink}>My Account</Nav.Link>
     
                        <Nav.Link href= '/orgProfile'>Organization Page</Nav.Link>

                        <Nav.Link href= '/orgAdminProfile'>Organization Admin</Nav.Link>

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
         </>    

}

export default HomePage;