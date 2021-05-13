import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Col, Form, Row, Button, Accordion, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css';
import { useHistory } from 'react-router';
import ArticleSubmission from '../data/submitArticle';

import { Editor } from "@tinymce/tinymce-react";
import dotenv from 'dotenv';

dotenv.config();
const tinyAxe = process.env.REACT_APP_tinyMC

export default function SubmitArticle(props: {}) {

  const history = useHistory();
  const editorRef = useRef<any>(null);


  const [content, setContent] = useState<string>("");

    
  // setContent(editorRef.current.getContent());
  

<<<<<<< HEAD
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
=======
 
//if there is no better way a meta function should be used to editorRef.current.getContent()); and then the call should be made to data/submit



  const [title, setTitle] = useState<string>("");
  const [preview, setPreview] = useState<string>("");
  const [imageLink, setImageLink] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [price, setPrice] = useState<string>("Free");


  const submit = ArticleSubmission();

  //Set a default user for now till login works, then we can get user Id from localstorage
  const userId: string = localStorage.getItem("userID") || "0";

  function handelSubmit(e: any) {
    e.preventDefault();
    
    submit.ArticleSubmission(title!, preview!, imageLink!, price!, editorRef.current.getContent()!, userId!);

    console.log("Submit Success!");
    history.push('/');
  }

  return <>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="thispage" >The-Platform</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Reported Reviews">My Organization</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="/newSeries"> Create a New Series</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/AUProfile"> My Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <br />

    <h1 id="newArticleHeader">Create a New Article</h1>

    <div className="newArticleBody" >

      <Form >

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter an Article Title" />
          </Form.Group>

        </Form.Row>  
        <Form.Group>
          <Form.Label>Preview</Form.Label>
          <Form.Control
            value={preview}
            onChange={(e) => setPreview(e.target.value)}
            as="textarea"
            rows={2}
            placeholder="Write a hook to grab the readers attention" />
        </Form.Group>

        <Form.Row>
          <Col sm={9}>
            <Form.Group id="imageInput">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                type="text"
                placeholder="Enter an Image URL to use for the article" />
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group>
              <Form.Label>Article Status</Form.Label>
              <Form.Control as="select" value={price} onChange={(e) => setPrice(e.target.value)}>
                <option>Free</option>
                <option>Subscribe</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>

        {/* <Editor apiKey='your-api-key' init={{  your other settings }} /> */}
        <Form.Group>
          <Form.Label>Whats on your Mind?</Form.Label>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            apiKey={tinyAxe}
            plugins="wordcount"
            init={{
              height: 450,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
        
        </Form.Group>

        <Button variant="success" onClick={handelSubmit}>Submit</Button>
      </Form>
    </div>
  </>
}
>>>>>>> aesthetic/update/userpage
