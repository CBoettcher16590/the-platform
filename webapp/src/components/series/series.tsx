import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';
import MainLayout from '../../layouts/MainLayout';

interface ISeries {
  series_id:string,
  series_title:string,
  series_image:string,
  series_description:string,
  series_owner_id:string
}



const Series = () => {

    const params = useParams<{id:string}>();
    const numId = parseInt(params.id);

    //I'm using serie as an individual series.. if theres a better word let me know hah
    const [serie, setSerie] = useState<ISeries>();

    //set articles within series
    const [seriesArticles, setSeriesArticles] = useState<IArticle[]>();
    
    
    useEffect(() => {
      api.series.getById("1").then((responce:any) => {
              const indvSeries:ISeries = responce.data;
              console.log(indvSeries)
  
          }).catch((error) => console.error(`Error: ${error}`));
  }
  ,[]);
    


//Also Need to write API and Routes on both sides

    return (

        <MainLayout>

        <section id="seriesHeader">
        <div className="seriesImg">
            img
        </div>
        <div className="seriesInfo">
           <h1>Series Title</h1>
           <h4>Series Content</h4>
           <p>Series Author</p>
        </div>
        </section>
        <br/>
        <section id="seriesAricles">

{/* REDO TO FIT SERIES */}

      {seriesArticles?.map(function(_art:IArticle, index){
        let image = _art.image_link;
        let title = _art.title;
        let createdOn = _art.created_on.slice(0,10);
    
        return (
          <div className="homeCard">
    
          <img className="cardImage" src={image} />
    
          <div className="article">
    
            <h2>{title}</h2>
    
    
    
          </div>
        </div>
        )
      })}
       


        </section>

        </MainLayout>

    )

}

export default Series;
