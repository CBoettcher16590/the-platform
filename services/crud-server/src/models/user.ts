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
    disable_login:number,
    phoneNumber: Date,
    userDB: Date, 
    user_image_link:string,
    bio:string,
    subscription:number,
    sub_end_date:string
    
}

interface IUserSignup {
    first_name:string,
    last_name:string,
    email:string,
    password:string
}

interface IUserUpdate{
    imageLink:string,
    email:string,
    phone:string,
    birthdate:string,
    bio:string,
    userID:string,
    password:string
}

export  const UserModel = {

    getAll: async ():Promise<IUser[]>  => {

        return new Promise((resolve,reject)=>{

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

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
        const pool = dbConnection.connection;
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
getByID: async (userID:string|number):Promise<IUser[]> => {
       
    return new Promise((resolve,reject) => {

        const dbConnection = new DatabaseCONNECTION();
        const pool = dbConnection.connection;
        var sql = `SELECT * FROM theplatformV2.user WHERE user_id = "${userID}"`;

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
            const defaultImg = "https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg?w=415";
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            var sql = `INSERT INTO user (user_type_type_id, first_name, last_name, email, password, date_created, user_image_link, subscription)
                        VALUES (${4}, "${user.first_name!}", "${user.last_name!}", "${user.email!}", "${hashedPassword!}", curdate(), "${defaultImg}", 0);`;

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

    editUserProfile: async (userInfo:IUserUpdate) => { 
    
        return new Promise((resolve,reject) => {
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            //build parameters for sql query.
            var sqlParameters:string ="";
            //IMAGE
            if(userInfo.imageLink){
                sqlParameters += `user_image_link='${userInfo.imageLink}',`;
            }
            //EMAIL
            if(userInfo.email){
                sqlParameters += `email='${userInfo.email}',`;
            }
            //PHONE
            if(userInfo.phone){
                sqlParameters += `phone_number='${userInfo.phone}',`;
            }
            //BIRTHDATE
            if(userInfo.birthdate){
                sqlParameters += `user_BD ='${userInfo.birthdate}',`;
            }
            //BIO
            if(userInfo.bio){
                sqlParameters += `bio='${userInfo.bio}',`;
            }
             //Password
            if(userInfo.password){
                const hashedPass:string = PasswordModel.hash(userInfo.password);
                sqlParameters += `password='${hashedPass}',`;
            }

            var sql = `UPDATE user SET ${sqlParameters.slice(0, -1)} WHERE user_id=${userInfo.userID};`
        
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err; // not connected
                connection.query(sql, function (error:any, results:any) {
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
   
}
