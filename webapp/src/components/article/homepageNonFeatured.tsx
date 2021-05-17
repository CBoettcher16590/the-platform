import React, { useEffect, useState } from 'react';      
import { CardDeck, Card, Badge } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';
import FavButton from '../FavButton';

export default function HomepageNonFeatureDisplay(){

const [articles, setArticles] = useState<IArticle[]>();
const history = useHistory();

  //Here we use a useEffect to bring in ALL the articles
  useEffect(() => {
    api.articles.get().then((responce) => {
    const nonFeaturedArt:IArticle[] = responce.data.filter((_art: IArticle) => _art.feature_tag != "featured" && _art.article_status === 3)
    setArticles(nonFeaturedArt);
    }).catch((error: any) => console.error(`Error: ${error}`));
    
        },[]);

   const GoToArticle = (article:IArticle) => (event:any) => {
    //here we find the article id for our Title, Link
    let articleId = article.article_id;
    //then We use history.push to redirect to that page
    history.push(`/article/${articleId}`)
    }
    return <> 
    <section className="homeDiscoverList">
      {articles?.map(function(_art, index){
        
          let subscribe = _art.price;
          let image = _art.image_link;
          let title = _art.title;
          let preview = _art.preview.slice(0,70) + "...";
          if(subscribe === "Subscribe"){
            return (
              <div key={_art.article_id}>
              <div>
                  <img id="listArticleImg"src={image} />
              </div>
              <div>   
              <h2 id="discoverTitle" className="clickableTitle"  onClick={GoToArticle(_art)}>{title}</h2>
              <p id="CenterArtPreview">{preview}</p>
              <Badge pill variant="success">Premium</Badge>
              </div>
            </div>
            )
          } else {
            return (
              <div  key={_art.article_id}>
              <div>
                  <img id="listArticleImg"src={image} />
              </div>
              <div>   
              <h2 id="discoverTitle" className="clickableTitle"  onClick={GoToArticle(_art)}>{title}</h2>
              <p id="CenterArtPreview">{preview}</p>
              </div>
             
            </div>
            )
          }
    
        }
       
      )}
      
    </section> 
          
    </>
     }