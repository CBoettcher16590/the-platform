import axios from 'axios';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import { HOSTNAME } from '../config';

export default {
    
    get: async () => {
        return axios.get(`${HOSTNAME}/rating`, {
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },  
        });
    },
    post: async ( body:any ) => {
        return axios.post(`${HOSTNAME}/rating` , body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },  
            });
        }
    }
    




