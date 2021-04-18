import { authenticateToken } from "../../middleware/authenticator";
import { ISeries, SeriesModel } from "../../models/series";

export function get( app:any ){

    app.get("/series",authenticateToken, async ( request:any, response:any ) => { 

        const seriesList:ISeries[] = await SeriesModel.getAll();
        response.status(200).send(seriesList);
    });

}