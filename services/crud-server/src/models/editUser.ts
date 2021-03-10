import { rejects } from 'assert'
import { resolve } from 'path'
import DatabaseCONNECTION from '../classes'
import {IUser} from './user'


export const InfoModel = {

updat: async (user:IUser):Promise<IUser[]> => {

    return new Promise((resolve, reject) => {

        const dbConnection = new DatabaseCONNECTION();
        const pool = dbConnection.connection;

        pool.getConnection (function(err:any, connection:any){
            if (err) throw err

            const sql = `UPDATE theplatformV2.user ;
                
            SET first_name = ${user.first_name}, last_name = ${user.last_name}, email = ${user.email}, bio = ${user.bio}, 
            user_image_link = ${user.imgLink}, user_BD = ${user.userDB}, phone_number = ${user.phoneNumber} WHERE user_id = ${user.user_id}`;
            
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

}
}
 