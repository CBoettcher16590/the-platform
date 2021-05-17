import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import HomePage from '../../pages/home';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡


        /* BROKEN */

describe('<HomePage />', () => {

//renders
    xit('HomePage renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomePage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    xit('HomePage mounts component without crashing', () => {

        const wrapper = mount(<HomePage />);
        expect(wrapper.find(HomePage)).to.have.lengthOf(1);
    });

//exists
    xit('HomePage profile renders', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})


/*
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

        const [loggedInUser, setLoggedInUser] = useState<string>();
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


                        {/* Just an example of my styling }
                        {/* <section className="homeStories">
                        
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
                                
                        </section>  }
                

                        </>    

                    }
                    
                    
                    
                    
                    
                    export default HomePage;

*/