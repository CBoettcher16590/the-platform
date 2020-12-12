import React, { Component } from 'react'
import { Card, Button, CardGroup, Nav } from 'react-bootstrap'
import myInfo from './myinfo'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function profile(){

  return<>
    

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src= "holder.js/100px160" />
  <br/>

  <Card.Body>
    <Card.Title><h2>Donald Trump</h2></Card.Title>
    <br/>
    <br/>
    <Card.Title><h5>Bio</h5></Card.Title>

    <Card.Text>
   Q: What’s the best thing about Switzerland?
   A: I don’t know, but the flag is a big plus.
    </Card.Text>
    <Nav.Link href = "#" >Edite Profile</Nav.Link>
  </Card.Body>
</Card>
<br/>
<Card className="text-center">
  <Card.Header><h3>Purchased Articles</h3></Card.Header>
  <Card.Body>
  <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
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
    <Button variant="primary">See All </Button>
  </Card.Body>
  <Card.Footer className="text-muted" />
</Card>

<br/>
<Card className="text-center">
  <Card.Header><h3>My Favorite List</h3></Card.Header>
  <Card.Body>
  <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
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
    <Button variant="primary">See All </Button>
  </Card.Body>
  <Card.Footer className="text-muted" />
</Card>
<br/>

  </>
}