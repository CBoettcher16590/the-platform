import axios from 'axios';
import { HOSTNAME } from '../config';


interface IUserInfo {
    user_id:string,
    user_type_type_id:string,
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    date_created:string,
    disable_login:number
}

interface IUserLogin {
    email:string,
    password:string
}



export default {
    post: async (body:any) => { 
        console.log(body.email);
    
        axios.post(`${HOSTNAME}/user`, body).then(responce => {
            let data:IUserInfo = responce.data;
            
            //the data._____ needs to match the names coming from the database
            window.localStorage.setItem("firstName", data.first_name);            
            window.localStorage.setItem("lastName", data.last_name);
            window.localStorage.setItem("userType", data.user_type_type_id);
            window.localStorage.setItem("userID", data.user_id);
            window.localStorage.setItem("email", data.email);

        console.log("Has the data local storage been filled out.")
    
        });
    }   //probably mirror this command in the future instead of extracting from local storage, for privacy reasons

}