import { IUser, UserModel } from '../../models/user';

enum PatchType {
    Update = "Update",
    LoginPermission = "LoginPermission"
}

export function patch(app: any) {

    app.patch('/users', async (request: any, response: any) => {
        const headerCode = request.headers.code;

        switch (headerCode) {
            case PatchType.Update: {
                UserModel.editUserProfile(request.body);
                break;
            }

            case PatchType.LoginPermission: {
                //if req.disable_login is a 0, patched user needs to be changed to 0 
                if (request.body.disable_login === 0) {
                    UserModel.enableLogin(request.body);
                }
                //if req.disable_login is a 1, patched user needs to be changed to 1
                if (request.body.disable_login === 1) {
                    UserModel.disableLogin(request.body);
                }
                break;
            }

            default: {
                console.error("No Patch code by that Name");
                break;
            }

        }

    });

}


