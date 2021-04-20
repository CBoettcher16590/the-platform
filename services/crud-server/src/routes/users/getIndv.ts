import { IUser, UserModel } from "../../models/user";

export function getIndv( app:any ){

    app.get("/users/:userid", async ( request:any, response:any ) => {

        const userID = request.params.userid;
    
        const foundUser = await UserModel.getByID(userID);

        response.status(200).send(foundUser);

    });

}


