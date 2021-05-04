import { SeriesModel } from '../../models/series';
import {authenticateToken} from '../../middleware/authenticator'
import { article } from '../articles';


export function addArticle( app:any ){

    app.post("/addArticleToSeries",authenticateToken, async ( request:any, response:any ) => {

        const seriesID = request.body.seriesID;
        const articleID = request.body.artID;
       
        SeriesModel.addArticle(seriesID, articleID);

        response.status(201).send();

    });

}
