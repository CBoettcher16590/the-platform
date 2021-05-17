import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import './style.css';
import { Badge, Button, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { IArticle } from '../../../../services/crud-server/src/models/article';
import { IUser } from '../../../../services/crud-server/src/models/user';
import { IRating } from '../../../../services/crud-server/src/models/rating';
import { useHistory, useParams } from 'react-router';
import api from '../../api'
import { ISeries } from '../../../../services/crud-server/src/models/series';
import FavButton from '../FavButton';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

// import {UpArrow as Updoot} from '%PUBLIC_URL%/arrow-up.svg';
// import {DownArrow as DownDoot} from '%PUBLIC_URL%/arrow-down.svg';



const IndvArticle = () => {
    const params = useParams<{ id: string }>();
    const numId = parseInt(params.id);
    const history = useHistory();
    const loggedInUserId = localStorage.getItem("userID") || "";
    const [loggedInUser, setLoggedInUser] = useState<IUser>();



    const [article, setArticle] = useState<IArticle>();
    const [articleContents, setArticleContents] = useState<string>("");
    const [articleAuthor, setArticleAuthor] = useState<IUser>();
    const [series, setSeries] = useState<ISeries>();

    function goToSeries(e: any) {
        e.preventDefault();
        history.push(`/series/${series?.series_id}`)
    }




    const HandelRating = (userRating: number) => (event: any) => {
        
        event.preventDefault();
        //First we look to see if the user has already rated this article with the following api call
        api.rating.get().then((responce) => {
            let dupRating: IRating[] = responce.data.filter((_rating: IRating) => _rating.user_id === parseInt(loggedInUserId) && _rating.article_id === article!.article_id);
            
            

            if (dupRating[0]) {
                alert("You Can Only Rate An Article Once!");
            } else {
                //First Add New Info To Ratings Table
                api.rating.post({ article_id: article!.article_id, user_id: loggedInUserId, rating: userRating }).then(responce => {
                }).catch((error) => console.error(`Error: ${error}`));
                //then add new article Rating to the article table
                api.articles.updateRating({ newRating: newArticleRating, article_id: article!.article_id }).catch((error) => console.error(`Error: ${error}`));
            }
            refresh
            setTimeout(function () { history.go(0); }, 500)
        }).catch((error) => console.error(`Error: ${error}`));

        const newArticleRating = article!.rating += userRating;



    }

    useEffect(() => {

        api.articles.getIndv(numId).then((responce) => {
            const article: IArticle = responce.data;
            setArticle(article);
            setArticleContents(responce.data.contents);

            api.users.getById(article.user_user_id).then((responce) => {
                setArticleAuthor(responce.data[0])
            });

            api.series.getById(article.series_series_id).then((responce) => {
                setSeries(responce.data);
            });

            api.users.getById(parseInt(loggedInUserId)).then((responce) => {
                setLoggedInUser(responce.data[0]);
                if (article.price == "Subscribe" && responce.data[0].subscription == 0) {
                    alert("You must be Subscribed to See this Article");
                    history.push("/")
                }
            });
        }).catch((error) => console.error(`Error: ${error}`));
    }
        , []);



    //IF THERE IS NO SERIES RETURN THIS
    if (!series) {
        return (

            <MainLayout>

                <section className="indvArticle">
                    <Row>
                        <Col>
                            <div className="articleIndividualTitle">{article?.title}</div>
                        </Col>
                    </Row>

                    <Col xs={{ span: 4, offset: 8 }} md={{ span: 2, offset: 10 }}>
                        <div className="InvArticleLikesNoneSeriesVariant">
                            <Row>
                                <h5> LIKES {article?.rating}</h5>
                            </Row>
                        </div>
                    </Col>
                    <div className="buttonsRatingNoSeries">
                        <div className="slyButtonSpacing">
                            <Button onClick={HandelRating(1)}  size="sm" variant="outline-success" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.25 10.25L12 4.75L6.75 10.25" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 19.25V5.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> </Button>{' '}
                        </div>
                        <div>
                            <Button onClick={HandelRating(-1)}  size="sm" variant="outline-danger"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.25 13.75L12 19.25L6.75 13.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 18.25V4.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> </Button>{' '}
                        </div>
                    </div>


                    <div className="userProfileRow" >
                        <Row id="authorInfo" >

                            <Col xs={1.2} lg={1.2} md={1.2}>
                                <Image id="authorAvatar" src={articleAuthor?.user_image_link} roundedCircle />
                            </Col>

                            <Col xs={2} lg={2}  >
                                <p>{articleAuthor?.first_name}  {articleAuthor?.last_name}</p>
                            </Col>

                            <Col xs={2} md={3} lg={3}  >
                                <p>{'Published   ' + article?.created_on.slice(0, 10)} </p>
                            </Col>

                            <Col xs={1} lg={3} md={2} >
                                <div className="movingFaveButton">
                                    <div className="favButtonRelocationFund">
                                    <FavButton{...article!} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>


                    <hr />

                    <div className="articleIndidivualHook">{article?.preview}</div>

                    <Image className="mx-auto articleImage" src={article?.image_link} />

                    {/* danerouslySetHTML is prone to xss;  DOMPurify mitigates this */}
                    <div className="content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(articleContents) }}></div>

                </section>

            </MainLayout>

        )
    }
    //IF THERE IS A SERIES RETURN THIS
    else {
        return (

            <MainLayout>

                <section className="indvArticle">
                    <Row>
                        <Col>
                            <div className="articleIndividualTitle">{article?.title}</div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={8} md={10} >
                            <div className="seriesOnclickGo">
                                <span className="badge badge-pill badge-warning">Series:</span>
                                <h5 onClick={goToSeries}>{series.series_title}</h5>
                            </div>
                        </Col>
                        <Col xs={{ span: 4, offset: 8 }} md={{ span: 2, offset: 10 }}>
                            <div className="InvArticleLikesNoneSeriesVariantSeries">
                                <Row>
                                    <h5> LIKES {article?.rating}</h5>
                                </Row>
                            </div>
                        </Col>
                        <div className="buttonsRatingSeries">
                            <div className="slyButtonSpacing">
                                <Button onClick={HandelRating(1)} size="sm" variant="outline-success" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.25 10.25L12 4.75L6.75 10.25" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 19.25V5.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg> </Button>{' '}
                            </div>
                            <div>
                                <Button onClick={HandelRating(-1)} size="sm" variant="outline-danger"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.25 13.75L12 19.25L6.75 13.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 18.25V4.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg> </Button>{' '}
                            </div>
                        </div>
                    </Row>

                    <div className="userProfileRow" >
                        <Row id="authorInfo" >

                            <Col xs={1.2} lg={1.2} md={1.2}>
                                <Image id="authorAvatar" src={articleAuthor?.user_image_link} roundedCircle />
                            </Col>

                            <Col xs={2} lg={2}  >
                                <p>{articleAuthor?.first_name}  {articleAuthor?.last_name}</p>
                            </Col>

                            <Col xs={2} md={3} lg={3}  >
                                <p>{'Published   ' + article?.created_on.slice(0, 10)} </p>
                            </Col>

                            <Col xs={1} lg={3} md={2} >
                                <div className="movingFaveButton">
                                    <div className="favButtonRelocationFund">
                                    <FavButton{...article!} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    
                    <hr />

                    {/* ADD SOCIALS INTO USER DATABASE */}
                    <div className="articleIndidivualHook">{article?.preview}</div>


                    <Image className="mx-auto articleImage" src={article?.image_link} />



                    <div className="content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(articleContents) }}></div>

                </section>

            </MainLayout>

        )
    }
}

export default IndvArticle;

