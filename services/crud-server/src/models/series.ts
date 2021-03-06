import DatabaseCONNECTION from '../classes/index'
import { ArticleModel } from './article';
import { PasswordModel } from "./password";

export interface ISeries {
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
 getById: async (id:number):Promise<ISeries[]>  => {

    return new Promise((resolve,reject)=>{

        const dbConnection = new DatabaseCONNECTION();
        const pool = dbConnection.connection;

        pool.getConnection(function(err:any, connection:any){
            if(err) throw err; // not connected

            const sql = `SELECT * FROM theplatformV2.series WHERE series_id="${id}";`;
            connection.query(sql, function (error:any, results:ISeries[]) {
                connection.release();
                if(error){
                    reject(error);
                } else{
                    resolve(results);
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
addArticle: async (seriesID:string, articleID:string):Promise<ISeries[]>  => {

    //CHECK TO SEE IF ARTICLE ALREADY HAS SERIES
    let articleHasSeries = false;

    await ArticleModel.getById(parseInt(articleID)).then((responce) => {
        if(responce.series_series_id){
            let articleHasSeries = true;
        }
    });

    return new Promise((resolve,reject)=>{

        const dbConnection = new DatabaseCONNECTION();
        const pool = dbConnection.connection;

        if(!articleHasSeries){
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err; // not connected
                //FIRST SQL STATEMENT ADDS TO THE series_has_article Table to establish a relationship
                const sql1 = `INSERT INTO series_has_article VALUES("${articleID}", "${seriesID}");`;
                //SECOND SQL STATEMENT updates the article data to include new series
                const sql2 = `UPDATE article SET series_series_id = "${seriesID}" WHERE article_id = "${articleID}";`
                console.log(sql1,"SQL")
                connection.query(sql1, function (error:any, results:any) {
    
                    if(error){
                        reject(error);
                    } else{
                        resolve(results)
                    }
                });
                connection.query(sql2, function (error:any, results:any) {
                    connection.release();
    
                    if(error){
                        reject(error);
                    } else{
                        resolve(results)
                    }
                });
            });
        } else{
            console.error("This article already belongs to a series");
        }

    });          

},



}
