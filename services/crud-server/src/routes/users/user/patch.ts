//patch down stream of the form/api/patch/model/database => return refresh


import {UserModel} from '../../../models/user';

export function patch (app:any){
    //Here We will be able to get a specific user for logging into thePlatform
    app.patch("/user", async (request:any, response:any) => {
        //userEmail extracted windows.localsessionstorage.email
        //user email has to come from that.
        // window.localStorage.getItem(data.email);
        const userEmail = request.body.email;
        const user = await UserModel.modifyUser(userEmail);

        response.status(200).send(user[0]);
    })
}

//these are just end points I keep forgetting the names don't really matter.
//the targetting happens in the model of the database.