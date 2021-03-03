import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, CardGroup, Button, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import cat from '../../images/cat.jpg';
import little from '../../images/little.jpg';
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
    api.articles.patch(article);
    //this is just a refresh
    history.go(0);
}

const Reject = (article:IArticle) => (event:any) => {
  //Here we are changing the article status so we can know what to do in the patch route
  article.article_status = 4;
  api.articles.patch(article);
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
          <Nav.Link href = "/" > The-Platform</Nav.Link>
        </Nav> 
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
          <Card.Img variant="top" src= {cat} />
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
 <div className= "raw">
    <Card className="text-center" style={{ width: '100rem' }}>
      <Card.Header><h3>Purchased Articles</h3></Card.Header>
      <Card.Body>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={little} />
        <Card.Body>
        <Card.Title><h4>Cats Training</h4></Card.Title>
          <Card.Text>
            Train the cats in sword fights, This thrilling article will include cats that have won the internet through some crazy skills that they
            have all developed through secret nightly cat meetings.
        
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={little}/>
        <Card.Body>
        <Card.Title><h4>Silent Meow</h4></Card.Title>
          <Card.Text>
            A heartwarming article about the rewards that come from addopting a kitty. This one goes into detail about the story of a cat that was found
            by a trucker while at a truck stop in BC.
      .{' '}
          </Card.Text>
        </Card.Body>
    
      </Card>
      <Card>
        <Card.Img variant="top" src={little} />
        <Card.Body>
        <Card.Title><h4>Article title</h4></Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card.Body>
    
      </Card>
    </CardGroup>
    <br/>
    
    <Nav.Link href= "#" >See All </Nav.Link>
      </Card.Body>
      <Card.Footer className="text-muted" />
    </Card>
    
    <br/>
    <Card className="text-center"  style={{ width: '100rem' }}>
      <Card.Header><h3>My Favorite List</h3></Card.Header>
      <Card.Body>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={little} />
        <Card.Body>
        <Card.Title><h4>Article title</h4></Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={little} />
        <Card.Body>
        <Card.Title><h4>Article title</h4></Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
    
      </Card>
      <Card>
        <Card.Img variant="top" src={little} />
        <Card.Body>
          <Card.Title><h4>Article title</h4></Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card.Body>
    
      </Card>
    </CardGroup>
    <br/>
        <Nav.Link href= "#" >See All </Nav.Link>
      </Card.Body>
      <Card.Footer className="text-muted" />
    </Card>
    <br/>
 </div>
                
</>
  }