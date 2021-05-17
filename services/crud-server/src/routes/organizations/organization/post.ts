import { authenticateToken } from '../../../middleware/authenticator';
import { PasswordModel } from '../../../models/password';
import { IUser, UserModel } from '../../../models/user';

export function post(app: any) {
    //Here We will be able to get a specific user for logging into thePlatform
    app.post("/org", async (request: any, response: any) => {
        const orgEmail = request.body.email;
        const org: IUser[] = await UserModel.getByEmail(orgEmail);
        const hashedPass = PasswordModel.hash(request.body.password);

        if (org[0].password == hashedPass) {
            console.log("crudside login, user password matches");
            return response.status(200).send(org[0]);
        } else {
            response.status(404).send("Incorrect Password or Email");
        }
    })
}