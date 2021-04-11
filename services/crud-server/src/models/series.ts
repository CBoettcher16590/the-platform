import DatabaseCONNECTION from '../classes/index'
import { PasswordModel } from "./password";

interface ISeries {
    series_id:string,
    series_title:string,
    series_image:string,
    series_description:string,
    series_owner_id:string
}

interface ISubmittedSeries {
    title:string,
    imageLink:string,
    contents:string,
    userId:string
}


export  const SeriesModel = {

    getAll: async ():Promise<ISeries[]>  => {

        return new Promise((resolve,reject)=>{

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            pool.getConnection(function(err:any, connection:any){
                if(err) throw err; // not connected

                const sql = `SELECT * FROM theplatformV2.series`;
                connection.query(sql, function (error:any, results:ISeries[]) {
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
 create: async (seriesToCreate:ISubmittedSeries):Promise<ISeries[]>  => {

    return new Promise((resolve,reject)=>{

        const dbConnection = new DatabaseCONNECTION();
        const pool = dbConnection.connection;

        pool.getConnection(function(err:any, connection:any){
            if(err) throw err; // not connected

            const sql = `INSERT INTO series(series_title, series_image, series_description, series_owner_id)
            VALUES("${seriesToCreate.title}", "${seriesToCreate.imageLink}", "${seriesToCreate.contents}", "${seriesToCreate.userId}");`;
            
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
