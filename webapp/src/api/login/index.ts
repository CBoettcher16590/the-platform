import axios from 'axios';
import { HOSTNAME } from '../config';


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
    get: async (body:any) => { //possible a get instead of a post? //where does it post too.
        console.log(body);
    
        axios.get(`${HOSTNAME}/user`, body).then(responce => {
            let data:IUserLogin = JSON.parse(JSON.stringify(responce.data));
            console.log(`${data} this is the data `)

            localStorage.setItem("firstName", data.fName);            
            localStorage.setItem("lastName", data.lName);
            localStorage.setItem("userType", data.userType);
            localStorage.setItem("userID", data.userId);
            localStorage.setItem("email", data.email);

        console.log("Has the data local storage been filled out.")
    
        });
    }

}