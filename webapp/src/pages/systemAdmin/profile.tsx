import { disconnect } from 'process';
import React, { useEffect } from 'react';
import cat from '../../images/cat.jpg'
import little from '../../images/little.jpg'
import { Button, Card, CardGroup, Dropdown, Nav, Navbar } from 'react-bootstrap';
import './styling.css'
import { IUser } from '../../../../services/crud-server/src/models/user'
import { useState } from 'react';
import api from '../../api'
import { useHistory } from 'react-router';


 export default function Admin_profile(){
  const history = useHistory();
  const [userList, setUserList] = useState<IUser[]>();
  //variables for the userList
  const disableLogin = ["False", "True"];
  const varient = ["info","danger"];
  const buttonText = ["Disable User Login","Enable User Login"];
  const userType = ["Admin","Author","Editor","Member"];

  useEffect(() => {
    api.users.get().then((responce) => {
      const allUsers:IUser[] = responce.data;
      setUserList(allUsers);
    }).catch(err => console.log("Error: ", err));
  }, [userList]);
  

  const ChangeLoginPermission = (user:IUser) => (event:any) =>{

    event.preventDefault();
    //Here we change the user that is being sent to the CRUD server partch so we know what to do
    if(user.disable_login === 0){
      user.disable_login = 1;
    } else {
      user.disable_login = 0;
    }
    api.users.patch(user);
    //refresh
    history.go(0);

  }


        return <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href = "/" > The-Platform</Nav.Link>
          </Nav> 
            <Nav>
              <Navbar.Brand href="/ADProfile"> My Account</Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>



        <div className="adminCardBG">
        <Card className="adminInfoCard">
          <Card.Img variant="top" src= {cat} />
          <Card.Body className="adminInfo">
          <Card.Title><h2>Author Profile</h2></Card.Title>
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

  {/* still need to style below properly */}

  <Card className="reviewArticles">
    
  <Card.Header><h3>Manage User Login Permissions</h3></Card.Header>
    <Card.Body>

    {/* Bug with managing permissions.. 
    The first request goes through right away, but the second takes a while (up to 20 seconds), It still works but you need 
    to manually refresh page.  Maybe use a setTimeout function or something for the refresh?*/}


      {userList?.map(function(user, index){
        let name = user.first_name + " " + user.last_name;
        let userDisableLogin = disableLogin[user.disable_login]
        return(
          <Card>
            <Card.Title>{name + "  -  " + userType[user.user_type_type_id - 1]} </Card.Title>
            <div>
              {/* you can ignore this error for now, it works */}
              <Button onClick={ChangeLoginPermission(user)} variant={varient[user.disable_login]}>{buttonText[user.disable_login]}</Button>
            </div>
          </Card>
        )
      })} 

      
    </Card.Body>
  </Card>
    
  <Card className="reviewArticles">
    <Card.Header><h3>s</h3></Card.Header>

  </Card>

<div className= "raw">
<Card className="text-center" style={{ width: '100rem' }}>
  <Card.Header><h3>Purchased Articles</h3></Card.Header>
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
    <Card.Img variant="top" src={little}/>
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

<Nav.Link href= "/profilePurchased" >See All </Nav.Link>
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
    <Nav.Link href= "/profileFavorite" >See All </Nav.Link>
  </Card.Body>
  <Card.Footer className="text-muted" />
</Card>
<br/>
</div>
</div>
     </>
 }