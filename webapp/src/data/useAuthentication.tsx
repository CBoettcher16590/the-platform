import { useHistory } from 'react-router';
import api from '../api';


export function useAuthentication(){

    const history = useHistory();    
    
    function login( email:string, password:string ){
        api.tokens.post({ email, password }).then(response => {
            history.push('/');
        });
    }

    return {
        login
    }
    
}