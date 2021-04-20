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


export default function Profile(){

  const history = useHistory();
  const [favoriteArticles, setFavoriteArticles] = useState<IArticle[]>();
  const userID = localStorage.getItem("userID");

  const GoToArticle = (article:IArticle) => (event:any) => {
    //here we find the article id for our Title, Link
    let articleId = article.article_id;
    //then We use history.push to redirect to that page
    history.push(`/article/${articleId}`)
    }

  useEffect(() => {
  //get all the articles that this user has favorited... user_has_article
  api.articles.getForFavList(userID).then((responce) => {
    const favArticles:IArticle[] = responce.data;
    return setFavoriteArticles(favArticles);
  })

}, []);


function onClickLogout(){
  window.localStorage.clear()
  history.push('/');
}
  return<>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href = "/" > The-Platform</Nav.Link>
</Nav> 

<Nav>
      <Navbar.Brand href="/profile"> My Account</Navbar.Brand>
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
        <Nav.Link href = "/MEMupdateMyInfo" >Edit Profile</Nav.Link>
      </Card.Body>
  </Card>
  </div>


{/* ================= FAVORITED ARTICLES ================= */}

<Card className="text-center purchasedArticles">
  <Card.Header><h3>Purchased Articles</h3></Card.Header>
  <Card.Body>

<section>
  {favoriteArticles?.map(function(_art:IArticle){
     let image = _art.image_link;
     let title = _art.title;
     let preview = _art.preview;
     let createdOn = _art.created_on.slice(0,10);
     return (
      <div className="favCard">

      <img className="favImage" src={image} />

      <div className="favArticle">

      <h2 onClick={GoToArticle(_art)}>{title}</h2>

        <p>{preview}</p>

        <p>Date Posted: {createdOn}</p>
  
      </div>
    </div>
    )
  })}
</section> 
  </Card.Body>
  <Card.Footer className="text-muted" />
</Card>
<br/>

  </>
}