import axios from 'axios';
import { HOSTNAME } from '../../config';

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

export default 
{
    post: async (body:any) => { 
    
        axios.post(`${HOSTNAME}/user`, body).then(responce => {
            let data:IUserInfo = responce.data;
            console.log(data);
            //the data._____ needs to match the names coming from the database
            window.localStorage.setItem("firstName", data.first_name);            
            window.localStorage.setItem("lastName", data.last_name);
            window.localStorage.setItem("userType", data.user_type_type_id);
            window.localStorage.setItem("userID", data.user_id);
            window.localStorage.setItem("email", data.email);

            console.log("Has the data localstorage been filled out.")
    
        });
    },

    patch: async (body:any) => {
        return axios.patch( `${HOSTNAME}/user`, body).then(responce => {
            console.log("UserPatch",responce.data);
            return responce.data;
        });
    }
}



//we need a sole get.
//we need a patch that works.