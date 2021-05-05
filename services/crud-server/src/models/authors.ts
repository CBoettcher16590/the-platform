import DatabaseCONNECTION from '../classes/index';
import {IUser} from './user';

export const AuthorModel = {
    getById: async (userTypeId:number):Promise<IUser> => {

        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
                
                var sql = `SELECT * FROM user WHERE user_type_type_id = ${userTypeId}`;
                connection.query(sql, function (error:any, results:IUser[]){
                    connection.release();
                    console.log("SQL",sql);
                    if(error){
                        reject(error)
                    } else {
                        resolve(results[0]);
                    }
                });
            });
        });       
    }, 

    
    disableLogin: async (user:IUser) => {
       

        return new Promise((resolve,reject) => {
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            var sql = `UPDATE user SET disable_login = "${1}" WHERE user_id="${user.user_id}";`;
    
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
            const pool = dbConnection.connection;

            var sql = `UPDATE user SET disable_login = "${0}" WHERE user_id= "${user.user_id}";`;
    
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

    EditUserType: async (userType:IUser):Promise<IUser> =>{

        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;

            var sql = `UPDATE user SET user_type_type_id = 6 Where user_id = ${userType.user_id}`

            connection.query(sql, function (error:any, results:IUser[]){
                connection.release();
                console.log("SQL",sql);
                if(error){
                    reject(error)
                } else {
                    resolve(results[0]);
                }
            });
        });
    });       
},
}

