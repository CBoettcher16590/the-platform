import { InfoModel } from "../../../models/editUser";



// export function patch(app:any){

//     app.patch('/user', async(request:any, response:any) => {

//         const patchCode = request.headers.code;

//     console.log(patchCode);

//     })

// };
  
enum UserCode{
    Approval = "Update"
} 
 
export function patch(app:any){

    app.patch('/MEMupdateMyInfo', async(request:any, response:any) => {
        //First we get our Patch Code, and Found Article.  PatchCode is sent in under code in the headers in the api
        const foundUser = await InfoModel.getById(request.body.user_id);
        const patchCode = request.headers.code;
        console.log(patchCode)

        //Then Depending on the PatchCode we select the task to be completed
        switch(patchCode){

            case UserCode.Approval: {
                console.log("switch, Approval")

                if(request.body.disable_login === 0){
                    InfoModel.rejectUpdate(foundUser);
                }

                if(request.body.disable_login === 1){
                    InfoModel.update(foundUser);
                }

                break;
            }
            default: 
                console.error("Something went wrong!");
                break;
        }
    });

}
