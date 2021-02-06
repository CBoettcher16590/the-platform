import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const TokenModel = {

    generateAccessToken: ( payload:any ) => {
        const x = process.env.ACCESS_TOKEN_SECRET;
        console.log("ModelsTokens Generate Token: ", x); 
        return jwt.sign( payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '120s' }); //Made this really short just for testing purposes
    },

    validateToken: ( token:string, onError:(err:any)=>any, onSuccess:(payload:any)=>any ) => {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, ( err:any, payload:any ) => {
            
            if( err ){
                onError(err);
                return;
            }

            onSuccess(payload);

        });
    }

}