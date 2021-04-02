import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { useHistory } from 'react-router';
import  _Update  from '../../data/updateinfo';
import api from '../../api';
import { useParams } from 'react-router';
import { IUser } from '../../../../services/crud-server/src/models/user';


// export default function LoginForm(){

//     const history = useHistory();
//     // const authModel = useAuthentication(); //we never get something back here or rather never a logged in
    
//     const [ email, setEmail ] = useState<string>('');
//     const [ password, setPassword ] = useState<string>('');

//     function handleLogin(e:any){
//         e.preventDefault();
//         api.tokens.post({_email:email , _password:password});
//         api.user.post({email, password});
//         history.push('/'); //I think the above is fine. 
//        };


export default function MEM_edit_profile() {

    const history = useHistory();

    const params = useParams<{id:string}>();
    const numId = parseInt(params.id);

    const [fName, setfName] = useState<string>();
    const [lName, setlName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [bio, setbio] = useState<string>();
    const [imglink, setlimgLink] = useState<string>(); 
    const [userBD, setUersBD] = useState<string>();
    const [phoneNumber, setphoneNumber] = useState<string>();

    function useEffect (() => {

        api.updates.patch(numId).then((responce) => {
            const user:IUser = responce.data;
            setfName(fName);
            setlName(lName);
            setEmail(email);
            setbio(bio);
            setlimgLink(imglink);
            setUersBD(userBD);
            setphoneNumber(phoneNumber)
        }).catch((error) => console.error(`Error: ${error}`));
        
    },[]);



return <>
<form>
<div className="form-group">
                <label>First name </label>
                <input
                    value={fName}
                    onChange={(e)=>setfName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="First name"
                />
            </div>
            <br />

            <div className="form-group">
                <label>Last name </label>
                <input
                    value={lName}
                    onChange={(e)=>setlName(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder="Last name" />
            </div>
            <br />

            <div className="form-group">
                <label>Email </label>
                <input                    
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="Enter email" />
            </div>
            <br />

            <div className="form-group">
                <label>Phone Number </label>
                <input
                    value={phoneNumber}
                   onChange={(e)=>setphoneNumber(e.target.value)}
                    type="phoneNumber"
                    className="form-control"
                    placeholder="phone Number"
                />
            </div>

            <br />

<div className="form-group">
    <label>About Me </label>
    <input
        value={bio}
       onChange={(e)=>setbio(e.target.value)}
        type="text"
        maxLength= {150}
        className="form-control"
        placeholder="about me"
    />
</div>

<br />

<div className="form-group">
    <label>Birth Date </label>
    <input
        value={userBD}
       onChange={(e)=>setUersBD(e.target.value)}
        type="date"
        className="form-control"
        placeholder="my birth date"
    />
</div>
<br />

<div className="form-group">
    <label>profile Image URL </label>
    <input
        value={imglink}
       onChange={(e)=>setlimgLink(e.target.value)}
        type="url"
        className="form-control"
        placeholder="Image url"
    />
</div>
            <br />
    <Button type="submit" onClick={}>
                Update
            </Button>
</form>

 

</>
}