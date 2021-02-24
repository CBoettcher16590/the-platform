  
import { article } from "../routes/articles";
import { IUser } from "./user";
import DatabaseCONNECTION from '../classes/index'

export interface ISubmittedArticle{
    
    seriesId: number;
    userId:number;
    title:string;
    preview:string;
    contents:string;
    image_link:string;
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


export const ArticleModel = {

    getAll: async ():Promise<IArticle[]>  => {
    
        const dbConnection = new DatabaseCONNECTION();

        return new Promise((resolve,reject) => {
        
                var sql = `SELECT * FROM theplatformV2.article`;
            
                dbConnection.connection().query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                    } else {
                        resolve(results);
                    }  
                }); 
                dbConnection.connection().end();
            });
     },

    getById: async (articleId:number):Promise<IArticle> => {

        return new Promise((resolve,reject)=>{ 

            const dbConnection = new DatabaseCONNECTION();

            var sql = `SELECT * FROM theplatformV2.article WHERE article_id = ${articleId}`;

                dbConnection.connection().query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                    } else {
                        resolve(results[0]);
                    }
           
                });
                dbConnection.connection().end();
            });        
    },

    addToPurchased:  async (article:IArticle, user:IUser) => { //needs to be double checked

        return new Promise((resolve,reject)=>{

            const dbConnection = new DatabaseCONNECTION();

            var sql = `INSERT INTO theplatformV2.article_has_user (articleID, userID) VALUES("${article.article_id}", "${user.user_id}");`;

                dbConnection.connection().query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                    } else {
                        resolve(results[0]);
                    }
                });
                dbConnection.connection().end();
            });         
    },

    create: async( articleToCreate:ISubmittedArticle)=> {
        
        return new Promise((resolve,reject)=>{;

            const dbConnection = new DatabaseCONNECTION();

            var sql = `INSERT INTO article VALUES (article_id, 2, ${articleToCreate.userId}, "${articleToCreate.title}", "${articleToCreate.preview}", "${articleToCreate.contents}", "${articleToCreate.image_link}", CURDATE(), "${articleToCreate.price}", ${articleToCreate.article_status}, 0)`;
    
                dbConnection.connection().query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                        console.log("Error in Create Article Model: ", error);
                    } else {
                        resolve(results[0]);
                        console.log("results in Article Create Model: ", results)
                    }
                });
                dbConnection.connection().end();
            });      
    },

    approveArticle: async ( article:IArticle)=> {

        return new Promise((resolve,reject)=>{
            
        const dbConnection = new DatabaseCONNECTION();

            var sql = `UPDATE article SET article_status = 3 WHERE article_id = ${article.article_id};`;
      
                dbConnection.connection().query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                        console.log("Error in Create Article Model: ", error);
                    } else {
                        resolve(results[0]);
                        console.log("approved Article worked")
                    }
                });
                dbConnection.connection().end();
            });    
    },

    rejectArticle: async ( article:IArticle)=> {

        return new Promise((resolve,reject)=>{

        const dbConnection = new DatabaseCONNECTION();

            var sql = `UPDATE article SET article_status = 4 WHERE article_id = ${article.article_id};`;
            dbConnection.connection().query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                        console.log("Error in Create Article Model: ", error);
                    } else {
                        resolve(results[0])
                        console.log("Rejected Article worked")
                    }
                });
                dbConnection.connection().end();
            });        
    }
}