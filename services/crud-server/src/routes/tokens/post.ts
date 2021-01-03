import { TokenModel } from '../../models/token';
import { PasswordModel } from '../../models/password';
import { MemberModel } from '../../models/members';

export  function post(app:any){

app.post('/tokens', async (request:any, response:any) => {
    const email = request.body.email;
    const password = request.body.password;

    const foundUser = await MemberModel.getByEmail(email);
    const foundUserString = JSON.parse(JSON.stringify(foundUser));

    if(!foundUser){
        response.status(404).send({
            message: `Cannot find user with email: ${email}`
        });
        return;
    }
    const hashedPassword = PasswordModel.hash(`${password}`);

    if(!(hashedPassword === foundUserString.password)){
        response.status(401).send({
            message: `Incorrect Password for user with email ${email}`
        });
        return;
    }
    response.status(201).send({
        token: TokenModel.generateAccessToken({
            email,
            fullName: foundUser.Fname + " " + foundUser.Lname
        })
    });
});

}