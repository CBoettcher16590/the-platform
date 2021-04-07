import React, { useState } from 'react';
import { Navbar, Nav, Col, Form, Row, Button, Accordion, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css';
import api from '../api';
import { useHistory } from 'react-router';
import ArticleSubmission from '../data/submitArticle';





 export default function SubmitArticle (props: {}) {
  
  const history = useHistory();

  const [title, setTitle] = useState<string>("");
  const [preview, setPreview] = useState<string>("");
  const [imageLink, setImageLink] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  // const [userId, setuserId] = useState<number>();
  
  const [seriesTitle, setSeriesTitle] = useState<string>();
  const [seriesPreview, setSeriesPreview] = useState<string>();
  const [seriesImage, setSeriesImage] = useState<string>();
  const [seriesContent, setSeriesContent] = useState<string>();

  const submit = ArticleSubmission();

  //Set a default user for now till login works, then we can get user Id from localstorage
 const userId:number = 2;


  function handelSubmit(e:any){
    e.preventDefault();
    submit.ArticleSubmission(title!, preview!, imageLink!, contents!, userId!);
    console.log("Success!");
    history.push('/');
  }


return <>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href = "thispage" >The-Platform</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">   
    <Nav className="mr-auto">
      <Nav.Link href="#Reported Reviews">My Organization</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/AUProfile"> My Account</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


<br/>


<h1 id="newArticleHeader">Create a New Article</h1>

<div className="newArticleBody">

<Form>

<Accordion className="series">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="info" eventKey="0">
            New Series
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body> 
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control 
                value={seriesTitle}
                onChange={(e)=>setSeriesTitle(e.target.value)}  
                placeholder="Give your Series a Title"/>
              </Form.Group>

              <Form.Group>
                <Form.Label>Preview</Form.Label>
                <Form.Control 
                value={seriesPreview}
                onChange={(e)=>setSeriesPreview(e.target.value)} 
                placeholder="Write a brief preview of your will Series be about"/>
              </Form.Group>

          <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control 
              value={seriesImage}
              onChange={(e)=>setSeriesImage(e.target.value)}
              placeholder="Paste an image url here"/>
          </Form.Group>
          <Form.Group>
              <Form.Label>Series Content</Form.Label>
              <Form.Control 
              value={seriesContent}
              onChange={(e)=>setSeriesContent(e.target.value)}
              as="textarea" 
              rows={3}  
              placeholder="What will your series be about?"/>
          </Form.Group>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

  <Form.Row>
    <Form.Group as={Col}>
      <Form.Label>Title</Form.Label>
      <Form.Control
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      type="text"
      placeholder="Enter an Article Title" />
    </Form.Group>
  </Form.Row>

    <Form.Group>
      <Form.Label>Preview</Form.Label>
      <Form.Control 
      value={preview}
      onChange={(e)=>setPreview(e.target.value)}
      as="textarea" 
      rows={2}  
      placeholder="Write a short preview that summarizes your article"/>
    </Form.Group>

    <Form.Group  id="imageInput">
    <Form.Label>Image URL</Form.Label>
        <Form.Control
        value={imageLink}
        onChange={(e)=>setImageLink(e.target.value)}
        type="text"
        placeholder="Enter an Image URL to use for the article" />
    </Form.Group> 
    <Form.Group id="testAreaHeader">
      <Form.Label>Whats on your Mind?</Form.Label>
      <Form.Control 
      value={contents}
      onChange={(e)=>setContents(e.target.value)}
      as="textarea" 
      id="newArticleTextArea"
       rows={3} />
    </Form.Group>

    <Button variant="success" onClick={handelSubmit}>Submit</Button>
</Form>
</div>
</>
 }