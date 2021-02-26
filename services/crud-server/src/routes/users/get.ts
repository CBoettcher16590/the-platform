import { authenticateToken } from '../../middleware/authenticator';
import { IUser, UserModel } from '../../models/user';
import {userProfile} from '../../models/editmember'

export function get( app:any ){

    app.get("/users", async ( request:any, response:any ) => {

        const userList:IUser[] = await UserModel.getAll();
        response.status(200).send(userList);

    });

}


