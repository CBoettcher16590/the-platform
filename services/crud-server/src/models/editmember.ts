import { resolve } from "path";
import DatabaseCONNECTION from '../classes/index'
import { IUser } from "./user";


export  const UserProfile = {




    EditProfile: async (user:IUser) => {
    
        return new Promise((resolve,reject) => {
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection();

            console.log("ENABLE: ", user.user_id);

            var sql = `UPDATE theplatformV2.user ;
                
            SET first_name = ${user.first_name}, last_name = ${user.last_name}, email = ${user.email}, bio = ${user.bio}, 
            user_image_link = ${user.imgLink}, user_BD = ${user.userDB}, phone_number = ${user.phoneNumber} WHERE user_id = ${user.user_id}`;
    
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
};