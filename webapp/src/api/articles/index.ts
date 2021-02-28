import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
    
    get: async () => {
        return axios.get(`${HOSTNAME}/article`, {
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },  
        });
    },
    getIndv: async (articleId : number) => {
        return axios.get(`${HOSTNAME}/article/${articleId}`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },  
            });
        },
    post: async ( body:any ) => {
        return axios.post(`${HOSTNAME}/article` , body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },  
            });
        },
    patch: async ( body:any ) => {
        return axios.patch(`${HOSTNAME}/article`, body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },  
            });
        },
    feature: async ( body:any ) => {
        return axios.patch(`${HOSTNAME}/article`, body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },  
        });
    },
    delete: async ( articleId : number ) => {
        return axios.delete(`${HOSTNAME}/article/${articleId}`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },  
            });
        }
    
    }
    




