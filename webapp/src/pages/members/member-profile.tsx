import React, { useEffect } from 'react'
import { Button, Card, CardGroup, Col, Container, Nav, Navbar, Row, Tab, Table, Tabs } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
import { IUser } from '../../../../services/crud-server/src/models/user';
import api from '../../api'
import { useState } from 'react';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import './form.css';
import FavoriteArticles from '../../components/article/favoriteArticle';


export default function Profile() {

  //did not add logout to the author profile, as its a class, should we make this a regular function? 
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useState<IUser>();
  const [favoriteArticles, setFavoriteArticles] = useState<IArticle[]>();
  const [expiredSubscription, setSubscription] = useState<string>();
  const userID = localStorage.getItem("userID") || "";


  function onClickLogout() {
    window.localStorage.clear();
    history.push('/');
    alert("Logged Out");
  }

  useEffect(() => {
    api.users.getById(userID).then((responce) => {
      const foundUser: IUser = responce.data[0];
      if (foundUser.subscription == 1) {
        const newString = (foundUser.sub_end_date).substring(0, (foundUser.sub_end_date).length - 14)

        setSubscription('Subscription Ends ' + newString);

      }
    }).catch((err) => { console.log(`Error: ${err}`); });

  }, []);


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


  return(
    <div>
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

    <div className="userProf">
        <div className="userBox">
          <Card className="authorInfoCard">
            <Card.Img className="authorCardImg" variant="top" src={loggedInUser?.user_image_link} />
            <Card.Body className="authorInfo">
              <Card.Title className="authorProfileHead"><p >{loggedInUser?.first_name + " " + loggedInUser?.last_name}'s Profile</p></Card.Title>
              <Card.Title className="profBioTxt"><p>{loggedInUser?.bio}</p></Card.Title>
              <Nav.Link className="editProfTxt" href="/AUupdateMyInfo" >  Edit Profile</Nav.Link>
              <Card.Text className="expSubText"> {expiredSubscription}  </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Container fluid>
          <Row>
            <Col>
              <Tabs className="tabsProfileCenter" defaultActiveKey="Favourites" id="uncontrolled-tab-example">
                <Tab className="tabSpacingProfileL" eventKey="Favourites" title="Favourites">

                  <FavoriteArticles></FavoriteArticles>

                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
    </div>


    </div>
  )
}