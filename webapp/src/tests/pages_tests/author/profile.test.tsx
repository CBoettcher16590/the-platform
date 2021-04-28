import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import author_profile from '../../../pages/author/profile';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'



describe('Any Page or Compponent', () => {


  xit('should test some part of the component or page', ()=>{
        //another class uncertain how to deal with it. Standard render methods don't seem to work
        //something about jsx elements not operating.


  })

})




//article testing
//some of this is still not completly sure.
//Do I query the databse for this or not?

//unsure if I'll break apart. 

/*

DOA


describe('Hello', () => {
  it('should render text', () => {
    const wrapper = render(<author_profile />)

    expect(wrapper).to.have.text('Hello world.')
  })
})





describe('<author_profile />', () => {

  //renders
      it('author_profile renders without crashing', () => {
          const div = document.createElement('div');
          ReactDOM.render(<author_profile />, div);
          ReactDOM.unmountComponentAtNode(div);
      });
  
  //mounts
      it('AU_edit_profile mounts component without crashing', () => {
  
          const wrapper = mount(<author_profile />);
          expect(wrapper.find(AU_edit_profile)).to.have.lengthOf(1);
      });
  
  //exists
      it('Au edito profile renders', () => {
          const wrapper = shallow(<author_profile />);
          expect(wrapper).to.exist;
  
          // https://enzymejs.github.io/enzyme/docs/api/shallow.html
      });
  
  //important text.
      it('renders three <AU_edit_profile /> components', () => {
          const wrapper = shallow(<author_profile />);
          expect(wrapper.find('h2')).to.have.lengthOf(1)
  
          expect(
              wrapper.containsMatchingElement(
                  <h2> Change Profile Information</h2>
              )
            ).to.be.true
  
      });
  
  //grabbing the core <div out.>
      it('renders five <AU_edit_profile /> form group components', () => {
          const wrapper = shallow(<author_profile />);
          expect(wrapper.find('div')).to.have.lengthOf(1) //multiple attempts made via mount to get to lower level components, not functional
          // console.log(wrapper.debug())
  
      });
  })

*/
  


/*
import React from 'react';
import { Navbar, Nav, Card, CardGroup, CardDeck, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Littlecat from '../../images/little.jpg';
import cat from '../../images/cat.jpg';
import './style.css'



export default class author_profile extends React.Component {
//did not add logout to the author profile, as its a class, should we make this a regular function?
  state = {
    likes: 0
  };
  addLike = () => {
    let addCount = this.state.likes + 1;
    this.setState({
      likes: addCount
    });
  };
  removeLike = () =>{
    let minusCount = this.state.likes -1;
    this.setState({
      likes: minusCount
    })
  }


  

render(){
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/"> The-Platform</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="/newArticle">Submit An Article</Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Brand> My Account</Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <br />
    <div className="authorCardBG">
        <Card className="authorInfoCard">
          <Card.Img variant="top" src= {cat} />
          <Card.Body className="authorInfo">
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
        </div>
    <br />
    <div className="likeCounter">
      <Button onClick={this.addLike}> + </Button>
      <br/>
      <span>Likes: {this.state.likes}</span>
      <br/>
      <Button onClick={this.removeLike}> - </Button>
    </div>
    

    <br/>
    <br/>
        <Card.Header><h3>Purchased Articles</h3></Card.Header>
    <Card.Body>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={Littlecat} />
          <Card.Body>
            <Card.Title><h4>Article title</h4></Card.Title>
            <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
              additional content.This content is a little bit longer.
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
              additional content.This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>

        </Card>
      </CardDeck>

      <br />
    </Card.Body>
    <br />

    <Nav.Link href="/profilePurchased">See All </Nav.Link>
    <Card.Footer className="text-muted" />
  <br /><Card className="text-center">
      <Card.Header><h3>My Favorite List</h3></Card.Header>

      <Card.Body>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={Littlecat} />
            <Card.Body>
              <Card.Title><h4>Article title</h4></Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content.This content is a little bit longer.
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
                additional content.This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>

          </Card>
        </CardDeck>
        <br />
        <Nav.Link href="/profileFavorite">See All </Nav.Link>
      </Card.Body>
    </Card>
    <br />
    </div>
    )
}
 }
*/