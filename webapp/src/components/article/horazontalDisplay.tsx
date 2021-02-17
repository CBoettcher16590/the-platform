import React, { useEffect, useState } from 'react';      
import { CardDeck, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';
import PayButton from '../PayButton';

export default function HorazontalDisplay(){

const [articles, setArticles] = useState<IArticle[]>();
const history = useHistory();

  useEffect(() => {
    api.articles.get().then((responce) => {
    setArticles(responce.data);
    }).catch((error: any) => console.error(`Error: ${error}`)); 
        },[]);
  
    const GoToArticle = (article:IArticle) => (event:any) => {
      //here we find the article id for our Title, Link
      let articleId = article.article_id;
      //then We use history.push to redirect to that page
      history.push(`/article/${articleId}`)
    }

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

        <h2 onClick={GoToArticle(_art)}>{title}</h2>

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