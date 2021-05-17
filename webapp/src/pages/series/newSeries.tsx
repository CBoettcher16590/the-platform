import React, { useState } from 'react';
import { Navbar, Nav, Col, Form, Row, Button, Accordion, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages.css';
import { useHistory } from 'react-router';
import SeriesSubmission from '../../data/submitSeries';





export default function SubmitSeries(props: {}) {

  const history = useHistory();

  const [title, setTitle] = useState<string>("");
  const [imageLink, setImageLink] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  //Set a default user for now till login works, then we can get user Id from localstorage
  const userId: string = window.localStorage.getItem("userID") || "";

  function handelSubmit(e: any) {
    e.preventDefault();
    SeriesSubmission(title!, imageLink!, contents!, userId!);
    console.log("Success!");
    history.push('/');
  }


  return <>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/" >The-Platform</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link id="newartic" href="/newArticle">
            <div className="border1"></div>
            <div className="border1"></div>
         Write  Article</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


    <br />
    <div className="series">
      <div className="newSeriesHeader">
        <h1>Create a New Series</h1>
      </div>


      <div className="newSeriesBody">
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your Series a Title" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
              placeholder="Image url here" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Series Content</Form.Label>
            <Form.Control
              value={contents}
              onChange={(e) => setContents(e.target.value)}
              as="textarea"
              rows={3}
              placeholder="What will your series be about?" />
          </Form.Group>

          <Button variant="success" onClick={handelSubmit}>Submit</Button>
        </Form>
      </div>
    </div>

  </>
}
