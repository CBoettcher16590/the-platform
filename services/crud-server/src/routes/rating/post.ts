
import { authenticateToken } from '../../middleware/authenticator'
import { IRating, RatingModel } from '../../models/rating';

export function post(app: any) {

    app.post("/rating", authenticateToken, async (request: any, response: any) => {

        // read payload from post body
        const payload: IRating = request.body;

        await RatingModel.create(payload);

        response.status(201).send();

    });

}
