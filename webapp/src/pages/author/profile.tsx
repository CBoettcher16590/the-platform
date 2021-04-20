import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Card, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  FavoriteArticles  from '../../components/article/favoriteArticle';
import './style.css';
import { useHistory } from 'react-router';
import { IUser } from '../../../../services/crud-server/src/models/user';
import api from '../../api';
import { IArticle } from '../../../../services/crud-server/src/models/article';


export default function AuthorProfile() {
//did not add logout to the author profile, as its a class, should we make this a regular function? 
const history = useHistory();
const [loggedInUser, setLoggedInUser] = useState<IUser>();
const [userArticles, setUserArticles] = useState<IArticle[]>();

function onClickLogout(){
  window.localStorage.clear()
  history.push('/');
  alert("Logged Out")
}

useEffect(() => {
  //find logged in user
  const userID:string|null = localStorage.getItem("userID");
  //get user info, and set logged in user
  api.users.getById(userID).then((responce)=>{
    const foundUser:IUser = responce.data[0];
    setLoggedInUser(foundUser);
  }).catch((err) => { console.log(`Error: ${err}`); });
}, []);

useEffect(() => {
  const userID = Number(localStorage.getItem("userID"));
  //find articles that belong to logged in user
  api.articles.get().then((responce) => {
    const allArticles:IArticle[] = responce.data;
    console.log("allArticlesTest",allArticles);
    const userArt = allArticles.filter(_art => _art.user_user_id == userID);

    setUserArticles(userArt);
  }).catch((err) => { console.log(`Error: ${err}`); });
}, []);

console.log(userArticles);
  return (
    <div>
    <Navbar className="authorNav" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/"> The-Platform</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="/newArticle">Submit An Article</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="/newSeries">Create New Series</Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Brand> My Account</Navbar.Brand>
        </Nav>
        <Nav>
          <Button onClick={onClickLogout}>Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="authorCardBG">
        <Card className="authorInfoCard">
          <Card.Img variant="top" src={loggedInUser?.user_image_link} />
          <Card.Body className="authorInfo">
          <Card.Title><h2>{loggedInUser?.first_name + " " + loggedInUser?.last_name}'s Profile</h2></Card.Title>
            <br/>
            <br/>
          <Card.Title><h5>{loggedInUser?.bio}</h5></Card.Title>
          <Nav.Link href = "/AUupdateMyInfo" >Edit Profile</Nav.Link>
        </Card.Body>
        </Card>
        </div>
    <br />

    

    <br/>
{/* ================= FAVORITED ARTICLES ================= */}

<FavoriteArticles></FavoriteArticles>

<h2>My Articles</h2>
<Table >
    <thead>
    <tr>
      <th>#</th>
      <th>Article Name</th>
      <th>Series ID</th>
    </tr>
  </thead>
  <tbody>
    {userArticles?.map(function(_art, index){
      let number = index + 1;
      let articleTitle = _art.title;
      let series = _art.series_series_id;
      return(
        <tr key={_art.article_id}>
          <td>{number}</td>
          <td>{articleTitle}</td>
          <td>{series}</td>
        </tr>
      )
    })}
  </tbody>
</Table>
    </div>
    )
}
 