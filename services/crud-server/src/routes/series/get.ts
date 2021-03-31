import { authenticateToken } from "../../middleware/authenticator";
import { ISeries, SerieseModel } from "../../models/series";

export function get( app:any ){

    app.get("/series",authenticateToken, async ( request:any, response:any ) => { 

        const seriesList:ISeries[] = await SerieseModel.getAll();
        response.status(200).send(seriesList);
    });

}