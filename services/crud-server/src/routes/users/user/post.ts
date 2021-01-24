import {UserModel} from '../../../models/user';

export function post (app:any){
    app.post("/user", async (request:any, response:any) => {
        const userEmail = request.body.userEmail;
        const user = await UserModel.getByEmail(userEmail);

        response.status(200).send(user);
    })
}