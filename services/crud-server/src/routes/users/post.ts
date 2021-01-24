import { IUser, UserModel } from '../../models/user';


export function post( app:any ){

    app.post("/users" , async ( request:any, response:any ) => {

        // read payload from post body
        const payload:IUser = request.body;

        UserModel.createUser(payload);

        // send successful response
        response.status(200).send();

    });

}