import { IUser, UserModel} from '../../models/user';


export function patch(app:any){

    app.patch('/users', async(request:any, response:any) => {

    console.log("userPatch: as dis_login comes in", request.body.disable_login);
    //These two if statements will change the diable login to its opposite

    //if req.disable_login is a 0, patched user needs to be changed to 0 
    if(request.body.disable_login === 0){
        UserModel.enableLogin(request.body);

    }
    //if req.disable_login is a 1, patched user needs to be changed to 1
    if(request.body.disable_login === 1){
        UserModel.disableLogin(request.body);
    }

    });

}


