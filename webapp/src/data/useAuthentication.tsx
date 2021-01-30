import { useHistory } from 'react-router';
import { PasswordModel } from '../../../services/crud-server/src/models/password';
import api from '../api';

export default function useAuthentication(){

    const history = useHistory();    
    
    function login( email:string, password:string ){
            api.tokens.post({ email, password }).then(response => {
            history.push('/');
            console.log("Logged In");
        });
    }

    return {
        login
    }
    
}