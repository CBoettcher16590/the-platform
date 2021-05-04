import DatabaseCONNECTION from '../classes/index'

export interface IRating{
    rating_id:number;
    article_id: number;
    user_user_id:number;
    rating:number;
}


export const RatingModel = {

    getAll: async ():Promise<IRating[]>  => {
    
        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
                
                var sql = `SELECT * FROM theplatformV2.rating`;
                connection.query(sql, function (error:any, results:IRating[]){
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
     
    create: async( RatingToCreate:IRating)=> {

        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;

                var sql = `INSERT INTO ratings (rating_id, article_id, user_id, rating)
                VALUES (rating_id, ?, ?, ?);`; 

                connection.query(sql, [RatingToCreate.article_id, RatingToCreate.user_user_id, RatingToCreate.rating], function (error:any, results:IRating){
                    connection.release();

                    if(error){
                        reject(error)
                    } else {
                        resolve(results);
                    }
                });
            });
        });       
    }
    }