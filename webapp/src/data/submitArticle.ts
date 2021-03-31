import api from '../api';


export default function articleSubmitHandeler(){   
    
    function ArticleSubmission( title:string, preview:string, imageLink:string, contents:string,userId:string){
        
       api.articles.post({title, preview, imageLink, contents, userId}).then(responce => {
       });
    }

    return {
        ArticleSubmission
    }
    
}