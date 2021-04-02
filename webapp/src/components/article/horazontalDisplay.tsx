import React, { useEffect, useState } from 'react';      
import { CardDeck, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';
import FavButton from '../FavButton';

export default function HorazontalDisplay(){

const [featuredArticles, setFeaturedArticles] = useState<IArticle[]>();
const history = useHistory();

  //Here we use a useEffect to bring in ALL the articles
  useEffect(() => {
    api.articles.get().then((responce) => {
    const featuredArt:IArticle[] = responce.data.filter((_art: IArticle) => _art.feature_tag === "featured")
    setFeaturedArticles(featuredArt);
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
      {featuredArticles?.map(function(_art, index){
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
    
            <p>Date Posted: {createdOn}</p>
    
            <FavButton{..._art}/>
    
          </div>
        </div>
        )
      })}
      
    </section> 
          
    </>
     }