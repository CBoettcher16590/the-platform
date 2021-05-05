import axios from 'axios';
import { IArticle } from '../../../../services/crud-server/src/models/article';
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
    addToFav: async ( body:any ) => {
        return axios.post(`${HOSTNAME}/favoriteArticle` , body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },  
            });
        },
    getForFavList: async ( body:any ) => {
        return axios.get(`${HOSTNAME}/favoriteArticle` , {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                //in this case, body is going to be a userID
                Code:`${body}`
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
    approval: async ( body:any ) => {
        return axios.patch(`${HOSTNAME}/article`, body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                //Code is used to identify what we need to do in the patch req
                Code:"Approval",
                },  
        });
    },
    feature: async ( body:any ) => {
        return axios.patch(`${HOSTNAME}/article`, body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                //Code is used to identify what we need to do in the patch req
                Code:"Feature",
                },  
        });
    },
    updateRating: async ( body:any ) => {
        return axios.patch(`${HOSTNAME}/article`, body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                //Code is used to identify what we need to do in the patch req
                Code:"Rating",
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
    




