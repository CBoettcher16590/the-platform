
import {authenticateToken} from '../../../middleware/authenticator';
import {ArticleModel, IArticle } from '../../../models/article';


export function get( app:any ){

    app.get("/favoriteArticle", authenticateToken, async ( request:any, response:any ) => { 
        //I added a code in the header so I could get the userID from the from end -- "Code" is added to header in article api(line35)
        const userID = request.headers.code;
      
        const favoriteArticles = await ArticleModel.getFromFavorites(userID).catch(err => {throw err});

        response.status(200).send(favoriteArticles);
    });

}