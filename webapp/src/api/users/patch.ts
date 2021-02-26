import axios from "axios";
import { HOSTNAME } from "../config";

export default{
patch: async ( userId  :number, body:any ) => {
    return axios.patch(`${HOSTNAME}/user/${userId}`, body);
}, 
}