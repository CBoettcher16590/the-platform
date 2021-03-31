import React, { useEffect, useState } from 'react';
import './pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import PayButton from '../components/FavButton';
import Footer from '../components/footer';
import HorazontalDisplay from '../components/article/horazontalDisplay';
import { IUser } from '../../../services/crud-server/src/models/user';
import { useHistory } from 'react-router';


function HomePage(props:{}){

        const [loggedInUser, setLoggedInUser] = useState<string>("");
        const history = useHistory();
        
        useEffect(() => {
                const user = window.localStorage.getItem("firstName");
                if(user){
                 setLoggedInUser(user);       
                }
                history.push("/");
                    },[]);

return  <>

        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">The Platform</Navbar.Brand>
                <Nav className="navUser"> Logged In As: {loggedInUser} </Nav>
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
                         <Nav.Link href= '/AUProfile'>Author Page</Nav.Link>
                 </Nav>

                 <Nav>
                         <Nav.Link href= '/OrgHome'>Organization Page</Nav.Link>
                 </Nav>

                 <Nav>
                         <Nav.Link href= '/Orgauthors'>Organization Authors</Nav.Link>
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
                        
                        <HorazontalDisplay/>


         </>    

}





export default HomePage;
