import { TokenModel } from '../../models/token';
import { PasswordModel } from '../../models/password';
import { UserModel, IUser } from '../../models/user';

export  function post(app:any){

app.post('/tokens', async (request:any, response:any) => {

    const email = request.body.email;
    
    //Here we hash the password coming in to see if it matches the hased password in the system
    const password =  PasswordModel.hash(request.body.password);

    const foundUser:IUser[] = await UserModel.getByEmail(email);
    const foundUserString = foundUser[0]; //alright, now getting raw datapacket  // can use foundUserString.email ect for values


    //the below is vital to proper funs.
    if(!foundUserString){
        response.status(404).send({ //current none functional because works (skip)
            message: `Cannot find user with email: ${email}`
        });
        return;
    }


    if( !(password === foundUserString.password) ){ 
        
        response.status(401).send({
            message: `Incorrect Password for user with email ${email}`
        });
         //okay so this works.
        return;
    } 
    response.status(201).send({
        token: TokenModel.generateAccessToken({
            email: foundUserString.email
        })
    });
});

}