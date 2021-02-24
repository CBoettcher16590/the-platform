import { response } from 'express';
import DatabaseCONNECTION from '../classes/index'
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

export  const UserModel = {

    getAll: async ():Promise<IUser[]>  => {

        return new Promise((resolve,reject)=>{

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection();

            pool.getConnection(function(err:any, connection:any){
                if(err) throw err; // not connected

                const sql = `SELECT * FROM theplatformV2.user`;
                connection.query(sql, function (error:any, results:IUser[]) {
                    connection.release();

                    if(error){
                        reject(error);
                    } else{
                        resolve(results)
                    }
                });
            });
        });          
    
 },


getByEmail: async (userEmail:string):Promise<IUser[]> => {
       
    return new Promise((resolve,reject) => {

        const dbConnection = new DatabaseCONNECTION();
        const pool = dbConnection.connection();
        var sql = `SELECT * FROM theplatformV2.user WHERE email = "${userEmail}"`;

        pool.getConnection(function(err:any, connection:any){
            if(err) throw err; // not connected

            connection.query(sql, function (error:any, results:IUser[]) {
                connection.release();

                if(error){
                    reject(error);
                } else{
                    resolve(results)
                }
            });
        });
    });
},


createUser: async (user:IUserSignup):Promise<IUserSignup> => {
    
    return new Promise((resolve,reject) => {
            const hashedPassword:string = PasswordModel.hash(user.password);
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection();

            var sql = `INSERT INTO user (user_type_type_id, first_name, last_name, email, password, date_created)
                        VALUES (${4}, "${user.first_name!}", "${user.last_name!}", "${user.email!}", "${hashedPassword!}", curdate());`;
            
                 pool.getConnection(function(err:any, connection:any){
                    if(err) throw err; // not connected
                        connection.query(sql, function (error:any, results:IUser[]) {
                            connection.release();
                                if(error){
                                    reject(error);
                                } else{
                                    resolve(results[0])
                                }
                            });
                        });
            });
    },

    disableLogin: async (user:IUser) => {
       
        return new Promise((resolve,reject) => {
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection();

            console.log("DISABLE: ", user.user_id);

            var sql = `UPDATE user SET disable_login = "${1}" WHERE user_id="${user.user_id}"`;
    
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err; // not connected
                connection.query(sql, function (error:any, results:IUser[]) {
                    connection.release();

                    if(error){
                        reject(error);
                    } else{
                        resolve(results[0])
                    }
                });         
            });
        });
    },

    
    enableLogin: async (user:IUser) => {
    
        return new Promise((resolve,reject) => {
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection();

            console.log("ENABLE: ", user.user_id);

            var sql = `UPDATE user SET disable_login = "${0}" WHERE user_id= "${user.user_id}"`;
    
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err; // not connected

                connection.query(sql, function (error:any, results:IUser[]) {
                    connection.release();

                    if(error){
                        reject(error);
                    } else{
                        resolve(results[0])
                    }
                });
            });
        });
    },  
}
