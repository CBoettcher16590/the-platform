import api from '../api';


export default function articleSubmitHandeler(){   
    
    function ArticleSubmission( title:string, preview:string, imageLink:string, price:string, contents:string,userId:string){
        
       api.articles.post({title, preview, imageLink, price, contents, userId}).then(responce => {
       }).catch((error) => console.error(`Error: ${error}`));
    }

    return {
        ArticleSubmission
    }
    
}