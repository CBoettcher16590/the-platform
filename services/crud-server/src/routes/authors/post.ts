
import { isBuffer } from 'util';
import {authenticateToken} from '../../middleware/authenticator';
import {AuthorModel } from '../../models/authors';
import { PasswordModel } from '../../models/password';
import { IUser, IUserUpdate } from '../../models/user';

export function post( app:any ){

    app.post("/authors", async (request:any, response:any) => {
        const userEmail:IUser = request.body.id;
        const user = await AuthorModel.getById(userEmail.user_id);

            response.status(404).send(user);
        
    })
 
} 