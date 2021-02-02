import api from '../api';


export default function articleSubmitHandeler(){   
    
    function ArticleSubmission( title:string, preview:string, imageLink:string, contents:string, price:string, userId:number){
        
       api.articles.post({title, preview, imageLink, contents, price, userId}).then(responce => {
           console.log("SUBMITARTICLE in DATA:s",responce);
       });
    }

    return {
        ArticleSubmission
    }
    
}