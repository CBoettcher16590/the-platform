import axios from 'axios';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import { HOSTNAME } from '../config';

export default {

    patch: async ( body:any ) => {
        return axios.patch(`${HOSTNAME}/MEMupdateMyInfo`, body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },  
            });
        },
    Update: async ( body:any ) => { 
        console.log("approvalAPI")
        return axios.patch(`${HOSTNAME}/MEMupdateMyInfo`, body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                //Code is used to identify what we need to do in the patch req
                Code:"Approval",
                },  
        });
    },

    }