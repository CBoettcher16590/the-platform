import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import OrgArticles from '../../../pages/organization/homepage';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is  else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<OrgArticles />', () => {

//renders
    it('OrgArticles renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<OrgArticles />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('OrganizationHome mounts component without crashing', () => {

        const wrapper = mount(<OrgArticles />);
        expect(wrapper.find(OrgArticles)).to.have.lengthOf(1);
    });

//exists
    it('OrganizationHome  renders', () => {
        const wrapper = shallow(<OrgArticles />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})


/*
import React from 'react';
import { Navbar, Nav, Card, CardGroup, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Littlecat from '../../images/little.jpg'





 export default function OrgArticles (porps: {}) {
     


  

      return <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href = "thispage" >The-Platform</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">   
    <Nav>
      <Nav.Link href="/OrgProfile"> My Account</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<br/>
<Card className="text-center">
  <Card.Body>
  <CardDeck>
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
</CardDeck>

<br/>
  </Card.Body>
  <Card.Footer className="text-muted" />
</Card>

<br/>
<Card className="text-center">
  <Card.Body>
  <CardDeck>
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
  </CardDeck>
<br/>
  </Card.Body>
</Card>
<br/>

</>
 }
*/