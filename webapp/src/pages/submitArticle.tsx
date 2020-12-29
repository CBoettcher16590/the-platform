import React from 'react';
import { Navbar, Nav, Col, Form, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css';





 export default function SubmitArticle (porps: {}) {
     


  

return <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href = "thispage" >The-Platform</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
  <Nav.Link href="#Reported articles">Write an Article</Nav.Link>
</Nav>    
  <Nav className="mr-auto">
  <Nav.Link href="#Reported Reviews">My Organization</Nav.Link>
</Nav>
  <Nav className="mr-auto">
  <Nav.Link href="#Reported Reviews">My Articles</Nav.Link>
</Nav>
  <Nav>
  <Nav.Link href="/AUProfile"> My Account</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
<br/>
<h1 id="newArticleHeader">Create a New Article</h1>
<div className="newArticleBody">
    <fieldset>
    <Form>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridTitle">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter an Article Title" />
</Form.Group>

  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Tags ~ Separte Each Tag with a comma</Form.Label>
    <Form.Control type="text" placeholder="Enter Tag words for Artile" />
</Form.Group>
</Form.Row>
    <Form.Group controlId="articleForm.Textarea">
    <Form.Label>Preview</Form.Label>
    <Form.Control as="textarea" id="newArticlePreview" rows={2}  placeholder="Write a short preview that summarizes your article"/>
</Form.Group>
    <div className="checkboxes">
    <Form.Group as={Row}>
    <Form.Label as="legend" column sm={2}>
Optional Tags
</Form.Label>
<Col> 
    <Form.Check type="checkbox" label="Include as part of Series" name="seriesRadio" id="seriesRadio" />
    <Form.Check type="checkbox" label="Set as Free To Read" name="freeToReadRadio"/>
</Col>
</Form.Group >
    <Form.Group  id="imageInput">
    <Form.File  label="Add an Image" />
</Form.Group>
</div>
      
    <Form.Group id="testAreaHeader" controlId="articleForm.Textarea">
    <Form.Label>Whats on your Mind?</Form.Label>
    <Form.Control as="textarea" id="newArticleTextArea" rows={3} />
</Form.Group>
    <Button variant="success">Submit</Button>
</Form>
</fieldset>
</div>


</>
 }