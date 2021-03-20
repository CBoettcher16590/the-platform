import {authenticateToken} from '../../../middleware/authenticator';
import {ArticleModel, IArticle } from '../../../models/article';
import { IUser, UserModel } from '../../../models/user';

export function post( app:any ){

    app.post("/favoriteArticle", async ( request:any, response:any ) => {
        //declaire variables
        const payloadArticle:IArticle = request.body[0];
        const userID = request.body[1];


        //need to add a way to check if a user has certain article first

        
        //Adds article to fav   
        await ArticleModel.addToFavorite(payloadArticle, userID).catch((err) => {throw err});

        console.log("Successfully Added to Favorites");

        response.status(201).send();

    });

}
