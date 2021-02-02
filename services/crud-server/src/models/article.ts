import { article } from "../routes/articles";
import { IUser } from "./user";


export interface ISubmittedArticle{
    
    seriesId: number;
    userId:number;
    title:string;
    preview:string;
    contents:string;
    imageLink:string;
    price:number;
    articleStatus:number;
}

export interface IArticle{
    
    articleId: number;
    seriesId: number;
    userId:number;
    title:string;
    preview:string;
    contents:string;
    imageLink:string;
    price:number;
    createdOn:string;
    articleStatus:number;
    rating:number[];
}


var mysql = require('mysql');

var connection = mysql.createConnection({
     host     : 'db-stargazer.cd4ztxxcuiwb.us-east-1.rds.amazonaws.com',
     user     : 'admin',
     password : 'stargazer2020',
    database : 'theplatformV2'
});

export const ArticleModel = {

    getAll: async ():Promise<IArticle[]>  => {

        return new Promise((resolve,reject)=>{
           
            var sql = `SELECT * FROM theplatformV2.article`;

            connection.query(sql , function (error:any, results:IArticle[]) {
                if(error){
                    reject(error);
                } else {
                    resolve(results)
                }

            });
        });          
    
 },

    getById: async (articleId:number):Promise<IArticle> => {

        return new Promise((resolve,reject)=>{
            
            var sql = `SELECT * FROM theplatformV2.article WHERE article_id = ${articleId}`;
            
            connection.query(sql , function (error:any, results:IArticle[]) {
                if(error){
                    reject(error);
                } else {
                    resolve(results[0])
                }
           
            });

        });          
    },

    addToPurchased:  async (article:IArticle, user:IUser) => {

        return new Promise((resolve,reject)=>{
            
            var sql = `INSERT INTO theplatformV2.article_has_user (articleID, userID) VALUES(${article.articleId}, ${user.userId});`;
            
            connection.query(sql , function (error:any, results:IArticle[]) {
                if(error){
                    reject(error);
                } else {
                    resolve(results[0])
                }
            });
        });          
    },

    create: async( articleToCreate:ISubmittedArticle)=> {
        
        return new Promise((resolve,reject)=>{

    

            var sql = `INSERT INTO article VALUES (article_id, 1, ${articleToCreate.userId}, "${articleToCreate.title}", "${articleToCreate.preview}", "${articleToCreate.contents}", "${articleToCreate.imageLink}", CURDATE(), "${articleToCreate.price}", ${articleToCreate.articleStatus}, 0)`;
            
            connection.query(sql , function (error:any, results:IArticle[]) {
                if(error){
                    reject(error);
                    console.log("Error in Create Article Model: ", error);
                } else {
                    resolve(results[0])
                    console.log("results in Article Create Model: ", results)
                }
            });
        });      
    },

    publish: async ( article:IArticle)=> {

    //     connection.connect();

    //     const publishedArticle = connection.query(`UPDATE article SET statusTypeId='3' WHERE article.article_id = ${article.articleId} `, function (error:any, results:any, fields:any) {
    //         if (error) throw error;
    //         // Line below is an example of how to get content
    //         return results;
    //     });
    //     connection.end();

    // return publishedArticle;
         
    }

}