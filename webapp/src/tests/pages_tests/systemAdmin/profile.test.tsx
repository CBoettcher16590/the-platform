import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import Admin_profile from '../../../pages/systemAdmin/profile';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<Admin_profile />', () => {

//renders
    it('Admin_profile renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Admin_profile />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('Admin_profile mounts component without crashing', () => {

        const wrapper = mount(<Admin_profile />);
        expect(wrapper.find(Admin_profile)).to.have.lengthOf(1);
    });

//exists
    it('Admin_profile profile renders', () => {
        const wrapper = shallow(<Admin_profile />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})


/*
import { disconnect, title } from 'process';
import React, { useEffect } from 'react';
import cat from '../../images/cat.jpg'
import little from '../../images/little.jpg'
import { Accordion, Button, Card, CardGroup, Dropdown, Nav, Navbar } from 'react-bootstrap';
import './styling.css'
import { IUser } from '../../../../services/crud-server/src/models/user'
import { useState } from 'react';
import api from '../../api'
import { useHistory } from 'react-router';
import { IArticle } from '../../../../services/crud-server/src/models/article';


 export default function Admin_profile(){

  const history = useHistory();

  const [userList, setUserList] = useState<IUser[]>();
  const [publishedArticleList, setPublishedArticleList] =useState<IArticle[]>();
  

  //variables for the userList
  const disableLogin = ["False", "True"];
  const varient = ["danger","success"];
  const permissionButtonText = ["Disable User Login","Enable User Login"];
  const userType = ["Admin","Author","Editor","Member"];
  


  // Inside the .catch I wanted to show that both these useEffects do the same thing even though they are written differently
  useEffect(()=>{
    api.articles.get().then((responce) => {
      const allArticles:IArticle[] = responce.data;
      const publishedArticles:IArticle[] = allArticles.filter(_art => _art.article_status === 3);
      setPublishedArticleList(publishedArticles);
    }).catch((err) => { console.log(`Error: ${err}`); })
  },[]);

  useEffect(() => {
    api.users.get().then((responce) => {
      const allUsers:IUser[] = responce.data;
      setUserList(allUsers);
    }).catch(err => console.log("Error: ", err));
  }, []);
  

  const FeaturedArticle = (article:IArticle) => (event:any) => {

    event.preventDefault();

    api.articles.feature(article);

    //refresh
   //history.go(0);
  }

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
              <Navbar.Brand href="/ADProfile"> My Account</Navbar.Brand>
            </Nav>
            <Nav>
              <Button onClick={onClickLogout}>Logout</Button>
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

  {/* still need to style below properly }

/*
  <Card className="bodyContainer">
    
  <Card.Header><h3>Manage User Login Permissions</h3></Card.Header>
    <Card.Body>

    {/* Bug with managing permissions.. 
    The first request goes through right away, but the second takes a while (up to 20 seconds), It still works but you need 
    to manually refresh page.  Maybe use a setTimeout function or something for the refresh?}


    {/* This way to list users will have to be refined as we get more users }

/*
      {userList?.map(function(user, index){
        let name = user.first_name + " " + user.last_name;
        let userDisableLogin = disableLogin[user.disable_login];
        
        return(
          <Accordion defaultActiveKey="1">
          <Card className="userCard">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Card.Title className="userCardTitle">{name + "  -  " + userType[user.user_type_type_id - 1]} </Card.Title>
              Disable User Login Status: {userDisableLogin}
            </Accordion.Toggle>
      
            <Accordion.Collapse eventKey="0">
              <div>
                {/* you can ignore this error for now, it works }
                <Button onClick={ChangeLoginPermission(user)} variant={varient[user.disable_login]}>{permissionButtonText[user.disable_login]}</Button>
            </div>
            </Accordion.Collapse>
            
          </Card>
      
        </Accordion>
        )
      })}  
    </Card.Body>
  </Card>
    
  <Card className="bodyContainer">
    <Card.Header>
    {<h3>Set Home Page Featured Articles</h3>}
    </Card.Header>
    <Card.Body>
    
      {publishedArticleList?.map((_article,index) =>{
        return(
          <Card>
            <Card.Header>
                <Card.Title className="">{_article.title}</Card.Title>
            </Card.Header>
          {/* Here I reuse the user.disable varient to reuse code }
          <div>
            <Button onClick={FeaturedArticle(_article)} variant="info">Feature Article</Button>  
          </div>
            

          </Card>
        )
      })}

    </Card.Body>
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

*/