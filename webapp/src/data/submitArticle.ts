import api from '../api';


export default function articleSubmitHandeler(){   
    
    function ArticleSubmission( title:string, preview:string, imageLink:string, contents:string,userId:number){
        
       api.articles.post({title, preview, imageLink, contents, userId}).then(responce => {
       });
    }

    return {
        ArticleSubmission
    }
    
}