import axios from 'axios';
import { HOSTNAME } from '../config';



export default {
    //need to approve article, and reject article
    patch: async (body:any) => { 
        axios.patch(`${HOSTNAME}/articles`, body).then(responce => {
        console.log("Patch in Api")
    
        });
    }

}