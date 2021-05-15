import React, { useEffect, useState } from 'react';      
import { Badge, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';

export default function HomepageFeatureDisplay(){

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
    <section className="homeFeature">
      {featuredArticles?.map(function(_art, index){
        //HERE I GET ALL FEATURED ARTICLES EXPECT FOR THE ONE IN THE FIRST SPOT
        if(index<=0){
          let image = _art.image_link;
          let title = _art.title;
          let subscribe = _art.price;
          let preview = _art.preview;
          let createdOn = _art.created_on.slice(0,10);


          // DISPLAY FOR PREMIUM ARTICLE

          if(subscribe === "Subscribe"){
          return (
            <div id="featureArticleBody" key={_art.article_id}>
            <img id="featureImg"src={image} />
            <div>
      
            <h2 className="clickableTitle"  onClick={GoToArticle(_art)}>{title}</h2>
            <Row>
              <Col xs={6}>
                <p id="date">Date Posted: {createdOn}</p>
              </Col>
              <Col xs={6}>
              <Badge pill variant="success">Premium</Badge>
              </Col>
            </Row>

          <p>{preview}</p>
      
            </div>
           
          </div>
          )
          // DISPLAY FOR FREE ARTICLE
        } else {
          return (
            <div id="featureArticleBody" key={_art.article_id}>
            <img id="featureImg"src={image} />
            <div>
      
            <h2 className="clickableTitle"  onClick={GoToArticle(_art)}>{title}</h2>
            <Row>
              <Col xs={12}>
                <p id="date">Date Posted: {createdOn}</p>
              </Col>
            </Row>

          <p>{preview}</p>
      
            </div>
           
          </div>
          )
        }
      }
      })}
      
    </section> 
          
    </>
     }