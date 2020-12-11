import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Card from 'react-bootstrap/Card'
import './pages.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'





function HomePage(props:{}){

return  <>

                <h1>Home Page</h1>
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

         </>    

  
}

export default HomePage;
