import React, { useEffect, useState } from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';
import FavButton from '../FavButton';

export default function HomepageCenterDisplay() {

  const [featuredArticles, setFeaturedArticles] = useState<IArticle[]>();
  const history = useHistory();

  //Here we use a useEffect to bring in ALL the articles
  useEffect(() => {
    api.articles.get().then((responce) => {
      const featuredArt: IArticle[] = responce.data.filter((_art: IArticle) => _art.feature_tag === "featured")
      setFeaturedArticles(featuredArt);
    }).catch((error: any) => console.error(`Error: ${error}`));
  }, []);

  const GoToArticle = (article: IArticle) => (event: any) => {
    //here we find the article id for our Title, Link
    let articleId = article.article_id;
    //then We use history.push to redirect to that page
    history.push(`/article/${articleId}`)
  }
  return <>
    <section className="homeStories">
      {featuredArticles?.map(function (_art, index) {
        //HERE I GET ALL FEATURED ARTICLES EXPECT FOR THE ONE IN THE FIRST SPOT
        if (index >= 1) {
          let image = _art.image_link;
          let title = _art.title;
          let preview = _art.preview.slice(0, 90) + "...";
          let createdOn = _art.created_on.slice(0, 10);
          let subscribe = _art.price;

          if (subscribe === "Subscribe") {
            // DISPLAY FOR PREMIUM ARTICLE
            return (
              <div key={_art.article_id} className="homeCard">

                <div className="article">

                  <h2 className="clickableTitle" onClick={GoToArticle(_art)}>{title}</h2>

                  <p id="CenterArtPreview">{preview}</p>

                  <Row>
                    <Col xs={6}>
                      <p id="dateSeries">Date Posted: {createdOn}</p>
                    </Col>
                    <Col xs={6}>
                      <Badge pill variant="success">Premium</Badge>
                    </Col>
                  </Row>

                </div>
                <div>
                  <img className="cardImage" src={image} />
                </div>

              </div>
            )
            // DISPLAY FOR FREE ARTICLE

          } else {
            return (
              <div key={_art.article_id} className="homeCard">

                <div className="article">

                  <h2 className="clickableTitle" onClick={GoToArticle(_art)}>{title}</h2>

                  <p id="CenterArtPreview">{preview}</p>

                  <p className="date">Date Posted: {createdOn}</p>

                </div>
                <div>
                  <img className="cardImage" src={image} />
                </div>

              </div>


            )
          }
        }

      })}

    </section>

  </>
}