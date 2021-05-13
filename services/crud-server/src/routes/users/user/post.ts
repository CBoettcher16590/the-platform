import { authenticateToken } from '../../../middleware/authenticator';
import { PasswordModel } from '../../../models/password';
import {IUser, UserModel} from '../../../models/user';

export function post (app:any){
    //Here We will be able to get a specific user for logging into thePlatform
    app.post("/user", async (request:any, response:any) => {
        const userEmail = request.body.email;
        const user:IUser[] = await UserModel.getByEmail(userEmail);
        const hashedPass = PasswordModel.hash(request.body.password);

        if(user[0].password == hashedPass){
            console.log("crudside login, user password matches");
           return response.status(200).send(user[0]); 
        } else{
            response.status(404).send("Incorrect Password or Email");
        }
    })
} 