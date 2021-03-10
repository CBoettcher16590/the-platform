import { IUser, UserModel } from "../../models/user";

export function get( app:any ){

    app.get("/users/:userid", async ( request:any, response:any ) => {

        const userID = request.params.userid;
        const foundUser = await UserModel.getByID(userID);
        console.log(foundUser, "founduser");
        response.status(200).send(foundUser);

    });

}


