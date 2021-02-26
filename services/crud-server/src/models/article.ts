import { article } from "../routes/articles";
import { IUser } from "./user";

export interface IArticle{
    
    articleId: number;
    seriesId: number;
    userId:number;
    title:"article title";
    preview:"article preview";
    contents:string;
    imageLink:"img link";
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
           
            connection.query(`SELECT * FROM article`, function (error:any, results:IArticle[]) {
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
            
            connection.query(`SELECT * FROM article WHERE article_id = ${articleId}`, function (error:any, results:IArticle[]) {
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
            
            connection.query(`INSERT INTO theplatformV2.article_has_user (articleID, userID) VALUES(${article.articleId}, ${user.userId});`,
                function (error:any, results:IArticle[]) {
                if(error){
                    reject(error);
                } else {
                    resolve(results[0])
                }
            });
        });          
    },

    create: async( articleToCreate:IArticle)=> {
        
        // connection.connect();

        // const newArticle:IArticle = connection.query(`INSERT INTO article(title, preview, contents, picture_link)
        // VALUES(article_id, ${articleToCreate.seriesId}, ${articleToCreate.userId}, ${articleToCreate.title}, ${articleToCreate.preview}, 
        //     ${articleToCreate.contents}, ${articleToCreate.imageLink}, CURDATE(), ${articleToCreate.price}, ${articleToCreate.articleStatus})`, function (error:any, results:any, fields:any) {
        //     if (error) throw error;
        //     // Line below is an example of how to get content
        // });
        // connection.end(); 
        // return newArticle;
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