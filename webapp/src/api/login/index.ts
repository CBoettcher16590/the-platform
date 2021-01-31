import axios from 'axios';
import { HOSTNAME } from '../config';


export interface IUserLogin {
    userId:string,
    userType:string,
    fName:string,
    lName:string,
    email:string,
    password:string,
    dateCreated:string,
    orgId:string,
    disableLogin:number;
}

export default {
    post: async (body:any) => { //possible a get instead of a post? //where does it post too.
        //lets us see what is coming in
        console.log("BODY:  ", body);
        
        //so we want to get a list of users. Then we want to do a post to local.storage

        axios.post(`${HOSTNAME}/users`, body).then(responce => {
            let data:IUserLogin = JSON.parse(JSON.stringify(responce.data[0]));
        //we grab data using Iuser = json, which you parse. You take the 0 array member. Then store it
        //local storage

        console.log(data)

            localStorage.setItem("firstName", data.fName);
            localStorage.setItem("lastName", data.lName);
            localStorage.setItem("userType", data.userType);
            localStorage.setItem("userID", data.userId);
            localStorage.setItem("email", data.email);
        });
    }

}