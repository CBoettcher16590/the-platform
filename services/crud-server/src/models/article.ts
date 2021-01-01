
export interface IArticle{
    
    articleId: number;
    seriesId: number;
    statusTypeId:number;
    title:string;
    preview:string;
    contents:string;
    imageLink:string;
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
        const allArticles:IArticle[] = connection.query('SELECT * FROM article', function (error:any, results:any, fields:any) {
            if (error) throw error;
            // Line below is an example of how to get content
            // console.log("results.contents: ", results[0].contents, " fields: ", fields)
            return results;
        });
    connection.end();
 
        return allArticles;
    
 },

    getById: async (articleId:string):Promise<IArticle[]> => {
            connection.connect();

            const foundArticle = connection.query(`SELECT * FROM article WHERE article.article_id = ${articleId}`, function (error:any, results:any, fields:any) {
                if (error) throw error;
                // Line below is an example of how to get content
                return results;
            });
            connection.end();
 
        return foundArticle;
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