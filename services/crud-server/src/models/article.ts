import { rejects } from "assert";
import e from "cors";
import { query } from "express";
import { resolve } from "path";

export interface IArticle{
    
    articleId: number;
    seriesId: number;
    statusTypeId:number;
    title:string;
    preview:string;
    contents:string;
    imageLink:string;
    price:number;
    authorId:number;
}


var mysql = require('mysql');
var connection = mysql.createConnection({
     host     : 'db-stargazer.cd4ztxxcuiwb.us-east-1.rds.amazonaws.com',
     user     : 'admin',
     password : 'stargazer2020',
    database : 'theplatform'
});

export const ArticleModel = {

    getAll: async ():Promise<IArticle[]>  => {

    connection.connect();
        const articleList:IArticle[] = [];
        const allArticles:IArticle[] = connection.query('SELECT * FROM article', function (error:any, results:any) {
            if(error) throw error;
            results.forEach((element:IArticle) => {
                articleList.push(element);
            });
            // console.log(articleList);
            return articleList;
        
        });

    connection.end();
        return articleList;
    
 },

    getById: async (articleId:string):Promise<IArticle> => {

        return new Promise((resolve,reject)=>{
            connection.connect();
            connection.query(`SELECT * FROM article WHERE article.article_id = ${articleId}`, function (error:any, results:IArticle) {
                if(error){
                    reject(error);
                } else {
                    resolve(results)
                }
                connection.end();
            });
        });          
    },


    create: async( articleToCreate:IArticle)=> {
        
        connection.connect();

        const newArticle:IArticle = connection.query(`INSERT INTO article(title, preview, contents, picture_link)
        VALUES(${articleToCreate.title}, ${articleToCreate.preview}, ${articleToCreate.contents}, ${articleToCreate.imageLink})`, function (error:any, results:any, fields:any) {
            if (error) throw error;
            // Line below is an example of how to get content
        });
        connection.end(); 
        return newArticle;
    },

    publish: async ( article:IArticle)=> {

        connection.connect();

        const publishedArticle = connection.query(`UPDATE article SET statusTypeId='3' WHERE article.article_id = ${article.articleId} `, function (error:any, results:any, fields:any) {
            if (error) throw error;
            // Line below is an example of how to get content
            return results;
        });
        connection.end();

    return publishedArticle;
         
    }

}