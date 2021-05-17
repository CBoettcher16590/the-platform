import axios from 'axios';
import { HOSTNAME } from '../config';

export default {

    get: async () => {
        return axios.get(`${HOSTNAME}/orgs`);
    },
    getById: async (userId: any) => {
        return axios.get(`${HOSTNAME}/orgs/${userId}`);
    },

    post: async (body: any) => {
        return axios.post(`${HOSTNAME}/orgs`, body);
    },

    changePermission: async (body: any) => {
        return axios.patch(`${HOSTNAME}/orgs`, body, {
            headers: {
                Code: "LoginPermission"
            },
        });
    },
    updateUser: async (body: any) => {
        return axios.patch(`${HOSTNAME}/orgs`, body, {
            headers: {
                Code: "Update",
            },
        });
    },

    delete: async (body: any) => {
        return axios.delete(`${HOSTNAME}/orgs`, body).then(responce => {
            return responce.data;
        });
    }
}