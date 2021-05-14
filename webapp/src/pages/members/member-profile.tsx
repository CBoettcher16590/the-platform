import React, { useEffect } from 'react'
import { Button, Card, CardGroup, Col, Nav, Navbar, Row, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
import { IUser } from '../../../../services/crud-server/src/models/user';
import api from '../../api'
import { useState } from 'react';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import './form.css';
export default function Profile() {

  //did not add logout to the author profile, as its a class, should we make this a regular function? 
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useState<IUser>();
  const [favoriteArticles, setFavoriteArticles] = useState<IArticle[]>();
  const userID = localStorage.getItem("userID") || "";


  function onClickLogout() {
    window.localStorage.clear();
    history.push('/');
    alert("Logged Out");
  }

  const GoToArticle = (article: IArticle) => (event: any) => {
    //here we find the article id for our Title, Link
    let articleId = article.article_id;
    //then We use history.push to redirect to that page
    history.push(`/article/${articleId}`)
  }


  useEffect(() => {
    //find logged in user
    const userID: string | null = localStorage.getItem("userID");
    //get user info, and set logged in user
    api.users.getById(userID).then((responce) => {
      const foundUser: IUser = responce.data[0];
      setLoggedInUser(foundUser);

      api.articles.getForFavList(userID).then((responce) => {
        const favArticles: IArticle[] = responce.data;
        return setFavoriteArticles(favArticles);
      });
    }).catch((err) => { console.log(`Error: ${err}`); });
  }, []);


  return <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand href="/">The Platform</Navbar.Brand></Nav>
        <Nav>
        <Nav.Link id="account2" href="/profile">
                                        <div className="border1"></div>
                                        <div className="border1"></div>
                                        My Account</Nav.Link>
        </Nav>


        <Nav>
        <Button id="logout" onClick={onClickLogout}>
                                        <div className="border1"></div>
                                        <div className="border1"></div>
                                        Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Row>
      <Col className="authorCardBG" sm={11} lg={6}>
        <div >
          <Card className="authorInfoCard">
            <Card.Img variant="top" src={loggedInUser?.user_image_link} />
            <Card.Body className="authorInfo">
              <Card.Title><h2>{loggedInUser?.first_name + " " + loggedInUser?.last_name}'s Profile</h2></Card.Title>
              <br />
              <br />
              <Card.Title><h5>{loggedInUser?.bio}</h5></Card.Title>
              <Nav.Link href="/profileEdit" >Edit Profile</Nav.Link>
            </Card.Body>
          </Card>
        </div>
      </Col>


      {/* ================= FAVORITED ARTICLES ================= */}

      <Col sm={11} lg={6}>
        <Table className="favArticleTable" striped borderless hover>
          <thead>
            <tr>
              <th><h3>Favorite Articles</h3></th>
            </tr>
          </thead>
          <tbody>
            {favoriteArticles?.map(function (_article: IArticle, index = 1) {
              let artTitle = _article.title;
              let artImage = _article.image_link
              let preview = _article.contents.slice(0, 70) + "...";
              return (
                <div className="favArticleBody" key={index}>
                  <tr>
                    <td>{index}</td>
                    <td><img id="favArtImg" src={artImage} alt="articleImage.jpg" /></td>
                    <td onClick={GoToArticle(_article)}><h4>{artTitle}</h4></td>
                    <td><h6>{preview}</h6></td>
                  </tr>
                </div>
              )
            })}
          </tbody>
        </Table>
      </Col>
    </Row>

  </>
}