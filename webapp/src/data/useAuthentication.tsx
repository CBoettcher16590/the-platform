import { PasswordModel } from '../../../services/crud-server/src/models/password';
import api from '../api';

export default function useAuthentication(){
 
    
    function login( email:string, password:string ){
            api.tokens.post({ email, password }).then(response => {
            console.log("Logged In");
        });
    }

    return {
        login
    }
    
}