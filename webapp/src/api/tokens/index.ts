import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
    //Here is where we save a token to browser storage
    post: async ( body:any ) => {
        return axios.post( `${HOSTNAME}/tokens`, body).then( response => { 
            // Where could we save this instead of local storage for extra security?
            window.localStorage.setItem("token", response.data.token);
            return response.data.token;
        });
    }

}
