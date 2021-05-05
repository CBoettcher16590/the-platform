import { rejects } from 'assert'
import { resolve } from 'path'
import DatabaseCONNECTION from '../classes'
import { IUser } from './user'

export const InfoModel = {

    getById: async (userId:number):Promise<IUser> => {

        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
                
                var sql = `SELECT * FROM user WHERE user_id = '${userId}'`;
                connection.query(sql, function (error:any, results:IUser[]){
                    connection.release();

                    if(error){
                        reject(error)
                    } else {
                        resolve(results[0]);
                    }
                });
            });
        });       
    },


approveUpdate: async (user: IUser) => {

        return new Promise((resolve, reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            pool.getConnection(function (err: any, connection: any) {
                if (err) throw err;

                var sql = `UPDATE user SET disable_login = 1 WHERE user_id = ${user.user_id};`;

                connection.query(sql, function (error: any, results: IUser[]) {
                    connection.release();

                    if (error) {
                        reject(error)
                    } else {
                        resolve(results[0]);
                    }
                });
            });
        });
    },

    rejectUpdate: async (user: IUser) => {
        return new Promise((resolve, reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            pool.getConnection(function (err: any, connection: any) {
                if (err) throw err;

                var sql = `UPDATE user SET disable_login = 0 WHERE user_id = ${user.user_id};`;

                connection.query(sql, function (error: any, results: IUser[]) {
                    connection.release();
                    if (error) {
                        reject(error)
                    } else {
                        resolve(results[0]);
                    }
                });
            });
        });
    },
}
