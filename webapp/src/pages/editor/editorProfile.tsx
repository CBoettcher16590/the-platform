import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, CardGroup, Button, Accordion, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import FavoriteArticles from '../../components/article/favoriteArticle';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { IUser } from '../../../../services/crud-server/src/models/user';
import * as ReactDOM from 'react-dom';
import { Component } from 'react';
import DOMPurify from 'dompurify';





export default function EditorProfile() {




  const history = useHistory();
  const [pendingArticles, setPendingArticles] = useState<IArticle[]>();
  const [loggedInUser, setLoggedInUser] = useState<IUser>();
  const userId: string | null = localStorage.getItem("userID");

  const [favoriteArticles, setFavoriteArticles] = useState<IArticle[]>();

  //Find User Id so we can find favorites for this specific user
  const userID = localStorage.getItem("userID");


  const GoToArticle = (article: IArticle) => (event: any) => {
    //here we find the article id for our Title, Link
    let articleId = article.article_id;
    //then We use history.push to redirect to that page
    history.push(`/article/${articleId}`)
  }

  useEffect(() => {
    //get all the articles that this user has favorited... user_has_article
    api.articles.getForFavList(userID).then((responce) => {
      const favArticles: IArticle[] = responce.data;
      return setFavoriteArticles(favArticles);
    })

  }, []);








  //inside this useEffect is where we find all the pending articles, and assign it to pendingArtiles
  useEffect(() => {
    //First we get ALL the articles
    api.articles.get().then((responce) => {
      const articleList: IArticle[] = responce.data;
      //Then we filter through our array of Articles to get ALL of our articles that match our if statement
      let pendArticles = articleList.filter(function (_article) {
        if (_article.article_status === 2) {
          return _article;
        }
      });
      setPendingArticles(pendArticles);

    }).catch((error) => console.log("Error: ", error));

    api.users.getById(userId).then((responce) => {
      const foundUser: IUser = responce.data[0];
      setLoggedInUser(foundUser);
    });


  }, []);


  const Publish = (article: IArticle) => (event: any) => {
    //Here we are changing the article status so we can know what to do in the patch route
    article.article_status = 3;
    api.articles.approval(article);
    //this is just a refresh
    history.go(0);
  }

  const Reject = (article: IArticle) => (event: any) => {
    //Here we are changing the article status so we can know what to do in the patch route
    article.article_status = 4;
    api.articles.approval(article);
    //this is just a refresh
    history.go(0);
  }
  function onClickLogout() {
    window.localStorage.clear()
    history.push('/');
    alert("Logged Out")
  }


  class App extends React.Component {


    state = {
      showMe: true
    }






    Operation() {
      this.setState({
        showMe: !this.state.showMe
      })
    }

    render() {
      return (

        <>

          <div className="pendingcard1" >
            {
              this.state.showMe ?
                <div>
                  {pendingArticles?.map((articleLoop, index) => {

                    let title = articleLoop.title;
                    let content: string = articleLoop.contents;


                    return (

                      <section >


                        <Card key={index} className="pendingcard">
                          <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Card.Title id="sticky">
                              {title}
                            </Card.Title>

                            <Card.Body>

                              <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}></p>
                            </Card.Body>
                            <Button onClick={Publish(articleLoop)} className="btn-info">Approve</Button>
                            <Button onClick={Reject(articleLoop)} className="btn-danger">Reject </Button>
                          </Accordion.Toggle>
                        </Card>

                      </section>

                    );
                  })}
                </div>
                : null
            }
          </div>
          <div>
            <Card className="editorInfoCard1">
              <Card.Body className="editorInfo1">
                <Card.Title><h2>Pending Articles</h2></Card.Title>
                <br />
                {pendingArticles?.map((articleLoop, index) => {

                  let title = articleLoop.title;
                  let atricledate = articleLoop.created_on;
                  let content: string = articleLoop.contents;


                  return (

                    <Accordion defaultActiveKey="1">
                      <Card key={index} className="pendingArticles">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          <div>
                            <Button id="title" onClick={() => this.Operation()}>{title}</Button>
                          </div>
                          <p> <strong> Created On  {atricledate.slice(0, 10)}</strong></p>

                        </Accordion.Toggle>
                      </Card>

                    </Accordion>

                  );
                })}

              </Card.Body>
            </Card>
          </div></>
      )
    }
  }

  return <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand href="/">The Platform</Navbar.Brand>        </Nav>
        <Nav>
          <Nav.Link id="account2" href="/editorProfile">
            <div className="border1"></div>
            <div className="border1"></div>
                                        My Account</Nav.Link>
        </Nav>
        <Nav>
          <Button id="logout" onClick={onClickLogout}>
            <div className="border1"></div>
            <div className="border1"></div>
                                        Logout</Button>        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {/* <Row> */}
    <div className="main">
      <Col className="editorCardBG" sm={11} lg={6}>

        {/* first column 1 */} 
        <div >
          <Card className="editorInfoCard">
            <Card.Img variant="top" src={loggedInUser?.user_image_link} />
            <Card.Body className="editorInfo">
              <Card.Title><h2>{loggedInUser?.first_name + " " + loggedInUser?.last_name}'s Profile</h2></Card.Title>
              <br />
              <br />
              <Card.Title><h5>{loggedInUser?.bio}</h5></Card.Title>
              <Nav.Link href="/EDupdateInfo" >Edit Profile</Nav.Link>
            </Card.Body>
          </Card>
        </div>

      </Col>
      <App />


      {/* ================= FAVORITED ARTICLES ================= */}


      <Card className="fav">
        <Card.Header className="favArtTitle"><h3>Favorite Articles</h3></Card.Header>
        <Card.Body>

          <section className="favArticleRow">
            {favoriteArticles?.map(function (_art: IArticle) {
              let image = _art.image_link;
              let title = _art.title;
              let preview = _art.preview;
              let createdOn = _art.created_on.slice(0, 10);
              return (
                <div key={_art.article_id} className="favCard">

                  <img className="favImage" src={image} />

                  <div className="favArticle">

                    <p className="favArticleTitle" onClick={GoToArticle(_art)}>{title}</p>

                    <p className="favArticlePreview">{preview}</p>

                    <p className="favArticleCreatedOn">Posted On: {createdOn}</p>

                  </div>
                </div>
              )
            })}
          </section>
        </Card.Body>
        <Card.Footer className="text-muted" />
      </Card>
    </div>

  </>
}