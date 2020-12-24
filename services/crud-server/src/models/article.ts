import {IArticle} from '../interfaces';

var mysql = require('mysql');
var connection = mysql.createConnection({
     host     : 'db-stargazer.cd4ztxxcuiwb.us-east-1.rds.amazonaws.com',
     user     : 'admin',
     password : 'stargazer2020',
    database : 'theplatform'
});

export const ArticleModel = {

    getAll: () => {
    connection.connect();
        const query = connection.query('SELECT * FROM article', function (error:any, results:any, fields:any) {
            if (error) throw error;
            // Line below is an example of how to get content
            // console.log("results.contents: ", results[0].contents, " fields: ", fields)
            return results;
        });
    connection.end();
 
        return query;
    
 },

    getById: ( id:number ):any => {
        return ArticleModel.getAll().find( (article: { articleId: number; }) => {
            console.log(article, id);
            return article.articleId === id;
        });

}

} 