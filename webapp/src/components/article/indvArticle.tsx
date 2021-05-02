import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import './style.css';
import {Button, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import {IArticle} from '../../../../services/crud-server/src/models/article';
import { IUser } from '../../../../services/crud-server/src/models/user';
import { useHistory, useParams } from 'react-router';
import api from '../../api'
import { ISeries } from '../../../../services/crud-server/src/models/series';



    const IndvArticle = () => {
        const params = useParams<{id:string}>();
        const numId = parseInt(params.id);
        const history = useHistory();
        const loggedInUserId = localStorage.getItem("userID") || "";
     
        const [article, setArticle] = useState<IArticle>();
        const [articleAuthor, setArticleAuthor] = useState<IUser>();
        const [series, setSeries] = useState<ISeries>();

        const [createdDate, setCreateDate] = useState<string>();
        const [price, setPrice] = useState<number>();
        const [imageLink, setImageLink] = useState<string>();
        const [contents, setContents] = useState<string>();

        function goToSeries(e:any){
            e.preventDefault();
            history.push(`/series/${series?.series_id}`)
        }

        useEffect(() => {
            //ARTICLES
            api.articles.getIndv(numId).then((responce) => {
                    const article:IArticle = responce.data;
                    setArticle(article);
                    setCreateDate(article.created_on);
                    setPrice(article.price);
                    setImageLink(article.image_link);
                    setContents(article.contents);
                api.users.getById(article.user_user_id).then((responce) => {
                    setArticleAuthor(responce.data[0])
                });
                api.series.getById(article.series_series_id).then((responce) => {
                    setSeries(responce.data);
                });
                }).catch((error) => console.error(`Error: ${error}`));
        }
        ,[]);
            //IF THERE IS NO SERIES RETURN THIS
            if(!series){
            return (
            
            <MainLayout>
            
            <section className="indvArticle">
            <Row>
                <Col>
                    <h1>{article?.title}</h1>
                    <h3>{article?.preview}</h3>
                </Col>  
            </Row>
        
            <Row>
                <Col className="d-flex flex-row-reverse">
                    <Button variant="primary">Facebook</Button>{' '}
                    <Button variant="link">Twitter</Button> 
                </Col>
            </Row>
                    <hr/>   
                    <Row className="d-flex flex-row-reverse" id="authorInfo">
                        <Col xs={3} lg={2}>    
                            <p>{article?.created_on.slice(0,10)} </p>
                        </Col> 
                        <Col xs={5} lg={1}>
                            <p>{articleAuthor?.first_name}  {articleAuthor?.last_name}</p>
                        </Col>
                        <Col xs={3} lg={1} >
                            <Image id="authorAvatar" src={articleAuthor?.user_image_link} roundedCircle  />
                        </Col>
        
           
                    </Row>


                <Image className="mx-auto articleImage" src={article?.image_link} />

                <p> {article?.contents}</p>
             </section>

            </MainLayout>
                  
            )
            }
            //IF THERE IS A SERIES RETURN THIS
            else{
                return (
            
                    <MainLayout>
                      
                    <section className="indvArticle">
                    <Row>
                        <Col>
                            <h1>{article?.title}</h1>
                            <h3>{article?.preview}</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <Col>
                            <span className="badge badge-pill badge-warning">Series:</span>
                            <h6 onClick={goToSeries}>{series.series_title}</h6>
                        </Col>
                        <Col className="d-flex flex-row-reverse">
                            <Button variant="primary">Facebook</Button>{' '}
                            <Button variant="link">Twitter</Button> 
                        </Col>
                    </Row>
      
                    <hr/>   
                    <Row className="d-flex flex-row-reverse" id="authorInfo">
                        <Col xs={3} lg={2}>    
                            <p>{article?.created_on.slice(0,10)} </p>
                        </Col> 
                        <Col xs={5} lg={1}>
                            <p>{articleAuthor?.first_name}  {articleAuthor?.last_name}</p>
                        </Col>
                        <Col xs={3} lg={1} >
                            <Image id="authorAvatar" src={articleAuthor?.user_image_link} roundedCircle  />
                        </Col>
        
           
                    </Row>
                    {/* ADD SOCIALS INTO USER DATABASE */}
                
        
        
                        <Image className="mx-auto articleImage" src={article?.image_link} />
        
                        <p> {article?.contents}</p>
                     </section>
        
                    </MainLayout>
                          
                    ) 
            }
    }

export default IndvArticle;
    
    