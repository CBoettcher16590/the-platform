import { disconnect, title } from 'process';
import React, { useEffect } from 'react';
import  FavoriteArticles  from '../../components/article/favoriteArticle';
import { Accordion, Button, Card, CardGroup, Dropdown, Nav, Navbar } from 'react-bootstrap';
import './styling.css'
import { IUser } from '../../../../services/crud-server/src/models/user'
import { useState } from 'react';
import api from '../../api'
import { useHistory } from 'react-router';
import { IArticle } from '../../../../services/crud-server/src/models/article';


 export default function Admin_profile(){

  const history = useHistory();

  const [userList, setUserList] = useState<IUser[]>();
  const [publishedArticleList, setPublishedArticleList] =useState<IArticle[]>();
  

  //variables for the userList
  const disableLogin = ["False", "True"];
  //error with button varient being a string[]
  //const  varient = ["danger","success"];
  const permissionButtonText = ["Disable User Login","Enable User Login"];
  const userType = ["Admin","Author","Editor","Member"];
  


  // Inside the .catch I wanted to show that both these useEffects do the same thing even though they are written differently
  useEffect(()=>{
    api.articles.get().then((responce) => {
      const allArticles:IArticle[] = responce.data;
      const publishedArticles:IArticle[] = allArticles.filter(_art => _art.article_status === 3);
      setPublishedArticleList(publishedArticles);
    }).catch((err) => { console.log(`Error: ${err}`); })
  },[]);

  useEffect(() => {
    api.users.get().then((responce) => {
      const allUsers:IUser[] = responce.data;
      setUserList(allUsers);
    }).catch(err => console.log("Error: ", err));
  }, []);
  

  const FeaturedArticle = (article:IArticle) => (event:any) => {

    event.preventDefault();

    api.articles.feature(article);

    //refresh
   history.go(0);
  }

  const ChangeLoginPermission = (user:IUser) => (event:any) =>{
    event.preventDefault();
    //Here we change the user that is being sent to the CRUD server partch so we know what to do
    if(user.disable_login === 0){
      user.disable_login = 1;
    } else {
      user.disable_login = 0;
    }
    api.users.changePermission(user);
    //refresh
    history.go(0);
  }

  function onClickLogout(){
    window.localStorage.clear()
    history.push('/');
    alert("Logged Out")
  }

        return <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand href="/">The Platform</Navbar.Brand>          </Nav> 
          <Nav>
              <Nav.Link href="/ADProfile"> My Account</Nav.Link>
            </Nav>
            <Nav>
              <Button onClick={onClickLogout}>Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>



        <div className="adminCardBG">
        <Card className="adminInfoCard">
          <Card.Img variant="top" src= "#"/>
          <Card.Body className="adminInfo">
          <Card.Title><h2>Admin Profile</h2></Card.Title>
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

  {/* still need to style below properly */}

  <Card className="bodyContainer">
    
  <Card.Header><h3>Manage User Login Permissions</h3></Card.Header>
    <Card.Body>

    {/* Bug with managing permissions.. 
    The first request goes through right away, but the second takes a while (up to 20 seconds), It still works but you need 
    to manually refresh page.  Maybe use a setTimeout function or something for the refresh?*/}


    {/* This way to list users will have to be refined as we get more users */}

      {userList?.map(function(user, index){
        let name = user.first_name + " " + user.last_name;
        let userDisableLogin = disableLogin[user.disable_login];
        
        return(
          <Accordion defaultActiveKey="1">
          <Card className="userCard">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Card.Title className="userCardTitle">{name + "  -  " + userType[user.user_type_type_id - 1]} </Card.Title>
              Disable User Login Status: {userDisableLogin}
            </Accordion.Toggle>
      
            <Accordion.Collapse eventKey="0">
              <div>
                {/* you can ignore this error for now, it works */}
                <Button onClick={ChangeLoginPermission(user)} variant="info">{permissionButtonText[user.disable_login]}</Button>
            </div>
            </Accordion.Collapse>
            
          </Card>
      
        </Accordion>
        )
      })}  
    </Card.Body>
  </Card>
    
  <Card className="bodyContainer">
    <Card.Header>
    {<h3>Set Home Page Featured Articles</h3>}
    </Card.Header>
    <Card.Body>
    
      {publishedArticleList?.map((_article,index) =>{
        var isFeatured:boolean;

        if(_article.feature_tag === "featured"){
          isFeatured = true;
        }else{
          isFeatured = false;
        }

        return(
          <Card>
            <Card.Header>
                <Card.Title className="">{_article.title}</Card.Title>
            </Card.Header>
          {/* Here I reuse the user.disable varient to reuse code */}
          <div>
            <Button onClick={FeaturedArticle(_article)} variant="info">Article Featured : {isFeatured.toString().toUpperCase()}</Button>
            
          </div>
            

          </Card>
        )
      })}

    </Card.Body>
  </Card>
{/* ================= FAVORITED ARTICLES ================= */}

<FavoriteArticles></FavoriteArticles>

</div>
     </>
 }