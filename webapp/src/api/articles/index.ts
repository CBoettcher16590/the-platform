import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
    
    get: async () => {
        return axios.get(`${HOSTNAME}/article`);
    },
    getIndv: async (articleId : number) => {
        return axios.get(`${HOSTNAME}/article/${articleId}`);
    },
    post: async ( body:any ) => {
        return axios.post(`${HOSTNAME}/article` , body );
    },
    patch: async ( articleId  :number, body:any ) => {
        return axios.patch(`${HOSTNAME}/article/${articleId}`, body);
    }, 
    delete: async ( articleId : number ) => {
        return axios.delete(`${HOSTNAME}/article/${articleId}`);
    }

}
    

    




