import { TokenModel } from '../../models/token';
import { PasswordModel } from '../../models/password';
import { UserModel, IUser } from '../../models/user';

export  function post(app:any){

app.post('/tokens', async (request:any, response:any) => {

    const email = request.body.email;
    const password = request.body.password;

    console.log("tokens-POST: ",email, password);
    //the above does happen

    const foundUser:IUser[] = await UserModel.getByEmail(email);
    const foundUserString = foundUser[0]; //alright, now getting raw datapacket
        console.log(foundUserString); 


    //the below is vital to proper funs.
    if(!foundUserString){
        response.status(404).send({ //current none functional because works (skip)
            message: `Cannot find user with email: ${email}`
        });
        return;
    }

    const hashedPassword = PasswordModel.hash(`${password}`);
    console.log(`${hashedPassword} THIS IS THE HASH!`)

    if(!(hashedPassword === PasswordModel.hash(password) ) ){ 
        
        response.status(401).send({
            message: `Incorrect Password for user with email ${email}`
        });
         //okay so this works.
        return;
    } 
    response.status(201).send({
        token: TokenModel.generateAccessToken({
            email
        })
    });
});

}