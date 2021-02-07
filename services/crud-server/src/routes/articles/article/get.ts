import {authenticateToken} from '../../../middleware/authenticator'
import {ArticleModel, IArticle } from '../../../models/article';


export function get( app:any ){

    app.get("/article/:articleId", async ( request:any, response:any ) => {

        const articleId = request.params.articleId;
        const foundArticle:IArticle = await ArticleModel.getById(articleId);

        if(foundArticle){
             response.status(200).send(foundArticle); 
        } else{
            response.status(404).send({
                error: 404,
                message: `There is no Article with id = ${articleId}`
            });
        }
   
      
    });

}