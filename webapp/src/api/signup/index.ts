import axios from 'axios';
import {HOSTNAME} from '../config';

//would this be better in the users folder?

export default {
    post: async (body:any) => {
        return axios.post(`${HOSTNAME}/users`, body);
    }
}