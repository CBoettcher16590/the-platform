import axios from 'axios'; 
import { HOSTNAME } from '../config';

export default { 

    get: async () => {
        return axios.get(`${HOSTNAME}/authors`);
    },  
    getById: async ( userId:any ) => {
        return axios.get(`${HOSTNAME}/authors/${userId}`); 
    },

    post: async (body:any) => {
        return axios.post(`${HOSTNAME}/authors`, body);
    },
    
    changePermission: async (body:any) => {
        return axios.patch( `${HOSTNAME}/authors`, body, {
            headers:{
                Code:"LoginPermission"
            },
        }); 
    },
    updateUser: async (body:any) => {
        return axios.patch( `${HOSTNAME}/authors`, body, {
            headers:{
                Code:"Update",
            },
        });
    }, 

    delete: async (body:any) => {
        return axios.delete(`${HOSTNAME}/authors`, body).then( responce => {
            return responce.data;
        });
    },
    
    Patch: async(body:any) =>{

        return axios.patch(`${HOSTNAME}/orgProfile`, body,{
            headers:{
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,

                Code:"Approval"
            },
        });

    },

    update: async ( body:any ) => { 
        console.log("approvalAPI")
        return axios.patch(`${HOSTNAME}/orgProfile`, body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                //Code is used to identify what we need to do in the patch req
                Code:"Approval",
                },  
        });
    },
}