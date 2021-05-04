export class Article {

    articleId:number = 0;
    seriesId:number = 1;
    statusType:number = 4; //4 = not Submited article
    title:string = "";
    preview:string="";
    contents:string="";
    pictureLink:string = "";

}

const testArticle = new Article();
testArticle.articleId = 10;
testArticle.title = "Should We storm the capitol building?";
testArticle.contents = "Probs not";
testArticle.pictureLink = "https://dummies.jpg"

