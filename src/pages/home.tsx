import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Card from 'react-bootstrap/Card'
import './pages.css';
import { Button, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router';



function HomePage(props:{}){

        let history = useHistory();

        const redirect = () => {
          history.push('/signup')
        }
return  <>

                <h1>Home Page</h1>
                <Button onClick={redirect} type = "button" variant="warning" block >Sign-Up</Button>
                <Container className="homePage">
                <div className="homeWelcome">
                        <img src="https://images.unsplash.com/photo-1589782182965-c6512208e2b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"></img>
                        <div className="welcomeText">
                                <h1>Welcome to "The Platform"</h1>
                                <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </p>
                        </div>                        
                </div>

                <div className="homeStories">
                        <Card className="homeCard">
                                <Card.Img className="cardImage" variant="top" src="https://images.unsplash.com/photo-1553598837-21dd2303e506?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80" />
                                <Card.Body>
                                        <Card.Title>Article Title</Card.Title>
                                        <Card.Text>
                                                Article Preview Text *Maecenas tristique volutpat mauris, vel pharetra nulla egestas at. 
                                                Duis rhoncus eleifend lacinia. Nulla gravida molestie augue non mollis.*
                                        </Card.Text>
                                </Card.Body>
                        </Card>
                        <Card className="homeCard">
                                <Card.Img className="cardImage" variant="top" src="https://images.unsplash.com/photo-1607357574137-d238e9a14383?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                                <Card.Body>
                                        <Card.Title>Article Title</Card.Title>
                                        <Card.Text>
                                                Article Preview Text *Maecenas tristique volutpat mauris, vel pharetra nulla egestas at. 
                                                Duis rhoncus eleifend lacinia. Nulla gravida molestie augue non mollis.*
                                </Card.Text>
                                        </Card.Body>
                        </Card>
                        <Card className="homeCard">
                                <Card.Img className="cardImage" variant="top" src="https://images.unsplash.com/photo-1606352466047-7cef02b312bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1062&q=80" />
                                <Card.Body>
                                        <Card.Title>Article Title</Card.Title>
                                        <Card.Text>
                                                Article Preview Text *Maecenas tristique volutpat mauris, vel pharetra nulla egestas at. 
                                                Duis rhoncus eleifend lacinia. Nulla gravida molestie augue non mollis.*
                                        </Card.Text>
                                </Card.Body>
                        </Card>
                </div>
                </Container>
               

         </>    

  
}

export default HomePage;