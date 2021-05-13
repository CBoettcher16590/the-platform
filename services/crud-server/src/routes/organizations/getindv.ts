import { UserModel } from "../../models/user";

export function getIndv( app:any ){

    app.get("/orgs/:userid", async ( request:any, response:any ) => {

        const userID = request.params.userid;
    
        const foundOrg = await UserModel.getByID(userID);

        response.status(200).send(foundOrg);

    });

}