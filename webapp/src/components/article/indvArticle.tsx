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
            //refresh
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
                                <h5>Likes: {article?.rating}</h5>
                            </Row>
                            <Row>
                                <Badge onClick={HandelRating(1)} className="badge" pill variant="success">
                                    Like
                                </Badge>
                                <Badge onClick={HandelRating(-1)} className="badge" pill variant="danger">
                                    DisLike
                                </Badge>
                            </Row>
                        </div>
                    </Col>


                    <div className="favButtonRelocationFund">
                        <FavButton{...article!} />
                    </div>

                    <div className="userProfileRow">
                    <Row className="d-flex flex-row-reverse" id="authorInfo">
                        <Col xs={3} lg={2}>
                            <p>{'Published   ' + article?.created_on.slice(0, 10)} </p>
                        </Col>
                        <Col className="authorNameSpaceIndArticleRow" xs={5} lg={1}>
                            <p>{articleAuthor?.first_name}  {articleAuthor?.last_name}</p>
                        </Col>
                        <Col xs={3} lg={1} >
                            <Image id="authorAvatar" src={articleAuthor?.user_image_link} roundedCircle />
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
                        <Col xs={4} md={2} >
                            <div className="InvArticleLikes">
                                <Row>
                                    <h5>Likes: {article?.rating}</h5>
                                </Row>
                                <Row>
                                    <Badge onClick={HandelRating(1)} className="badge" pill variant="success">
                                        Like
                                </Badge>
                                    <Badge onClick={HandelRating(-1)} className="badge" pill variant="danger">
                                        DisLike
                                </Badge>
                                </Row>


                            </div>
                        </Col>
                    </Row>

                    <div className="favButtonRelocationFund">
                        <FavButton{...article!} />
                    </div>
                    <div className="userProfileRow">
                        <Row className="d-flex flex-row-reverse" id="authorInfo">

                            <Col xs={3} lg={2}>
                                <p>{'Published   '+ article?.created_on.slice(0, 10)} </p>
                            </Col>

                            <Col className="authorNameSpaceIndArticleRow" xs={5} lg={1}>
                                <p>{articleAuthor?.first_name}  {articleAuthor?.last_name}</p>
                            </Col>

                            <Col xs={3} lg={1} >
                                <Image id="authorAvatar" src={articleAuthor?.user_image_link} roundedCircle />
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

