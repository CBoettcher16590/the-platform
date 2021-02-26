import React from 'react';
import { Navbar, Nav, Button, Card } from 'react-bootstrap';
import cat from '../../images/cat.jpg'


export default class Organization_profile extends React.Component {

    state = {
      likes: 0
    };
    addLike = () => {
      let newCount = this.state.likes + 1;
      this.setState({
        likes: newCount
      });
    };
    state2 = {
        disLike : 0
      };
      addDisLike = () => {
        let DisLikes = this.state2.disLike + 1;
        let Likes = this.state.likes - 1;

        this.setState({
          likes: Likes,
          disLike: DisLikes 
        });
      };
  
  render(){
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                    <Nav.Link href="/OrgHome">The-Platform</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link href="#OrganizationAuthors">Organization Authors</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link href="#OrganizationArticles">Organization Articles</Nav.Link>
                </Nav>
                <Nav>
                    <Navbar.Brand href="/OrgProfile"> My Account</Navbar.Brand>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            <br />
            <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={cat} />
      <br />

      <Card.Body>
        <Card.Title><h2>Donald Trump</h2></Card.Title>
        <br />
        <br />
        <Card.Title><h5>Bio</h5></Card.Title>

        <Card.Text>
          Q: What’s the best thing about Switzerland?
          A: I don’t know, but the flag is a big plus.
        </Card.Text>
        <Nav.Link href="/ORupdateMyInfo">Edite Profile</Nav.Link>
      </Card.Body>
    </Card>
    <br />
    <Button onClick={this.addLike}>Likes: {this.state.likes} </Button>
    <br/>
    <br/>
    <Button variant= "danger" onClick={this.addDisLike}> disLikes: {this.state2.disLike} </Button>
    <br/>
    <br/>
      </div>

    )
}
}