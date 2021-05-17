import axios from 'axios';
import { HOSTNAME } from '../../config';

interface IUserInfo {
    user_id: string,
    user_type_type_id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    date_created: string,
    disable_login: number,
    org_name: string,

}

export default
    {
        post: async (body: any) => {

            axios.post(`${HOSTNAME}/org`, body).then(responce => {
                let data: IUserInfo = responce.data;
                //the data._____ needs to match the names coming from the database
                window.localStorage.setItem("userID", data.user_id);


            });
        },

        patch: async (body: any) => {
            return axios.patch(`${HOSTNAME}/org`, body).then(responce => {
                return responce.data;
            });
        }
    }