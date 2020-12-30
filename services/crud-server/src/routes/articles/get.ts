
import { IArticle } from '../../interfaces';
import {ArticleModel } from '../../models/article';

var mysql      = require('mysql');

export function get( app:any ){

    app.get("/article", ( request:any, response:any ) => {

        const articleList = ArticleModel.getAll();
        response.status(200).send(articleList);
    });

}