import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
    
    get: async () => {
        return axios.get(`${HOSTNAME}/article`);
    },

    post: async ( body:any ) => {
        return axios.post(`${HOSTNAME}/article` , body );
    },
    patch: async ( id:string, body:any ) => {
        return axios.patch(`${HOSTNAME}/article/${id}`, body);
    }, 
    delete: async ( id:string ) => {
        return axios.delete(`${HOSTNAME}/article/${id}`);
    }

}
    

    




