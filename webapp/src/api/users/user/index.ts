import axios from 'axios';
import { HOSTNAME } from '../../config';

export default {
    patch: async (body:any) => {
        return axios.patch( `${HOSTNAME}/user`, body).then(responce => {
            console.log(responce.data);
            return responce.data;
        });
    }
}