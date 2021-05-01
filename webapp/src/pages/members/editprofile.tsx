import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { useHistory } from 'react-router';
import _Update from '../../data/updateinfo';
import api from '../../api';
import { useParams } from 'react-router';
import { IUser } from '../../../../services/crud-server/src/models/user';





export default function MEM_edit_profile() {

    const history = useHistory();
    const [isLoading, setLoading] = useState(false);

    const userID = localStorage.getItem("userID")||"";

    const [imageLink, setImageLink] = useState<string>();
    const [email, setEmail] = useState<any>();
    const [phoneNumber, setPhoneNumber] = useState<any>();
    const [birthdate, setBirthdate] = useState<string>();
    const [bio, setBio] = useState<string>();
    const [password, setPassword] = useState<string>();

       // This use effect is for the update loading effect 
       useEffect(() => {
        if (isLoading) {
          setTimeout(function(){
              setLoading(false);  
          }, 2000)
          };
        
        }, [ isLoading ]);


    function SubmitUserUpdate(event:any){
        event.preventDefault();
        setLoading(true);
        api.users.updateUser({imageLink, email, phoneNumber, birthdate, bio, password, userID});
        setTimeout(function(){
            history.push('/Memprofile');
        }, 1000);
      }
    // // const history = useHistory();

    // // const infoHandle = _Update();
    
    // // const [user, setuser] = useState<IUser>();
    // // const [fName, setfName] = useState<string>();
    // // const [lName, setlName] = useState<string>();
    // // const [email, setEmail] = useState<string>();
    // // const [bio, setbio] = useState<string>();
    // // const [imglink, setlimgLink] = useState<string>();
    // // const [userBD, setUersBD] = useState<string>();
    // // const [phoneNumber, setphoneNumber] = useState<string>();
    
    // // useEffect(() => {
    // //     api.updates.Update(infoHandle).then((responce) => {
    // //         //this console.log shows what information we have coming in(All of it is there)
    // //         const user: IUser = responce.data;
    // //         setuser(user);
    // //         setfName(user.first_name);
    // //         setlName(user.last_name);
    // //         setEmail(user.email);
    // //         setbio(user.bio);
    // //         setlimgLink(user.imgLink);
    // //         setUersBD(user.userDB);
    // //         setphoneNumber(user.phoneNumber)
    // //     }).catch((error) => console.error(`Error: ${error}`));
    
    // // }, []);
    
    
    // function handelInfoUpdate(e:any){
    //     e.preventDefault();
    //     // the ! will allow us to handel the "undefined error"
    //     infoHandle._Update(fName!, lName!,bio!,phoneNumber!,imglink!,userBD!, email!,);
    //     history.push('/profile');
    // }


    return <>
        <form>
            {/* <div className="form-group">
                <label>First name </label>
                <input
                    value={user?.first_name}
                    // onChange={(e)=>setfName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="First name"
                />
            </div>
            <br />

            <div className="form-group">
                <label>Last name </label>
                <input
                    value={user?.last_name}
                    onChange={(e)=>setlName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Last name" />
            </div> */}
            <br />

            <div className="form-group">
                <label>Email </label>
                <input
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    placeholder="New Email"
                    className="form-control" />
            </div>
            <br />

            <div className="form-group">
                <label>Phone Number </label>
                <input
                    value={phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    type="tel"
                    placeholder="New Phone Number"
                    className="form-control"
                />
            </div>

            <br />

            <div className="form-group">
                <label>About Me </label>
                <input
                    value={bio}
                    onChange={(e)=>setBio(e.target.value)}
                    maxLength = {200} 
                    // as="textarea"
                    // rows={3}
                    className="form-control"
                    placeholder="about me"
                />
            </div>

            <br />

            <div className="form-group">
                <label>Birth Date </label>
                <input
                    value={birthdate}
                    onChange={(e)=>setBirthdate(e.target.value)}
                    type="date"
                    className="form-control"
                    placeholder="BirthDate"
                />
            </div>
            <br />

            <div className="form-group">
                <label>New Password </label>
                <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type ="password"
            className="form-control"
            placeholder="BirthDate"
                />
            </div>
            <br />

            <div className="form-group">
                <label>profile Image URL </label>
                <input
                    value={imageLink}
                    onChange={(e)=>setImageLink(e.target.value)}
                    type="url"
                    className="form-control"
                    placeholder="Image url"
                />
            </div>
            <br />
            <Button type="submit" id="updateButton" disabled= {isLoading} onClick= {SubmitUserUpdate}>
            {isLoading ? 'Loading…' : 'Update'}
            </Button>
        </form>



    </>
}


