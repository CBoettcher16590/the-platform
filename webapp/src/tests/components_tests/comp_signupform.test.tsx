import React from 'react';
import { assert, expect } from 'chai';
import Enzyme, { mount, shallow } from 'enzyme';
// import sinon, {spy} from 'sinon'; //don't understand why broken and don't care. later.
//sinon lets you see if function was called or not, with the spy function 
import Adapter from 'enzyme-adapter-react-16';
import SignUp from "../../components/SignUpForm";
import ReactDOM from 'react-dom';
// so we need enzyme, enzyme adatper to test rendering :I
// should be done in the test set up file.


// Enzyme.configure({ adapter: new Adapter() }); 
//this is  just to tell enzyme which type of react thus react 16 adapter.
//used in the set up folder.
//it configures it for react type which is updated to 16




//testing has an order of importance. Somethings relatively speaking probably do not need testing
//functions, buttons, components, integrations

//so anyways with the shallow rendering, and the find you can grab component parts
//and then (maybe with find you can grab specific [3] elements?)
// unsure how you isolate gibberish on the inside
// user events can be simulated once we search.



//shallow rendering single components,
//mount full dom rendering, (can test life cycle)
//render - react component to HTML

//stimulate api, find wrapper.find('loginbutton').simulate('click')
//https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/find.html wacky
//maybe it's in children of some divs O_o
//https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/filterWhere.html neat






//unit test, a unit of code
describe('Signup', ()=>{
    
  
    const wrapper = shallow(<SignUp />) //I think this is a correct example. unsure of how to do the other checks.
  
    it('Should Render the form correctly', ()=> {
  
      expect(wrapper.find('div.form-group')).to.have.lengthOf(4); // there are 4 of em? true...
      
      // const testDiv = wrapper.find('div div')
      // expect(testDiv.text()).to.be.eq('text');

      // expect(wrapper.find())

/*
    it('simulates click events', () => {
        const onButtonClick = sinon.spy();
        //  const wrapper = shallow(<SignUp onButtonClick={onButtonClick} />);
        wrapper.find('button').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    });
*/   

/*
    it('checks the function that enters things for user creation', function() {
      
        let functionSpy = sinon.spy( );

    });
*/

    
    })
  
    it('Should have the correct text', () =>{
  
      //text not being found correctly.
    //   expect(wrapper.find('input.placeholder').text()).to.be.eq('pasword'); //prolly cause input.placeholder is inside a div 
  //not sure if it finds the node correctly. Might only look for divs..
  
    })
  
  
  })
  
  
  describe('Signup', ()=>{
  
    it('Should Render the form', ()=> {
  
      const wrapper = shallow(<SignUp />)
      // const testDiv = wrapper.find('div div')
      // expect(testDiv.text()).to.be.eq('text');
    
      expect(wrapper.length).to.be.eq(1);
  
    })

    it('TopNavbar renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<SignUp />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

//mounts
  it('TopNavbar mounts component without crashing', () => {

      const wrapper = mount(<SignUp />);
      expect(wrapper.find(SignUp)).to.have.lengthOf(1);
  });

//exists
  it(' Footer profile renders', () => {
      const wrapper = shallow(<SignUp />);
      expect(wrapper).to.exist;

      // https://enzymejs.github.io/enzyme/docs/api/shallow.html
  });

})

  
  





  
// function called simulate, that can can simulate events





/*
import Foo from './Foo';

describe('<Foo />', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount((
      <Foo onButtonClick={onButtonClick} />
    ));
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(Foo.prototype, 'componentDidMount');
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
    Foo.prototype.componentDidMount.restore();
  });
});

*/





/*








spy(SignUp.prototype, 'componentDidMount');

describe('<Foo />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<SignUp />);
    expect(SignUp.prototype.componentDidMount).to.have.property('callCount', 1);
  });
});





describe('Signup', ()=>{
    
  
  const wrapper = shallow(<SignUp />) //I think this is a correct example. unsure of how to do the other checks.

  it('Should Render the form correctly', ()=> {

    expect(wrapper.find('div.form-group')).to.have.lengthOf(4);
    
    // const testDiv = wrapper.find('div div')
    // expect(testDiv.text()).to.be.eq('text');
  
  })

  it('Second render attempt ', ()=> {

    const wrapper = render(<SignUp/>);


  })

  it('Test of signup button', () => {

    //"btn btn-primary btn-block"
// const wrapper = shallow()

  })

  it('Test of inputs into both fields', ()=> {


  })

})

//simulate, and act events.




//hmmm


import MyComponent from './MyComponent';
import Foo from './Foo';

import Footer from '../components/classes/footer'


describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo)).to.have.lengthOf(3);
  });

  it('renders an `.icon-star`', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <MyComponent>
        <div className="unique" />
      </MyComponent>
    ));
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });


*/