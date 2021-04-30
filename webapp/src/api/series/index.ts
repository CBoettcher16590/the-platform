import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
    get: async () => {
        return axios.get(`${HOSTNAME}/series`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },  
            });
        },
    getById: async (id:number) => {
        return axios.get(`${HOSTNAME}/series/${id}`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },  
            });
        },
    post: async ( body:any ) => {
        return axios.post(`${HOSTNAME}/series` , body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },  
            });
        },
        
    addArticleToSeries: async ( seriesID:string, artID:string ) => {
        return axios.post(`${HOSTNAME}/addArticleToSeries` , ({seriesID, artID}), {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },  
            });
        }    

    //get post patch delete
   
}
