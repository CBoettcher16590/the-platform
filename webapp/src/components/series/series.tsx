

import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import api from '../../api'
import { ISeries } from '../../../../services/crud-server/src/models/series';
import { IArticle } from '../../../../services/crud-server/src/models/article';

    const IndvSeries = () => {
        const params = useParams<{id:string}>();
        const numId = parseInt(params.id);
        const history = useHistory();
        const [serie, setSerie] = useState<ISeries>();
        const [seriesArticles, setSeriesArticles] = useState<IArticle[]>();
    
      const GoToArticle = (article:IArticle) => (event:any) => {
        //here we find the article id for our Title, Link
        let articleId = article.article_id;
        //then We use history.push to redirect to that page
        history.push(`/article/${articleId}`)
        }


        useEffect(() => {
          //Find Specific Series
          api.series.getById(numId).then((responce) => {
            const _serie:ISeries = responce.data;
            setSerie(_serie);
          }).catch((error) => console.error(`Error: ${error}`));

          //Find Specific Articles for Series 
          api.articles.get().then((responce) => {
            const seriesArt:IArticle[] = responce.data.filter((_art: IArticle) => _art.series_series_id === numId);
            setSeriesArticles(seriesArt);
        }).catch((error) => console.error(`Error: ${error}`));
        
        }
        ,[]);

            return (
            
              <MainLayout >
              
              <Row className="seriesHeader">
                <Col  xs={12} sm={6} lg={5}>
                  <div id="seriesHeaderImg">
                    <img src={serie?.series_image} alt="header.jpg"/>
                  </div>
                  
                </Col>
                <Col  xs={12} sm={6} lg={7}>
                  <div id="seriesHeaderInfo">
                    <h1>{serie?.series_title}</h1>
                    <h4>{serie?.series_description}</h4>
                    <br/>
                    <hr/>
                  </div>
                </Col>
             
              </Row>

              <section className="seriesArticles">
                <Row>
                {seriesArticles?.map(function(_art, index){
                    let articleImage = _art.image_link;
                    let articleTitle = _art.title;
                    let articlePreview = _art.contents.slice(0,100) + "...";
                    let articleCreatedOn = _art.created_on.slice(0,10);
                    return (  
                      <Col sm={6} lg={4}>
                        <div key={_art.article_id} className="SeriesArticleCard">
                       
                        <div>
                  
                          <h2 onClick={GoToArticle(_art)}>{articleTitle}</h2>
                  
                          <p id="seriesPreview">{articlePreview}</p>
                  
                          <p className="date">Date Posted: {articleCreatedOn}</p>

                        </div>
                        <div>
                          <img className="cardImage" src={articleImage} />
                        </div>

                        </div>
                    </Col>

                    )
                  }
                
                )}
                </Row>
              
              </section> 
              </MainLayout>
                  
            )

    }

export default IndvSeries;
    