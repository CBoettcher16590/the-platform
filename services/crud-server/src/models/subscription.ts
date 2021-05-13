import DatabaseCONNECTION from '../classes/index'
import { IUser } from './user';


export const SubscriptionModel = {

        
    editSubscriptionMonthly: async (userID:string|number):Promise<IUser[]> => {
       
        return new Promise((resolve,reject) => {
    
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            var sql = `UPDATE user SET subscription = 1, sub_end_date = ADDDATE(curdate(), INTERVAL 30 DAY) WHERE user_id = ?`;

            pool.getConnection(function(err:any, connection:any){
                if(err) throw err; // not connected
    
                connection.query(sql,[userID], function (error:any, results:IUser[]) {
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

    editSubscriptionAnnualy: async (userID:string|number):Promise<IUser[]> => {
       
        return new Promise((resolve,reject) => {
    
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            var sql = `UPDATE user SET subscription = 1, sub_end_date = ADDDATE(curdate(), INTERVAL 365 DAY) WHERE user_id = ?`;
    
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err; // not connected
    
                connection.query(sql,[userID], function (error:any, results:IUser[]) {
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

    getSubscription: async (userID:string|number):Promise<IUser[]>  => {

        return new Promise((resolve,reject)=>{

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            pool.getConnection(function(err:any, connection:any){
                if(err) throw err; // not connected

                //grabbing the whole user. For the simplicity of IUser integration.
                var sql = `SELECT  * FROM theplatformV2.user WHERE user_id = ?`;
                connection.query(sql,[userID], function (error:any, results:IUser[]) {
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