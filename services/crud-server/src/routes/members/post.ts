  
import { authenticateToken } from '../../middleware/authenticator';
import {MemberModel} from '../../models/members'
import { PasswordModel } from '../../models/password';
import { IsignUp } from "../../interfaces";

export function post( app:any ){

    app.post("/signup", ( request:any, response:any ) => {
        // read payload from post body
        const payload:IsignUp = request.body;

        // hash password so we don't know what it is
        payload.password = PasswordModel.hash(payload.password);

        const newUser = MemberModel.create(payload);

        // send successful response
        response.status(201).send(newUser);

    });

}