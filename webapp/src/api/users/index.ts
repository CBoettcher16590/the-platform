import axios from 'axios';
import { HOSTNAME } from '../config';

export default {

    get: async () => {
        return axios.get(`${HOSTNAME}/users`);
    },

    patch: async (body:any) => {
        return axios.patch( `${HOSTNAME}/users`, body).then(responce => {
            console.log(responce.data);
            return responce.data;
        });
    },

    delete: async (body:any) => {
        return axios.delete(`${HOSTNAME}/users`, body).then( responce => {
            return responce.data;
        });
    }
}