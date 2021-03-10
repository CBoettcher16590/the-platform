import { response } from 'express';
import {IArticle, ArticleModel} from '../../models/article';

enum ArticleCode{
    Featured = 'Feature',
    Approval = "Approval"
} 
 
export function patch(app:any){

    app.patch('/article', async(request:any, response:any) => {
        //First we get our Patch Code, and Found Article.  PatchCode is sent in under code in the headers in the api
        const foundArticle = await ArticleModel.getById(request.body.article_id);
        const patchCode = request.headers.code;
        console.log(patchCode)

        //Then Depending on the PatchCode we select the task to be completed
        switch(patchCode){
            case ArticleCode.Featured: {
                console.log("switch, Feat")
                ArticleModel.addToFeatured(foundArticle);

                break;
            }
            case ArticleCode.Approval: {
                console.log("switch, Approval")

                if(request.body.article_status === 3){
                    ArticleModel.approveArticle(foundArticle);
                }

                if(request.body.article_status === 4){
                    ArticleModel.rejectArticle(foundArticle);
                }

                break;
            }
            default: 
                console.error("No Proper Article Patch Code");
                break;
        }
    });

}
