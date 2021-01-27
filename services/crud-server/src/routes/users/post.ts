import { IUser, UserModel } from '../../models/user';
import {PasswordModel} from '../../models/password'


export function post( app:any ){

    app.post("/users" , async ( request:any, response:any ) => {

        // read payload from post body
        const payload:IUser = request.body;

        payload.password = PasswordModel.hash(payload.password);

        UserModel.createUser(payload);


        // send successful response
        response.status(200).send();

    });

}