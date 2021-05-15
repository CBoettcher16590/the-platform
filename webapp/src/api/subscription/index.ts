import axios from 'axios';
import { HOSTNAME } from '../config';

export default {

    patchMonthly: async (body:any) => {
        console.log("we made it here?")
        console.log(body);
        return axios.patch(`${HOSTNAME}/subscription`, body, {
            headers: {
                Code: "M",
                userid: body,
            },
        });
    },

    patchYearly: async (body: any) => {
        return axios.patch(`${HOSTNAME}/subscription`, body, {
            headers: {
                Code: "Y",
                userid: body,
            },
        });
    },

    get: async (body: any) => {
        return axios.get(`${HOSTNAME}/subscription`, {});
    },


}




    