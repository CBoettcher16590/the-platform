import React, { useEffect } from 'react'
import { Button, Card, CardGroup, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import cat from '../../images/cat.jpg';
import Littlecat from '../../images/little.jpg';
import { useHistory } from 'react-router';
import { IUser } from '../../../../services/crud-server/src/models/user';
import api from '../../api'
import { useState } from 'react';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import  FavoriteArticles  from '../../components/article/favoriteArticle';
export default function Profile(){

const history = useHistory();

function onClickLogout(){
  window.localStorage.clear()
  history.push('/');
}
  return<>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Navbar.Brand href="/">The Platform</Navbar.Brand></Nav> 

<Nav>
      <Nav.Link href="/profile"> My Account</Nav.Link>
</Nav>
<Nav>
  <Button onClick={onClickLogout}>Logout</Button>
</Nav>
</Navbar.Collapse>
</Navbar>
  
{/* We need this to get the actual members information */}
{/* As a note, these say editor, because they use the same styling */}
<div className="editorCardBG">
    <Card className="editorInfoCard">
      <Card.Img variant="top" src= {cat} />
      <Card.Body className="editorInfo">
        <Card.Title><h2>User Profile</h2></Card.Title>
              <br/>
              <br/>
        <Card.Title><h5>Bio</h5></Card.Title>
        <Card.Text>
          Q: What’s the best thing about Switzerland?
          A: I don’t know, but the flag is a big plus.
        </Card.Text>
        <Nav.Link href = "/EDupdateInfo" >Edit Profile</Nav.Link>
      </Card.Body>
  </Card>
  </div>


{/* ================= FAVORITED ARTICLES ================= */}

<FavoriteArticles></FavoriteArticles>

<br/>

  </>
}