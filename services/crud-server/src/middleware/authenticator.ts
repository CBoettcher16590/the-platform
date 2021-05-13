import { TokenModel } from '../models/token';

    export function authenticateToken( request:any, response:any, next:()=>any ){
    
    const authHeader = request.headers['authorization'];
    
    if(!authHeader){
        response.status(401).send({
            message: "This is a protected resource. Please login first."
          });
        return;
    }
    
    const token = authHeader.split(" ").pop();
    TokenModel.validateToken( token, (err)=>{ 
    
    if(err){
        return response.status(401).send('<script>alert("Username and Password Combination do not match")</script>');
    }

}, (payload)=>{

     next();

 });

}