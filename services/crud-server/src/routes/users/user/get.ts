import {UserModel} from '../../../models/user';

export function get (app:any){
    //Here We will be able to get a specific user for logging into thePlatform
    app.get("/user", async (request:any, response:any) => {
        const userEmail = request.body.userEmail;
        const user = await UserModel.getByEmail(userEmail);

        response.status(200).send(user);
    })
}