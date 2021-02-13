import { resolve } from "path";
import { IsignUp } from "../interfaces";
import { PasswordModel } from "./password";

export interface IUser {
    user_id:number,
    user_type_type_id:number,
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    date_created:string,
    disable_login:number
}

interface IUserSignup {
    first_name:string,
    last_name:string,
    email:string,
    password:string
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

createUser: async (user:IUserSignup):Promise<IUserSignup> => {
    
    return new Promise((resolve,reject) => {
            const hashedPassword:string = PasswordModel.hash(user.password);
            
            var sql = `INSERT INTO user (user_type_type_id, first_name, last_name, email, password, date_created)
                        VALUES (${4}, "${user.first_name!}", "${user.last_name!}", "${user.email!}", "${hashedPassword!}", curdate());`;
            
            console.log(user)     
            connection.query(sql , function (error:any, results:IUserSignup) {
                if(error){
                    console.log("Error:", error);
                    reject(error);
                } else {
                    resolve(results);
                }
                    
            }); 

        });
    },
    disableLogin: async (user:IUser) => {
       
        return new Promise((resolve,reject) => {
    
            console.log("DISABLE: ", user.user_id);

            var sql = `UPDATE user SET disable_login = "${1}" WHERE user_id="${user.user_id}"`;
    
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
    enableLogin: async (user:IUser) => {
    
        return new Promise((resolve,reject) => {

            console.log("ENABLE: ", user.user_id);

            var sql = `UPDATE user SET disable_login = "${0}" WHERE user_id= "${user.user_id}"`;
    
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
}
