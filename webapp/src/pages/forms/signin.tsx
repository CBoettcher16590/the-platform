import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
// import { useAuthentication } from '../../data/useAuthentication';
import LoginForm from '../../components/LoginForm'



export default function Login() {

    return <>
    <MainLayout>

      <LoginForm/>
        
    </MainLayout>
            
       </>
    }

//This maybe bad code (but maybe a start)
// function SignInDirect(_logInID: any){
//   const [author, editor ] = useState(null);
  
//   useEffect(() => {
//     function logInStatus(status){
//       directUser(status.logIn);
//     }
// UserDirectAPI.logInHomepage(id,directProfile);
// return () =>{

// };


//   });
//   return EditorProfile;
// }