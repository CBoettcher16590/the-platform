import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import './style.css';
import {Badge, Button, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import {IArticle} from '../../../../services/crud-server/src/models/article';
import { IUser } from '../../../../services/crud-server/src/models/user';
import { IRating } from '../../../../services/crud-server/src/models/rating';
import { useHistory, useParams } from 'react-router';
import api from '../../api'
import { ISeries } from '../../../../services/crud-server/src/models/series';
import FavButton from '../FavButton';



    const IndvArticle = () => {
        const params = useParams<{id:string}>();
        const numId = parseInt(params.id);
        const history = useHistory();
        const loggedInUserId = localStorage.getItem("userID") || "";
        const [loggedInUser, setLoggedInUser] = useState<IUser>();


        const [article, setArticle] = useState<IArticle>();
        const [articleAuthor, setArticleAuthor] = useState<IUser>();
        const [series, setSeries] = useState<ISeries>();

        function goToSeries(e:any){
            e.preventDefault();
            history.push(`/series/${series?.series_id}`)
        }

        const HandelRating = (userRating:number) => (event:any) => {
            event.preventDefault();
            //First we look to see if the user has already rated this article with the following api call
            api.rating.get().then((responce)=> {
                let dupRating:IRating[] = responce.data.filter((_rating:IRating) => _rating.user_id === parseInt(loggedInUserId) && _rating.article_id === article!.article_id);
                
                if(dupRating[0]){
                    alert("You Can Only Rate An Article Once!");
                } else{
                    //First Add New Info To Ratings Table
                    api.rating.post({article_id:article!.article_id, user_id:loggedInUserId, rating:userRating}).then(responce => {
                    }).catch((error) => console.error(`Error: ${error}`));
                    //then add new article Rating to the article table
                    api.articles.updateRating({newRating:newArticleRating, article_id:article!.article_id}).catch((error) => console.error(`Error: ${error}`));
                }   
            //refresh
            setTimeout(function(){ history.go(0); }, 500)
            }).catch((error) => console.error(`Error: ${error}`));

            const newArticleRating = article!.rating += userRating;
         
         
           
          }

        useEffect(() => {
            
            api.articles.getIndv(numId).then((responce) => {
                const article:IArticle = responce.data;
                setArticle(article);

            api.users.getById(article.user_user_id).then((responce) => {
                setArticleAuthor(responce.data[0])
            });

            api.series.getById(article.series_series_id).then((responce) => {
                setSeries(responce.data);
            });

            api.users.getById(parseInt(loggedInUserId)).then((responce)=> {
                setLoggedInUser(responce.data[0]);
            if(article.price == "Subscribe" && responce.data[0].subscription == 0){
                alert("You must be Subscribed to See this Article");
                history.push("/")
            }
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
                    
                        <Col xs={{ span: 4, offset: 8 }} md={{ span: 2, offset: 10 }}>
                        <div className="InvArticleLikes">
                            <Row>
                                <h5>Likes: {article?.rating}</h5>
                            </Row>
                            <Row>
                                <Badge onClick={HandelRating(1)} className="badge" pill variant="success">
                                    Like
                                </Badge>
                                <Badge onClick={HandelRating(-1)}  className="badge" pill variant="danger">
                                    DisLike
                                </Badge>
                            </Row>
                            </div>
                        </Col>
                   
             
                    <hr/>  
                    <FavButton{...article!}/>        
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
                        <Col xs={8}md={10} >
                            <span className="badge badge-pill badge-warning">Series:</span>
                            <h5 onClick={goToSeries}>{series.series_title}</h5>
                        </Col>
                        <Col xs={4} md={2} >
                        <div className="InvArticleLikes">
                            <Row>
                                <h5>Likes: {article?.rating}</h5>
                            </Row>
                            <Row>
                                <Badge onClick={HandelRating(1)} className="badge" pill variant="success">
                                    Like
                                </Badge>
                                <Badge onClick={HandelRating(-1)}  className="badge" pill variant="danger">
                                    DisLike
                                </Badge>
                            </Row>
                            </div>
                        </Col>
                    </Row>
                    

                    <hr/> 
                    <FavButton{...article!}/>       
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
    
    