  
import { article } from "../routes/articles";
import { IUser } from "./user";
import DatabaseCONNECTION from '../classes/index'

//right now we only have a "featured" section, but I made this an enum in case we want to expand in the future
enum FeatureTypes {
    none = "",
    featured = "featured"
}

export interface ISubmittedArticle{
    
    seriesId: number;
    userId:number;
    title:string;
    preview:string;
    contents:string;
    image_link:string;
    article_status:number;
}

export interface IArticle{
    
    article_id: number;
    user_user_id:number;
    title:string;
    preview:string;
    contents:string;
    image_link:string;
    price:number;
    created_on:string;
    article_status:number;
    rating:number[];
    feature_tag:string;
}


export const ArticleModel = {

    getAll: async ():Promise<IArticle[]>  => {
    
        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
                
                var sql = `SELECT * FROM theplatformV2.article`;
                connection.query(sql, function (error:any, results:IArticle[]){
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

    getById: async (articleId:number):Promise<IArticle> => {

        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
                
                var sql = `SELECT * FROM article WHERE article_id = '${articleId}'`;
                connection.query(sql, function (error:any, results:IArticle[]){
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

    addToFavorite:  async (article:IArticle, userID:string) => { //needs to be double checked

        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
                
                var sql = `INSERT INTO user_has_article VALUES(${article.article_id}, ${userID});`;
                connection.query(sql, function (error:any, results:IArticle[]){
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

    getFromFavorites:  async (userID:string) => {
        
        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
               var sql = `SELECT * FROM user_has_article a JOIN article b ON a.article_id = b.article_id WHERE a.user_id = ${userID};`;
                connection.query(sql, function (error:any, results:IArticle[]){
                    connection.release();

                    if(error){
                        reject(error)
                    } else {
                        resolve(results);
                    }
                });
            });
        });                
    },

    create: async( articleToCreate:ISubmittedArticle)=> {

        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
                //need to update sql statemnet
                var sql = `INSERT INTO article VALUES (article_id, null, ${articleToCreate.userId}, "${articleToCreate.title}", "${articleToCreate.preview}", "${articleToCreate.contents}", "${articleToCreate.image_link}", CURDATE(), "2", "0", "null")`;

                connection.query(sql, function (error:any, results:IArticle){
                    connection.release();

                    if(error){
                        reject(error)
                    } else {
                        resolve(results);
                    }
                });
            });
        });       
    },

    approveArticle: async ( article:IArticle)=> {

        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;

                var sql = `UPDATE article SET article_status = 3 WHERE article_id = ${article.article_id};`;

                connection.query(sql, function (error:any, results:IArticle[]){
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

    rejectArticle: async ( article:IArticle)=> {
        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;

                var sql = `UPDATE article SET article_status = 4 WHERE article_id = ${article.article_id};`;

                connection.query(sql, function (error:any, results:IArticle[]){
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

    toggleFeatured: async ( article:IArticle)=> {
        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            var sqlFeature =`UPDATE article SET feature_tag = "${FeatureTypes.featured}" WHERE article_id = "${article.article_id}";`;
            var sqlClearFeature =`UPDATE article SET feature_tag = Null WHERE article_id = "${article.article_id}";`;
            var sql = '';
                        //here the switch assigns the sql appropriatly to toggle feature
            switch(article.feature_tag){
                case "featured": sql = sqlClearFeature;
                console.log("switch feature", sql   );
                    break;
                    
                default:
                sql = sqlFeature;
                console.log("switch default:", sql);

            }

            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
                
                connection.query(sql, function (error:any, results:IArticle[]){
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
    removeFromFeatured: async ( article:IArticle)=> {
        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;

                var sql = `UPDATE article SET feature_tag = null WHERE article_id = "${article.article_id}";`;
                connection.query(sql, function (error:any, results:IArticle[]){
                    connection.release();
                    if(error){
                        reject(error)
                    } else {
                        resolve(results[0]);
                    }
                });
            });
        }); 
    }
}