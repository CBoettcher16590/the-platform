import api from '../api';


export default function SeriesSubmission(title:string, imageLink:string, contents:string, userId:string){   
       
       api.series.post({title, imageLink, contents, userId}).then(responce => {
       });
    
    
}