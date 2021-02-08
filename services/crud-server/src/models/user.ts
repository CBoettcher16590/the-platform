import { resolve } from "path";
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

interface IUserSignup {
    fName?:string,
    lName?:string,
    email?:string,
    password?:string
}

var mysql = require('mysql');
export var connection = mysql.createConnection({
     host     : 'db-stargazer.cd4ztxxcuiwb.us-east-1.rds.amazonaws.com',
     user     : 'admin',
     password : 'stargazer2020',
    database : 'theplatformV2'
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

getByEmail: async (userEmail:string):Promise<IUser[]> => {
       
    return new Promise((resolve,reject) => {

        var sql = `SELECT * FROM theplatformV2.user WHERE email = "${userEmail}"`;

        connection.query(sql , function (error:any, results:IUser[]) {
            if(error){
                console.log("Error:", error);
                reject(error);
            } else {
                 resolve(results);
            }              
        }); 
    });
},


// getByEmailTest: async (userEmail: any):Promise<IUser[]>  => {
    
//     return new Promise((resolve,reject) => {

//         connection.connect(function (err:any){

//             if(err) throw err;
                        
                        
//             const sql = (`SELECT * FROM theplatformV2.user WHERE email = "${userEmail}"`);

//             connection.query(sql , function (error:any, results:IUser[]) {
//                 if(error){
//                     reject(error);
//                 } else {
//                     resolve(results)
//                     console.log(`${results}`, "are we even getting anything for results")
//                 }
//             }, connection.close);
//         });
           
//     });
// },



createUser: async (user:IUserSignup):Promise<IUserSignup> => {
    
    return new Promise((resolve,reject) => {
            const hashedPassword:string = PasswordModel.hash(user.password);
            
            var sql = `INSERT INTO user (user_type_type_id, first_name, last_name, email, password, date_created)
                        VALUES (${4}, "${user.fName}", "${user.lName}", "${user.email}", "${hashedPassword}", curdate());`;
            
                        
            connection.query(sql , function (error:any, results:IUserSignup) {
                if(error){
                    console.log("Error:", error);
                    reject(error);
                } else {
                    resolve(results);
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