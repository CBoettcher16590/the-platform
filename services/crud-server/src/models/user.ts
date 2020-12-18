import fs from 'fs';

// read user
const path = `${__dirname}/../data`;
const file = `${path}/users.json`;

if(!fs.existsSync(path)){
    fs.mkdirSync(path);
}

if(!fs.existsSync(file)){
    fs.writeFileSync(file, JSON.stringify([]), { encoding: 'utf-8' });
}

export interface IUser {
    firstName:string;
    lastName:string;
    phoneNumber:string;
    email: string;
    password: string;

}


export const UserModel = {

    getAll: ():IUser[] => {
        const users = JSON.parse(fs.readFileSync(file, { encoding: 'utf-8' }));
        console.log('UserModel.getAll', users);
        return users;
    },
    setAll: ( users:IUser[] ) => {
        fs.writeFileSync(file, JSON.stringify(users, null, 4), { encoding: 'utf-8' });
    },

    getByEmail: ( email:string ): IUser|undefined => {

        return UserModel.getAll().find( user => {
            console.log(user, email);
            return user.email === email;
        });

    }

}