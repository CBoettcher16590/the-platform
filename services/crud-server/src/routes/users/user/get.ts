//get specific user on loading member page. 
    //variable get tailored to specific user. Likely from local storage. Unsure how to extract.
    //there are functions to search the local storage with.
    //I can use the user post here. 

    //model should be unecessary to query database? it might not be.
    //Then return into the form... response. blah blah blah blah.
    //all fields.

//in total commands.

//something in the api (probably.)



import {UserModel} from '../../../models/user';

//it's exporting function get, which has an app.get {it's a fat stack of complexities at the end of the day}
//it is a necessary evil.
export function get (app:any){
    //Here We will be able to get a specific user for logging into thePlatform
    app.get("/user", async (request:any, response:any) => {
        const userEmail = request.body.email;
        const user = await UserModel.grabUser(userEmail);

        response.status(200).send(user[0]);
    })
}

//these are just end points I keep forgetting the names don't really matter.
//the targetting happens in the model of the database.