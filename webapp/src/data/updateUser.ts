import api from '../api';


export default function updateUserInfo(imageLink:string, email:string, phone:string, birthdate:string, bio:string, userID:string):void{   
        
       api.users.updateUser({imageLink, email, phone, birthdate, bio, userID}).then(responce => {
           
    });
    
} 