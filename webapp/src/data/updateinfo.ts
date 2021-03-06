import api from '../api';


export default function updateHandeler(){   
    
    function _Update( fName:string, lName:string, email:string, phoneNumber:number, bio: string, user_BD:string, imgLinke: string ){
        console.log("hi");
       api.signup.post({fName, lName, email, phoneNumber, bio, user_BD, imgLinke }).then(responce => {
       });
    }

    return {
        _Update
    }
    
}