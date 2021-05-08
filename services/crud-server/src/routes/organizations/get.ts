import { authenticateToken } from '../../middleware/authenticator';
import { IUser, UserModel } from '../../models/user';

export function get( app:any ){

    app.get("/orgs", async ( request:any, response:any ) => {

        const orgList:IUser[] = await UserModel.getAll();
        response.status(200).send(orgList);

    });

}