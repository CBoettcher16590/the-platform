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

  const disableLogin = ["False", "True"];

  const userType = ["Author","Member"];



  useEffect(()=>{
    api.users.get().then((responce) => {
      const allUsers:IUser[] = responce.data;
      setUserList(allUsers);
    }).catch(err => console.log("Error: ", err));

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
  // state = {
  //   likes: 0
  // };
  // addLike = () => {
  //   let newCount = this.state.likes + 1;
  //   this.setState({
  //     likes: newCount
  //   });
  // };
  // state2 = {
  //     disLike : 0
  //   };
  //   addDisLike = () => {
  //     let DisLikes = this.state2.disLike + 1;
  //     let Likes = this.state.likes - 1;

  //     this.setState({
  //       likes: Likes,
  //       disLike: DisLikes 
  //     });
  //   };

  return <>
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">The-Platform</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="/Orgauthors">Organization Authors</Nav.Link>
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
        
      <Card className="org-adminInfoCard">
      <Card.Img variant="top" src={loggedInUser?.user_image_link} />
      <Card.Body className="org-adminInfo">
      <Card.Title><h2>{loggedInUser?.first_name + " " + loggedInUser?.last_name}'s Profile</h2></Card.Title>
        <br/>
        <br/>
      <Card.Title><h5>{loggedInUser?.bio}</h5></Card.Title>
      <Nav.Link href = "/ORupdateMyInfo" >Edit Profile</Nav.Link>
    </Card.Body>
    </Card>
    </Row>

    <Tabs>

    <Tab className="infoTabs" eventKey="UserType" title="Manage User Type">
    {userList?.map(function(user, index){
      let name = user.first_name + " " + user.last_name;
      let userDisableLogin = disableLogin[user.disable_login];
      let LoginPermissionStatus = "";
      return( 
        <div key={index}>
          <Form>
          <Row className="infoTabs">
            <Col sm={6} lg={4} >
             <h5>{name}</h5>
             <h6>{userType[user.user_type_type_id - 1]}</h6>
            </Col>
           <Col sm={6} lg={8}>
           
             <Form.Group>
             <Form.Label>User Type</Form.Label>
               <Form.Control as="select">
                 <option value="2">Author</option>
                 <option value="4">Member</option>
               </Form.Control>
             </Form.Group>
        
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