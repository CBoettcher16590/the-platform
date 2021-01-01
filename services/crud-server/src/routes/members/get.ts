
import { MemberModel } from '../../models/members';
var mysql      = require('mysql');

export function get( app:any ){

    app.get("/signin",( request:any, response:any ) => {
        const users = MemberModel.getAll();
        response.status(200).send(users);
    });

}