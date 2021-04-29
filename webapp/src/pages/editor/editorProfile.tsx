import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, CardGroup, Button, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import  FavoriteArticles  from '../../components/article/favoriteArticle';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';
import { useEffect } from 'react';
import { useHistory } from 'react-router';


export default function EditorProfile(){

  const history = useHistory();
  const [pendingArticles, setPendingArticles] = useState<IArticle[]>();
  
//inside this useEffect is where we find all the pending articles, and assign it to pendingArtiles

  useEffect(() => {
      //First we get ALL the articles
    api.articles.get().then((responce) => {
      const articleList:IArticle[] = responce.data;
      
      //Then we filter through our array of Articles to get ALL of our articles that match our if statement
      let pendArticles = articleList.filter(function(_article){
      
        if(_article.article_status === 2 ){
          return _article;
        }
      });
      setPendingArticles(pendArticles);
    
    }).catch((error) => console.log("Error: ", error));

  }, []);


  const Publish = (article:IArticle) => (event:any) => {
    //Here we are changing the article status so we can know what to do in the patch route
    article.article_status = 3;
    api.articles.approval(article);
    //this is just a refresh
    history.go(0);
}

const Reject = (article:IArticle) => (event:any) => {
  //Here we are changing the article status so we can know what to do in the patch route
  article.article_status = 4;
  api.articles.approval(article);
  //this is just a refresh
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
          <Navbar.Brand href="/">The Platform</Navbar.Brand>        </Nav> 
        <Nav>
          <Navbar.Brand href="/editorProfile"> My Account</Navbar.Brand>
        </Nav>
        <Nav>
          <Button onClick={onClickLogout}>Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  
      <div className="editorCardBG">
        <Card className="editorInfoCard">
          <Card.Img variant="top" src= "#" />
          <Card.Body className="editorInfo">
          <Card.Title><h2>Editor Profile</h2></Card.Title>
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
     
      
    <br/>


  <Card className="reviewArticles">
    <Card.Body>
      <Card.Title id="pendingBoxTitle">Pending Articles</Card.Title>
      <br/>

        {pendingArticles?.map(function(articleLoop, index){
        
        let title = articleLoop.title;
        let contents = articleLoop.contents;
          return  (
          <Accordion defaultActiveKey="1">
            <Card key={index} className="pendingArticles">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <h4>{title}</h4>
             <hr/>
                <p> <strong>Click Here to See Article Contents</strong></p>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p>{contents}</p>
                  <Button onClick={Publish(articleLoop)} className="btn-info editButtons">Approve</Button>
                  <Button onClick={Reject(articleLoop)} className="btn-danger editButtons">Reject </Button>
                </Card.Body>
              </Accordion.Collapse>

            </Card>

          </Accordion>

          )
        })}
    </Card.Body>
  </Card>


<Card className="reviewArticles">
  <Card.Img variant="top" src="" />
  <Card.Body>
    <Card.Title>Reported Articles</Card.Title>
    <Card.Text>
      A user has reported these articles, please review the Article to comfirm that it does not comply with our Code of Conduct.  
    </Card.Text>
    <Nav.Link href ="#">Review Articles</Nav.Link>
  </Card.Body>
</Card>
 </div>

 {/* ================= FAVORITED ARTICLES ================= */}

<FavoriteArticles></FavoriteArticles>

                
</>
  }