
import {authenticateToken} from '../../middleware/authenticator';
import { RatingModel, IRating } from '../../models/rating';


export function get( app:any ){

    app.get("/rating",authenticateToken, async ( request:any, response:any ) => { 

        const ratingList:IRating[] = await RatingModel.getAll();
        
        response.status(200).send(ratingList);
    });

}