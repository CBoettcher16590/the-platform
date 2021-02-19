import axios from 'axios';
import { HOSTNAME } from '../../config';

export default {

    get: async () => { //
        return axios.get(`${HOSTNAME}/user`);
    },

    patch: async (body:any) => {
        return axios.patch( `${HOSTNAME}/user`, body).then(responce => {
            console.log(responce.data);
            return responce.data;
        });
    }
}



//we need a sole get.
//we need a patch that works.