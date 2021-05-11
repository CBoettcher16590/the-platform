import { disconnect, title } from 'process';
import React, { useEffect } from 'react';
import FavoriteArticles from '../../components/article/favoriteArticle';
import { Accordion, Button, Card, CardGroup, Col, Dropdown, Form, Nav, Navbar, Row, Tab, Tabs } from 'react-bootstrap';
import './styling.css'
import { IUser } from '../../../../services/crud-server/src/models/user'
import { useState } from 'react';
import api from '../../api'
import { useHistory } from 'react-router';
import { IArticle } from '../../../../services/crud-server/src/models/article';


export default function Org_profile() {


  const history = useHistory();
  const userID: string | number = localStorage.getItem("userID") || "";
  const [userList, setUserList] = useState<IUser[]>();
  const [publishedArticleList, setPublishedArticleList] = useState<IArticle[]>();
  const [loggedInUser, setLoggedInUser] = useState<IUser>();
  const [_userType, setUserType] = useState<IUser[]>();
  const [AdList, setAdminList] = useState<IUser[]>();




  //variables for the userList
  const disableLogin = ["False", "True"];
  //error with button varient being a string[]
  //const  varient = ["danger","success"];
  const permissionButtonText = ["Disable User Login", "Enable User Login"];
  const userType = ["Admin", "Author", "Editor", "Member", "orgAdmin", "orgAuthor", "organization"];


  function onClickLogout() {
    window.localStorage.clear()
    history.push('/');
    alert("Logged Out")
  }

  useEffect(() => {
    //get the articles
    api.articles.get().then((responce) => {
      const allArticles: IArticle[] = responce.data;
      const publishedArticles: IArticle[] = allArticles.filter(_art => _art.article_status === 3);
      setPublishedArticleList(publishedArticles);
    }).catch((err) => { console.log(`Error: ${err}`); })

    // get only members
    api.orgs.get().then((responce) => {
      const allUsers: IUser[] = responce.data.filter((user: IUser) => user.user_type_type_id === 4);;
      setUserList(allUsers);
    }).catch(err => console.log("Error: ", err));

    // get only orgAdmins

    api.orgs.get().then((responce) => {
      const allUsers: IUser[] = responce.data.filter((user: IUser) => user.user_type_type_id === 5);;
      setAdminList(allUsers);
    }).catch(err => console.log("Error: ", err));


    // get user by id 
    api.orgs.getById(userID).then((responce) => {
      const foundUser: IUser = responce.data[0];
      setLoggedInUser(foundUser);
    }).catch((err) => { console.log(`Error: ${err}`); });
  }, []);






  const FeaturedArticle = (article: IArticle) => (event: any) => {
    event.preventDefault();
    api.articles.feature(article);
    //refresh
    history.go(0);
  }

  const ChangeUserType = (userID: number, userType: number) => (event: any) => {

    event.preventDefault();
    api.orgs.updateUser({ userID, userType });

    //refresh
    history.go(0);

  }

  const ChangeType = (userID: number, userType: number, org_name: string | undefined) => (event: any) => {

    event.preventDefault();
    api.orgs.updateUser({ userID, userType, org_name });

    //refresh
    history.go(0);

  }




  return <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand href="/">The Platform</Navbar.Brand>          </Nav>
        <Nav>
          <Nav.Link href="/orgProfile"> My Account</Nav.Link>
        </Nav>
        <Nav>
          <Button onClick={onClickLogout}>Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Row>
      <Col className="authorCardBG" md={11} lg={7}>
        <div >
          <Card className="adminInfoCard">
            <Card.Img variant="top" src={loggedInUser?.user_image_link} />
            <Card.Body className="adminInfo">
              <Card.Title><h2>{loggedInUser?.org_name + " " + "Organization"}</h2></Card.Title>
              <br />
              <br />
              <Card.Title><h5>{loggedInUser?.bio}</h5></Card.Title>
              <Nav.Link href="/orgpersonalinfo" >Edit Profile</Nav.Link>
            </Card.Body>
          </Card>
        </div>
      </Col>

      <Col id="adminManagementBar" md={11} lg={5}>

        <Tabs id="uncontrolled-tab-example">

          <Tab className="infoTabs" eventKey="UserType" title="Add / Remove Admins">
            {userList?.map(function (user, index) {
              let name = user.first_name + " " + user.last_name;

              return (
                <div key={user.user_id}>
                  <Form>
                    <Row className="infoTabs">
                      <Col md={11} lg={4} >
                        <h5>{name}</h5>
                        <h6>{userType[user.user_type_type_id - 1]}</h6>
                      </Col>
                      <Col md={11} lg={8}>

                        <Button className="btnSmall" onClick={ChangeType(user.user_id, 5, loggedInUser?.org_name)} variant="outline-dark">OrgAdmin</Button>
                        <Button className="btnSmall" onClick={ChangeType(user.user_id, 4, user.org_name = "NULL")} variant="outline-dark ">Member</Button>
                      </Col>

                    </Row>
                  </Form>
                </div>
              )
            })}
          </Tab>


          <Tab className="infoTabs" eventKey="AdminList" title="Mangage Org. Admins">
            {AdList?.map(function (user, index) {
              let name = user.first_name + " " + user.last_name;

              return (
                <div key={user.user_id}>
                  <Form>
                    <Row className="infoTabs">
                      <Col md={11} lg={4} >
                        <h5>{name}</h5>
                        <h6>{userType[user.user_type_type_id - 1]}</h6>
                      </Col>
                      <Col md={11} lg={8}>

                        <Button className="btnSmall" onClick={ChangeType(user.user_id, 5, loggedInUser?.org_name)} variant="outline-dark">OrgAdmin</Button>
                        <Button className="btnSmall" onClick={ChangeType(user.user_id, 4, user.org_name = "NULL")} variant="outline-dark ">Member</Button>
                      </Col>

                    </Row>
                  </Form>
                </div>
              )
            })}
          </Tab>


          <Tab className="infoTabs" eventKey="Feature Articles" title="Select Feature Articles">

            {publishedArticleList?.map((_article, index) => {
              var featuredMessage: string;
              var buttonMessage: string;
              if (_article.feature_tag === "featured") {
                featuredMessage = "Featured";
                buttonMessage = "Remove From Featured";
              } else {
                featuredMessage = "Not Featured";
                buttonMessage = "Add To Featured";
              }

              return (

                <div key={_article.article_id} className="adminFeatureArticle">
                  <Row className="infoTabs">
                    <Col sm={7} lg={8}>
                      <h3>{_article.title}</h3>
                      <h4>{featuredMessage}</h4>
                    </Col>
                    <Col sm={3} lg={3}>
                      <Button className="btn" onClick={FeaturedArticle(_article)} variant="info">{buttonMessage}</Button>
                    </Col>
                  </Row>
                </div>
              )
            })}
          </Tab>

        </Tabs>
      </Col>

    </Row>



    {/* ================= FAVORITED ARTICLES ================= */}

    <FavoriteArticles></FavoriteArticles>


  </>
}