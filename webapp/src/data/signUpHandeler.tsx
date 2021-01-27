import api from '../api';


export default function signUpHandeler(){   
    
    function _SignUp( fName:string, lName:string, email:string, password:string){
       api.signup.post({fName, lName, email, password }).then(responce => {
       });
    }

    return {
        _SignUp
    }
    
}