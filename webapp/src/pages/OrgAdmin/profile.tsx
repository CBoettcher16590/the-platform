import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Card, Row, Col, Form, Tab, Tabs } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IUser } from '../../../../services/crud-server/src/models/user';
import api from '../../api';
import FavoriteArticles from '../../components/article/favoriteArticle';
import cat from '../../images/cat.jpg'


export default function OrgAd_profile() {

  const history = useHistory();

  const userID: string | number = localStorage.getItem("userID") || "";
  const [userList, setUserList] = useState<IUser[]>();
  const [loggedInUser, setLoggedInUser] = useState<IUser>();
  const [_userType, setUserType] = useState<IUser[]>();


  const disableLogin = ["False", "True"];

  const userType = ["Admin", "Author", "Editor", "Member", "orgAdmin", "orgAuthor", "organization"];


  const ChangeType = (userID: number, userType: number, org_name: string | undefined) => (event: any) => {

    event.preventDefault();
    api.orgs.updateUser({ userID, userType, org_name });
    //refresh
    history.go(0);
  }



  useEffect(() => {

    //  get only authors
    api.orgs.get().then((responce) => {
      const authors: IUser[] = responce.data.filter((user: IUser) => user.user_type_type_id === 2);
      setUserList(authors);
    }).catch((error: any) => console.error(`Error: ${error}`));


    // api.orgs.get().then((responce) => {
    //   const allUsers:IUser[] = responce.data;
    //   setUserList(allUsers);
    // }).catch(err => console.log("Error: ", err));

    api.orgs.get().then((responce) => {
      const authors: IUser[] = responce.data.filter((user: IUser) => user.user_type_type_id === 6);
      setUserType(authors);
    }).catch((error: any) => console.error(`Error: ${error}`));

    api.orgs.getById(userID).then((responce) => {
      const foundUser: IUser = responce.data[0];
      setLoggedInUser(foundUser);
    });

  }, []);



  function onClickLogout() {
    window.localStorage.clear()
    history.push('/');
    alert("Logged Out")
  }

  return <>
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand href="/">The-Platform</Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link id="account2" href="/orgAdminProfile">
              <div className="border1"></div>
              <div className="border1"></div>
                                        My Account</Nav.Link>
          </Nav>
          <Nav>
          <Button id="logout" onClick={onClickLogout}>
                <div className="border1"></div>
                <div className="border1"></div>
                                        Logout</Button>          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row>

        <Card className="adminInfoCard">
          <Card.Img variant="top" src={loggedInUser?.user_image_link} />
          <Card.Body className="org-adminInfo">
            <Card.Title><h2>{loggedInUser?.first_name + " " + loggedInUser?.last_name} <br />{"Admin of" + " " + loggedInUser?.org_name + " " + "Org."}</h2></Card.Title>
            <br />
            <br />
            <Card.Title><h5>{loggedInUser?.bio}</h5></Card.Title>
            <Nav.Link href="/ORAdUpdate" >Edit Profile</Nav.Link>
          </Card.Body>
        </Card>
      </Row>

      <Tabs>

        <Tab className="infoTabs" eventKey="Permissions" title="Manage Org. Authors">
          {_userType?.map(function (user, index) {
            let name = user.first_name + " " + user.last_name;
            let userDisableLogin = disableLogin[user.disable_login];
            let LoginPermissionStatus = "";

            return (
              <div key={user.user_id}>
                <Form>
                  <Row className="infoTabs">
                    <Col md={11} lg={4} >
                      <h5>{name}</h5>
                      <h6>{userType[user.user_type_type_id - 1]}</h6>
                    </Col>
                    <Col md={11} lg={8}>

                      <Button className="btnSmall" onClick={() => { ChangeType(user.user_id, 6, loggedInUser?.org_name) }} variant="outline-dark">orgAuthor</Button>
                      <Button className="btnSmall" onClick={ChangeType(user.user_id, 2, user.org_name = "NULL")} variant="outline-dark ">Author</Button>
                    </Col>

                  </Row>
                </Form>
              </div>
            )
          })}
        </Tab>

        <Tab className="infoTabs" eventKey="UserType" title="Add New Authors">
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

                      <Button className="btnSmall" onClick={ChangeType(user.user_id, 2, user.org_name = "NULL")} variant="outline-dark">Author</Button>
                      <Button className="btnSmall" onClick={ChangeType(user.user_id, 6, loggedInUser?.org_name)} variant="outline-dark ">orgAuthor</Button>
                    </Col>

                  </Row>
                </Form>
              </div>
            )
          })}
        </Tab>

      </Tabs>


    </div>

    <FavoriteArticles></FavoriteArticles>


  </>

}