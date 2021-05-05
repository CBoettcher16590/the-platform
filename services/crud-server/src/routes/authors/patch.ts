import { AuthorModel} from '../../models/authors';

enum PatchType {
    Update = "Update",
    LoginPermission ="LoginPermission"
}

export function patch(app:any){

    app.patch('/authors', async(request:any, response:any) => {
    const headerCode = request.headers.code;

    switch(headerCode){
        case PatchType.Update:{
            AuthorModel.EditUserType(request.body);
             break;
        }
        
        case PatchType.LoginPermission:{
// 
            if(request.body.disable_login === 0){
                AuthorModel.enableLogin(request.body);
            }
            if(request.body.disable_login === 1){
                AuthorModel.disableLogin(request.body);
            }
             break;
        }
        
       default:{
           console.error("No Patch code by that Name");
        break;
        } 
           
    }

    });

}