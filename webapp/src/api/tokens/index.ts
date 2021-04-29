import axios from 'axios';
import { HOSTNAME } from '../config';

export default { //we are using this post? to set the token? I am not sure the other window local storage is being run

//we hit this 

    post: async ( body:any ) => {
        return axios.post( `${HOSTNAME}/tokens`, body).then( response => {
            
            console.log("tokensPost", response.data);
            window.localStorage.setItem("token", response.data.token); //here we set the localstorage 
            
            return response.data.token;
        });
    }

}

