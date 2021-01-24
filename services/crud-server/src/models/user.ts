import { IsignUp } from "../interfaces";
import { PasswordModel } from "./password";

export interface IUser {
    userId:number,
    userType:number,
    fName:string,
    lName:string,
    email:string,
    password:string,
    dateCreated:string,
    orgId:number,
    disableLogin:number
}

var mysql = require('mysql');
export var connection = mysql.createConnection({
     host     : 'db-stargazer.cd4ztxxcuiwb.us-east-1.rds.amazonaws.com',
     user     : 'admin',
     password : 'stargazer2020',
    database : 'theplatform'
});

export  const UserModel = {

    getAll: async ():Promise<IUser[]>  => {

        return new Promise((resolve,reject)=>{
           
            connection.query(`SELECT * FROM theplatformV2.user`, function (error:any, results:IUser[]) {
                if(error){
                    reject(error);
                } else {
                    resolve(results)
                }

            });
        });          
    
 },
 getByEmail: async (userEmail:number):Promise<IUser[]>  => {

    return new Promise((resolve,reject)=>{

       
        connection.query(`SELECT * FROM theplatformV2.user WHERE email = ${userEmail}`, function (error:any, results:IUser[]) {
            if(error){
                reject(error);
            } else {
                resolve(results)
            }

        });
    });          

},

createUser: async (user:IUser) => {
    
    const hashedPassword = PasswordModel.hash(user.password);

    connection.query(`INSERT INTO theplatformV2.user VALUES (user_id, ${4}, ${user.fName}, ${user.lName}, ${user.email}, ${hashedPassword}, CURDATE(), ${1}, diable_login )`
        , function (error:any, results:IUser) {
        if(error){
            console.log(error);
        } else {
            return results;
        }

    });      
}








//     getAll: ():IsignUp => {
//     connection.connect();
    
//         const query = connection.query('SELECT * FROM member', function (error:any, results:any, fields:any) {
//             if (error) throw error;
//             return results;
//         });
//     connection.end();
//     const stringQuery = JSON.parse(query)
//     return stringQuery;

//  },
//  getByEmail:(user:IsignUp):IsignUp => {
//     connection.connect();
//         const userEmail = JSON.stringify(user.email);
//         const foundUser = connection.query(`SELECT * FROM member WHERE email = "${userEmail}" `, function (error:any, results:any, fields:any) {
//             if (error) throw error;
//             return results;
//         });
//     connection.end();
//     return foundUser;

//  },
//  create: (newUser:IsignUp):IsignUp => {
//     connection.connect();
    
//         const CreatedMember = connection.query(`INSERT INTO member VALUES(idmember, ${newUser.Fname},${newUser.Lname},
//                 ${newUser.email},${newUser.phoneNumber},${newUser.password})`, function (error:any, results:any, fields:any) {
//             if (error) throw error;
//             return results;
//         });
//     connection.end();
    
//     return CreatedMember;
//     }

  
    // setAll: ( users:IsignUp[] ) => {
    //     fs.writeFileSync(file, JSON.stringify(users, null, 4), { encoding: 'utf-8' });
    // },

    // getByEmail: ( email:string ): IsignUp|undefined => {

    //     return MemberModel.getAll().find( user => {
    //         console.log(user, email);
    //         return user.email === email;
    //     });

    // }

}