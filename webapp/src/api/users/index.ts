import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
    delete: async (body:any) => {
        return axios.delete(`${HOSTNAME}/users`, body).then( responce => {
            return responce.data;
        });
    },

    patch: async (body:any) => {
        return axios.patch( `${HOSTNAME}/users`, body).then(responce => {
            return responce.data;
        });
    }
}