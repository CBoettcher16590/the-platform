import { TokenModel } from '../models/token';

    export function authenticateToken( request:any, response:any, next:()=>any ){
    
    //assign the token saved in headers to authHeader
    const authHeader = request.headers['authorization'];
    
    //if there is no authHeader then we return a 401 Unauthorized status along with a message. 
    if(!authHeader){
        response.status(401).send({
            message: "This is a protected resource. Please login first."
          });
        return;
    }
    
    //     We save this token as a bearer token, so we split the string at the space, 
    //     and the pop(take the last element, or the token in this case)
    const token = authHeader.split(" ").pop();

    
    TokenModel.validateToken( token, (err)=>{ 
    //If there is an error with the token validation we throw a 401, otherwise we allow 
    if(err){
        return response.status(401).send('Username and Password Combination do not match');
    }

}, (payload)=>{

     next();

 });

}