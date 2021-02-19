import { TokenModel } from '../../models/token';
import { PasswordModel } from '../../models/password';
import { UserModel, IUser } from '../../models/user';

interface ITokenPostRequest{
    _email: string;
    _password: string;
}

export function post(app:any){

app.post('/tokens', async (request:any, response:any) => {

    const payload:ITokenPostRequest = request.body;

    const email = payload._email;
    //Here we hash the password coming in to see if it matches the hased password in the system
    const password =  PasswordModel.hash(payload._password);

    const foundUser:IUser[] = await UserModel.getByEmail(email);

    //foundUser[0] IS a row data packet, I used JSON parse and stringift to make into a more usable object
    const foundUserString:IUser = JSON.parse(JSON.stringify(foundUser[0]));
   

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