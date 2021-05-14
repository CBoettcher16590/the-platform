
import {authenticateToken} from '../../middleware/authenticator';
//eventually middleware will need to make sure user is logged in as a

import {ArticleModel, IArticle } from '../../models/article';


export function patch( app:any ){

    app.patch("/article", async ( request:any, response:any ) => { 
        response.status(200).send();
    });

}