import { rejects } from 'assert';
import { resolve } from 'path';
import DatabaseCONNECTION from '../classes/index'

export interface ISeries{
    series_id:string,
    series_title:string,
    series_image:string,
    series_preview:string,
    series_description:string,
    series_admin:string,
}

interface ISeriesToCreate{
    series_title:string,
    series_image:string,
    series_description:string,
    userId:string
}


export const SerieseModel = {

    getAll: async ():Promise<ISeries[]>  => {
    
        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
                
                var sql = `SELECT * FROM theplatformV2.series`;
                connection.query(sql, function (error:any, results:ISeries[]){
                    connection.release();

                    if(error){
                        reject(error)
                    } else {
                        resolve(results)
                    }
                });
            });
        });
     },

     create: async (seriesToCreate:ISeriesToCreate):Promise<ISeries> => {
        return new Promise((resolve, reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
                var sql = `INSERT INTO series VALUES(series_id, "${seriesToCreate.series_title}", "${seriesToCreate.series_image}", "${seriesToCreate.series_description.substring(0,20)+"..."}", "${seriesToCreate.series_description}", "${seriesToCreate.userId}");`;
                connection.query(sql, function (error:any, results:ISeries){
                    connection.release();

                    if(error){
                        reject(error)
                    } else {
                        resolve(results)
                    }
                });
            });
        });
     }
    }