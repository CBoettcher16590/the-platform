import { authenticateToken } from '../../middleware/authenticator';
import { UserModel } from '../../models/user';

export function get( app:any ){

    app.get("/users", authenticateToken, ( request:any, response:any ) => {

        const users = UserModel.getAll();
        response.status(200).send(users);

    });

}