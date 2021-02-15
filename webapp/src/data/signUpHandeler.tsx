import api from '../api';


export default function signUpHandeler(){   
    
    function _SignUp( fName:string, lName:string, email:string, password:string){
        console.log("SignInHandeler Before api.users: ", fName, lName, email, password)

       api.users.post({fName, lName, email, password }).then(responce => {
           console.log("SignInHandeler After api.users : ", fName, lName, email, password)
       });
    }

    return {
        _SignUp
    }
    
}