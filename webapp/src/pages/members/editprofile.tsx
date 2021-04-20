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

    const infoHandle = _Update();
    
    const [user, setuser] = useState<IUser>();
    const [fName, setfName] = useState<string>();
    const [lName, setlName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [bio, setbio] = useState<string>();
    const [imglink, setlimgLink] = useState<string>();
    const [userBD, setUersBD] = useState<string>();
    const [phoneNumber, setphoneNumber] = useState<string>();
    
    useEffect(() => {
        api.updates.Update(infoHandle).then((responce) => {
            //this console.log shows what information we have coming in(All of it is there)
            const user: IUser = responce.data;
            setuser(user);
            setfName(user.first_name);
            setlName(user.last_name);
            setEmail(user.email);
            setbio(user.bio);
            setlimgLink(user.imgLink);
            setUersBD(user.userDB);
            setphoneNumber(user.phoneNumber)
        }).catch((error) => console.error(`Error: ${error}`));
    
    }, []);
    
    
    function handelInfoUpdate(e:any){
        e.preventDefault();
        // the ! will allow us to handel the "undefined error"
        infoHandle._Update(fName!, lName!,bio!,phoneNumber!,imglink!,userBD!, email!,);
        history.push('/profile');
    }


    return <>
        <form>
            <div className="form-group">
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
            </div>
            <br />

            <div className="form-group">
                <label>Email </label>
                <input
                    value={user?.email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="Enter email" />
            </div>
            <br />

            <div className="form-group">
                <label>Phone Number </label>
                <input
                    value={user?.phoneNumber}
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
                    value={user?.bio}
                       onChange={(e)=>setbio(e.target.value)}
                    type="text"
                    maxLength={150}
                    className="form-control"
                    placeholder="about me"
                />
            </div>

            <br />

            <div className="form-group">
                <label>Birth Date </label>
                <input
                    value={user?.userDB}
                       onChange={(e)=>setUersBD(e.target.value)}
                    type="Date"
                    className="form-control"
                    placeholder="my birth date"
                />
            </div>
            <br />

            <div className="form-group">
                <label>profile Image URL </label>
                <input
                    value={user?.imgLink}
                       onChange={(e)=>setlimgLink(e.target.value)}
                    type="url"
                    className="form-control"
                    placeholder="Image url"
                />
            </div>
            <br />
            <Button type="submit" onClick= {handelInfoUpdate}>
                Update
            </Button>
        </form>



    </>
}


