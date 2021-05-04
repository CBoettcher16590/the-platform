import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import LoginForm from '../../components/LoginForm';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<LoginForm />', () => {

//renders
    it('Footer renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LoginForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('Footer mounts component without crashing', () => {

        const wrapper = mount(<LoginForm />);
        expect(wrapper.find(LoginForm)).to.have.lengthOf(1);
    });

//exists
    it(' Footer profile renders', () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

/*
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import api from '../api';


export default function LoginForm(){

    const history = useHistory();
    // const authModel = useAuthentication(); //we never get something back here or rather never a logged in
    
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    function handleLogin(e:any){
        e.preventDefault();
        api.tokens.post({_email:email , _password:password});
        api.user.post({email, password});
        history.push('/'); //I think the above is fine. 
       };

    

    return (
        <>
        <form id="signForm">
        <h2>Sign In</h2>

        <div className="form-group">
            <label>Email </label> 
            <input value={email} onChange={(e)=>setEmail(e.target.value)} id="emailInput" 
                type="email" className="form-control" placeholder="Enter email" />
        </div>
    <br/>
        <div className="form-group">
            <label>Password </label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} 
                type="password" className="form-control" placeholder="Enter password" />
        </div>

        <Button type="submit" className="btn btn-primary btn-block" onClick={handleLogin}>
            Sign In
        </Button>

        <p className="forgot-password text-right">
            Forgot your Password ? <a href="forms/signin">Help</a>
        </p>
    </form>
        </>
    )
}

*/

