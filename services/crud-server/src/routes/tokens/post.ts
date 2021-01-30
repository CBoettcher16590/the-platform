import { TokenModel } from '../../models/token';
import { PasswordModel } from '../../models/password';
import { UserModel, IUser } from '../../models/user';

export  function post(app:any){

app.post('/tokens', async (request:any, response:any) => {

    const email = request.body.email;
    const password = request.body.password;

    const foundUser:IUser[] = await UserModel.getByEmail(email);
    const foundUserString = foundUser[0];

    console.log(foundUser);

    if(!foundUserString){
        response.status(404).send({
            message: `Cannot find user with email: ${email}`
        });
        return;
    }

    const hashedPassword = PasswordModel.hash(`${password}`);

    if(!(hashedPassword === PasswordModel.hash(password) ) ){
        response.status(401).send({
            message: `Incorrect Password for user with email ${email}`
        });
        return;
    }
    response.status(201).send({
        token: TokenModel.generateAccessToken({
            email
        })
    });
});

}