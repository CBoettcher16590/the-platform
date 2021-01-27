import axios from 'axios';
import { HOSTNAME } from '../config';
import { toInteger, toNumber } from 'lodash';

interface IUserLogin {
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
    post: async (body:any) => {
        //lets us see what is coming in
        console.log(body);
        
        axios.post(`${HOSTNAME}/users`, body).then(responce => {
            let data:IUserLogin = JSON.parse(JSON.stringify(responce.data));
          
            localStorage.setItem("firstName", data.fName);
            localStorage.setItem("lastName", data.lName);
            localStorage.setItem("userType", data.userType);
            localStorage.setItem("userID", data.userId);
            localStorage.setItem("email", data.email);
        });
    }

}