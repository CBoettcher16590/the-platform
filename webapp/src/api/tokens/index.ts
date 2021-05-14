import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
    //Here is where we save a token to local storage
    post: async ( body:any ) => {
        return axios.post( `${HOSTNAME}/tokens`, body).then( response => { 
            window.localStorage.setItem("token", response.data.token);
            return response.data.token;
        });
    }

}
