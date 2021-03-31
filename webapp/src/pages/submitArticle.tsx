import React, { useState } from 'react';
import { Navbar, Nav, Col, Form, Row, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css';
import api from '../api';
import { useHistory } from 'react-router';
import ArticleSubmission from '../data/submitArticle';
import NewSeries from '../data/submitSeries';


// NEED TO CREATE USESTATE AND USEEFFECT TO SET SEREIS 




 export default function SubmitArticle (props: {}) {
  
  const history = useHistory();

  // ARTICLE VARIABLES
  const [title, setTitle] = useState<string>("");
  const [preview, setPreview] = useState<string>("");
  const [imageLink, setImageLink] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  // SERIES 
  const [seriesDropdown, setSeriesDropdown] = useState<string>("Select Series");
  const [seriesTitle, setSeriesTitle] = useState<string>("");
  const [seriesImage, setSeriesImage] = useState<string>("");
  const [seriesContents, setSeriesContents] = useState<string>("");
  

  const submitArt = ArticleSubmission();
  const submitSeries = NewSeries();

  const userId:string|null = localStorage.getItem("userID");

    function handelSubmit(e:any){
      e.preventDefault();

      if(userId){
        submitArt.ArticleSubmission(title!, preview!, imageLink!, contents!,userId!);
        console.log("Article Success!");
        if(seriesDropdown == "New Series"){
          submitSeries.NewSeries(seriesTitle, seriesImage, seriesContents, userId);
          console.log("New Series Created");
        }

        history.push('/');
      }
      console.log("Error: No User ID Found");
    }

    function seriesDropdownHandeler(e:any){
      e.preventDefault();
      setSeriesDropdown(e.target.value);
    }


return <>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href = "thispage" >The-Platform</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="/AUProfile"> My Account</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


<br/>


<h1 id="newArticleHeader">Create a New Article</h1>

<div className="newArticleBody">

<Form>
  <Form.Row>

    <Form.Group as={Col}>
      <Form.Label className="bold">Title</Form.Label>
      <Form.Control
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      type="text"
      placeholder="Enter an Article Title" />
    </Form.Group>
  </Form.Row>

    <Form.Group>
      <Form.Label className="bold">Preview</Form.Label>
      <Form.Control 
      value={preview}
      onChange={(e)=>setPreview(e.target.value)}
      as="textarea" 
      rows={2}  
      placeholder="Write a short preview that summarizes your article"/>
    </Form.Group>


    <div className="optionalTags">
      <Form.Group as={Row}>
        <Form.Label className="bold" as="legend" column sm={2}>Optional Tags</Form.Label>
          <Col> 

          {/* Series Selector */}

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {seriesDropdown}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as="button" value="Select Series" onClick={seriesDropdownHandeler}>Select Series</Dropdown.Item>
              <Dropdown.Item as="button" value="New Series" onClick={seriesDropdownHandeler}>New Series</Dropdown.Item>
              {/* Look for Series and list them in here */}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Label className="bold">Series Title</Form.Label>
          <Form.Control 
          value={seriesTitle}
          onChange={(e) => setSeriesTitle(e.target.value)}
          type="text"
          placeholder="Enter Series Title"></Form.Control>

          <Form.Label className="bold">Series Image URL</Form.Label>
          <Form.Control 
          value={seriesImage}
          onChange={(e) => setSeriesImage(e.target.value)}
          placeholder="Enter Image URL"></Form.Control>

          <Form.Label className="bold">Series Content</Form.Label>
          <Form.Control
          value={seriesContents}
          onChange={(e) => setSeriesContents(e.target.value)}
          as="textarea"
          rows={2}
          placeholder="What is your Series About?"></Form.Control>
          </Col>
      </Form.Group >
   </div>
      <Form.Group  id="imageInput">
        <Form.Label className="bold">Image URL</Form.Label>
        <Form.Control
        value={imageLink}
        onChange={(e)=>setImageLink(e.target.value)}
        type="text"
        placeholder="Enter an Image URL to use for the article" />
      </Form.Group>
 
      
    <Form.Group id="testAreaHeader">
      <Form.Label className="bold">Whats on your Mind?</Form.Label>
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