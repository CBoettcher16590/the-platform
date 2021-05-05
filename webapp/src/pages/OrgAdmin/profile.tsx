import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Card, Row, Col, Form, Tab, Tabs } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IUser } from '../../../../services/crud-server/src/models/user';
import api from '../../api';
import FavoriteArticles from '../../components/article/favoriteArticle';
import cat from '../../images/cat.jpg'


export default function OrgAd_profile(){

  const history = useHistory(); 

  const userID = localStorage.getItem("userID") || "";
  const [userList, setUserList] = useState<IUser[]>();
  const [loggedInUser, setLoggedInUser] = useState<IUser>();
  const [_userType, setUserType] = useState<IUser[]>();


  const disableLogin = ["False", "True"];

  const userType = ["Author","Member"];

  
  const ChangeUserType = (userID:number, userType:number) => (event:any) => {

    event.preventDefault();
    api.users.updateUser({userID, userType});
    //refresh
    history.go(0);
  }
 

  useEffect(()=>{
    api.users.get().then((responce) => {
      const allUsers:IUser[] = responce.data;
      setUserList(allUsers);
    }).catch(err => console.log("Error: ", err));

    api.users.get().then((responce) => {
      const authors: IUser[] = responce.data.filter((user: IUser ) => user.user_type_type_id === 6);
      setUserType(authors);
    }).catch((error: any) => console.error(`Error: ${error}`)); 

    api.users.getById(userID).then((responce)=>{
      const foundUser:IUser = responce.data[0];
      setLoggedInUser(foundUser);
    }
    )},[]);

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
            <Nav.Link href="/">The-Platform</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Brand href="/orgAdminProfile"> My Account</Navbar.Brand>
          </Nav>
          <Nav>
            <Button onClick={onClickLogout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row> 
        
      <Card className="adminInfoCard">
      <Card.Img variant="top" src={loggedInUser?.user_image_link} />
      <Card.Body className="org-adminInfo">
      <Card.Title><h2>{loggedInUser?.first_name + " " + loggedInUser?.last_name}'s Profile</h2></Card.Title>
        <br/>
        <br/>
      <Card.Title><h5>{loggedInUser?.bio}</h5></Card.Title>
      <Nav.Link href = "/ORAdUpdate" >Edit Profile</Nav.Link>
    </Card.Body>
    </Card>
    </Row>

    <Tabs>

    <Tab className="infoTabs" eventKey="UserType" title="Manage User Type">
    {_userType?.map(function(user, index){
      let name = user.first_name + " " + user.last_name;
      let userDisableLogin = disableLogin[user.disable_login];
      let LoginPermissionStatus = "";
      return( 
        <div key={user.user_id}>
        <Form>
        <Row className="infoTabs">
          <Col md={11} lg={4} >
           <h5>{name}</h5>
           <h6>{userType[user.user_type_type_id - 1]}</h6>
          </Col>
         <Col md={11} lg={8}>

             <Button className="btnSmall" onClick={ChangeUserType(user.user_id, 2)} variant="outline-dark">Author</Button>
             <Button className="btnSmall" onClick={ChangeUserType(user.user_id, 4)} variant="outline-dark ">Member</Button>
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