import { IUser, UserModel } from '../../models/user';
import { PasswordModel } from '../../models/password'


export function post(app: any) {

    app.post("/orgs", async (request: any, response: any) => {

        // read payload from post body
        const payload: IUser = request.body;

        const newOrg = await UserModel.createOrg(payload);

        console.log(newOrg);

        // send successful response
        response.status(200).send(newOrg);

    });

}