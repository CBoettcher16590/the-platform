import { TokenModel } from '../models/token';

    export function authenticateToken( request:any, response:any, next:()=>any ){
    
    const userToken = window.localStorage.getItem("token");
    console.log(userToken, "  AUTHE  ")
    
    
    if(!userToken){
        response.status(401).send({
            message: "This is a protected resource. Please login first.<if(!authHeader)>"
          });
        return;
    }
    
    TokenModel.validateToken( userToken, (err)=>{ 
    
    response.status(401).send({
    message: "This is a protected resource. Please login first.<TokenModel.Validate>"
});

}, (payload)=>{

     next();

 });

}