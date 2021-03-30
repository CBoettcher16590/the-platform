import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import './style.css';
import {Button, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import {IArticle} from '../../../../services/crud-server/src/models/article';
import { IUser } from '../../../../services/crud-server/src/models/user';
import { useParams } from 'react-router';
import api from '../../api'



    const IndvArticle = () => {
        const params = useParams<{id:string}>();
        const numId = parseInt(params.id);

        const [article, setArticle] = useState<IArticle>();

        const [createdDate, setCreateDate] = useState<string>();
        const [price, setPrice] = useState<number>();
        const [imageLink, setImageLink] = useState<string>();
        const [contents, setContents] = useState<string>();
        const [articleAuthor, setArticleAuthor] = useState<number|string>();

        useEffect(() => {
            api.articles.getIndv(numId).then((responce) => {
                    const article:IArticle = responce.data;
                    setArticle(article);
                    setCreateDate(article.created_on);
                    setPrice(article.price);
                    setImageLink(article.image_link);
                    setContents(article.contents);
                    setArticleAuthor(article.user_user_id);
                    console.log(articleAuthor)
                    
                }).catch((error) => console.error(`Error: ${error}`));
        }
        ,[]);


        //need to get a way to find article author.  I keep getting undeffined back because on Promises
        // useEffect(() => {
        //     api.users.getById(authorId).then((responce) => {
        //         console.log("page",responce);
        //     }).catch((error) => console.error(`Error: ${error}`));
        //     }
        // ,[]);
            return (
            
            <MainLayout>
              
            <section className="indvArticle">
            <Row>
            <Col>
                <h1>{article?.title}</h1>

            </Col>  
            </Row>
            <Row>
                <Col lg="2">
                <Image  id="authorAvatar" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" roundedCircle  />
            </Col>
                <Col className="authorInfo" lg="10">
                <h5>Kent Brockman{article?.user_user_id}</h5>
                <p>{article?.created_on} <Button className="followButton" variant="outline-success">Follow   </Button></p>
            </Col>
                <Button variant="primary">Facebook</Button>{' '}
                <Button variant="link">Twitter</Button>
                <h5>{article?.preview}</h5>
            </Row>
                <hr/>             
           
                <Image className="mx-auto articleImage" src={article?.image_link} />
                <hr/>   
            <p> {article?.contents}</p>
             </section>
            </MainLayout>
                  
            )

    }

export default IndvArticle;
    
    