import api from '../api';


export default function articleSubmitHandeler(){   
    
    function ArticleSubmission( title:string, preview:string, imageLink:string, contents:string, price:string){
        
       api.articles.post({title, preview, imageLink, contents, price}).then(responce => {
       });
    }

    return {
        ArticleSubmission
    }
    
}