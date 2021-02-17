import React, { useEffect, useState } from 'react';      
import { CardDeck, Card } from 'react-bootstrap';
import { IArticle } from '../../../../services/crud-server/src/models/article';

// import  {IUserLogin} from '../../api/login/index';
import api from '../../api';
import PayButton from '../PayButton';

export default function HorazontalDisplay(){

const [articles, setArticles] = useState<IArticle[]>();

  useEffect(() => {
    api.articles.get().then((responce) => {
    setArticles(responce.data);
    }).catch((error: any) => console.error(`Error: ${error}`)); 
        },[]);
 

return <>
<section className="homeStories">
  {articles?.map(function(_art, index){
    let image = _art.image_link;
    let title = _art.title;
    let preview = _art.preview;
    let createdOn = _art.created_on.slice(0,10);

    return (
      <div className="homeCard">

      <img className="cardImage" src={image} />

      <div className="article">

        <h2>{title}</h2>

        <p>{preview}</p>

        <p>{createdOn}</p>

        <PayButton/>

      </div>
    </div>
    )
  })}
</section> 
      
</>
 }