
import {ArticleModel } from '../../models/article';

var mysql      = require('mysql');

export function get( app:any ){

    app.get("/article", ( request:any, response:any ) => {

        const article = ArticleModel.getAll();
        let image = article.imageLink;
        console.log(image);
        response.status(200).send(article);
    });

}