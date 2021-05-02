import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import Profile from '../../../pages/members/member-profile';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<Profile />', () => {

//renders
    it('Profile renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Profile />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('Profile mounts component without crashing', () => {

        const wrapper = mount(<Profile />);
        expect(wrapper.find(Profile)).to.have.lengthOf(1);
    });

//exists
    it('Au Profile profile renders', () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

/*
import React, { useEffect } from 'react'
import { Button, Card, CardGroup, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import cat from '../../images/cat.jpg';
import Littlecat from '../../images/little.jpg';
import { useHistory } from 'react-router';
import { IUser } from '../../../../services/crud-server/src/models/user';
import api from '../../api'
import { useState } from 'react';


export default function Profile(){

  const history = useHistory();
  const [LoggedInUser, setLoggedInUser] = useState<IUser>();

  let windowUserId = localStorage.getItem("userID");

  useEffect(()=>{
    api.users.get().then((responce) => {
      const userList:IUser[] = responce.data
      const foundUser = userList.find((_user) => {
        let _id = _user.user_id.toString();
        windowUserId = _id;
      });
      
      console.log(foundUser);

    }).catch(error =>{ throw error})
  },[]);

function onClickLogout(){
  window.localStorage.clear()
  history.push('/');
  alert("Logged Out")
}

  return<>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href = "/" > The-Platform</Nav.Link>
</Nav> 

<Nav>
      <Navbar.Brand href="/profile"> My Account</Navbar.Brand>
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
        <Card.Title><h2>User Profile</h2></Card.Title>
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
  </div>
<br/>
<Card className="text-center">
  <Card.Header><h3>Purchased Articles</h3></Card.Header>
  <Card.Body>
  <CardGroup>
  <Card>
    <Card.Img variant="top" src={Littlecat} />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
    <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
</Card.Text>
</Card.Body>
</Card>
<Card>
    <Card.Img variant="top" src={Littlecat}/>
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
    <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
</Card.Text>
</Card.Body>

</Card>
<Card>
    <Card.Img variant="top" src={Littlecat} />
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

<Nav.Link href= "/profilePurchased" >See All </Nav.Link>
  </Card.Body>
  <Card.Footer className="text-muted" />
</Card>

<br/>
<Card className="text-center">
  <Card.Header><h3>My Favorite List</h3></Card.Header>
  <Card.Body>
  <CardGroup>
  <Card>
  <Card.Img variant="top" src={Littlecat} />
  <Card.Body>
  <Card.Title><h4>Article title</h4></Card.Title>
  <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
</Card.Text>
</Card.Body>
</Card>
<Card>
    <Card.Img variant="top" src={Littlecat} />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
    <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
</Card.Text>
</Card.Body>

</Card>
  <Card>
  <Card.Img variant="top" src={Littlecat} />
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
  <Nav.Link href= "/profileFavorite" >See All </Nav.Link>
</Card.Body>
  <Card.Footer className="text-muted" />
</Card>
<br/>

  </>
}
*/
