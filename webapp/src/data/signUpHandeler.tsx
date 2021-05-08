import { last } from 'lodash';
import api from '../api';


export default function signUpHandeler(){   
    
    function _SignUp( first_name:string, last_name:string, email:string, password:string){

       api.users.post({first_name, last_name, email, password }).then(responce => {
       });
    }

    return {
        _SignUp
    }
    
}




