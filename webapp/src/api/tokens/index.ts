import axios from 'axios';
import { HOSTNAME } from '../config';

interface ITokenPostRequest {
    _email: string;
    _password: string;
}

export default { //we are using this post? to set the token? I am not sure the other window local storage is being run

//we hit this 

    post: async ( body:ITokenPostRequest ) => {
        return axios.post( `${HOSTNAME}/tokens`, body).then( response => {
            console.log("API TOKENS WindowLocalStorage: ", response.data.token);
            window.localStorage.setItem("token", response.data.token); //this code doesn't run because the above breaks
            return response.data;
        });
    }

}

