import { InfoModel } from "../../../models/editUser";



export function patch(app:any){

    app.patch('/user', async(request:any, response:any) => {

        const patchCode = request.headers.code;

    console.log(patchCode);

    })

};
  