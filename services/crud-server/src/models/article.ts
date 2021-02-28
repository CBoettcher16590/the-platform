  
import { article } from "../routes/articles";
import { IUser } from "./user";
import DatabaseCONNECTION from '../classes/index'

//right now we only have a "featured" section, but I made this an enum in case we want to expand in the future
enum FeatureTypes {
    featured
}

export interface ISubmittedArticle{
    
    seriesId: number;
    userId:number;
    title:"article title";
    preview:"article preview";
    contents:string;
<<<<<<< HEAD
    imageLink:"img link";
=======
    image_link:string;
>>>>>>> d2c675859f0fcaaa2cef6bb4cba4696f0dbe07a0
    price:number;
    article_status:number;
}

export interface IArticle{
    
    article_id: number;
    userId:number;
    title:string;
    preview:string;
    contents:string;
    image_link:string;
    price:number;
    created_on:string;
    article_status:number;
    rating:number[];
}

<<<<<<< HEAD

var mysql = require('mysql');
var connection = mysql.createConnection({
     host     : 'db-stargazer.cd4ztxxcuiwb.us-east-1.rds.amazonaws.com',
     user     : 'admin',
     password : 'stargazer2020',
    database : 'theplatformV2'
});
=======
>>>>>>> d2c675859f0fcaaa2cef6bb4cba4696f0dbe07a0

export const ArticleModel = {

    getAll: async ():Promise<IArticle[]>  => {
    
        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection();
            
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
            const pool = dbConnection.connection();
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
                
                var sql = `SELECT * FROM theplatformV2.article WHERE article_id = ${articleId}`;
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

    addToPurchased:  async (article:IArticle, user:IUser) => { //needs to be double checked

        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection();
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;
                
                var sql = `INSERT INTO theplatformV2.article_has_user (articleID, userID) VALUES("${article.article_id}", "${user.user_id}");`;
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

    create: async( articleToCreate:ISubmittedArticle)=> {

        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection();
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;

                var sql = `INSERT INTO article VALUES (article_id, 2, ${articleToCreate.userId}, "${articleToCreate.title}", "${articleToCreate.preview}", "${articleToCreate.contents}", "${articleToCreate.image_link}", CURDATE(), "${articleToCreate.price}", ${articleToCreate.article_status}, 0)`;

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

    approveArticle: async ( article:IArticle)=> {

        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection();
            
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
            const pool = dbConnection.connection();
            
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

    addToFeatured: async ( article:IArticle)=> {

        return new Promise((resolve,reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection();
            
            pool.getConnection(function(err:any, connection:any){
                if(err) throw err;

                var sql = `UPDATE article SET feature_tag = "${FeatureTypes.featured}" WHERE article_id = "${article.article_id}";`;

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