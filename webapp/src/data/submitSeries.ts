import api from '../api';


export default function seriesSubmitHandeler(){   
    
    function NewSeries( series_title:string, series_image:string, series_contents:string, userId:string){
        
       api.series.post({series_title, series_image, series_contents, userId}).then(responce => {
       });
    }


    return {
        NewSeries
    }
    
}