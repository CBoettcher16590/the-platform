import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import IndvArticle from '../../../components/article/indvArticle';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡


describe('<IndvArticle />', () => {

//renders
    xit('IndvArticle renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<IndvArticle />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    xit('HorazontalDisplay mounts component without crashing', () => {

        const wrapper = mount(<IndvArticle />);
        expect(wrapper.find(IndvArticle)).to.have.lengthOf(1);
    });

//exists
    xit('HorazontalDisplay profile renders', () => {
        const wrapper = shallow(<IndvArticle />);
        expect(wrapper).to.exist;
    });

})

/*
import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import './style.css';
import {Button, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import {IArticle} from '../../../../services/crud-server/src/models/article';
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

        useEffect(() => {
            api.articles.getIndv(numId).then((responce) => {
                //this console.log shows what information we have coming in(All of it is there)
                    const article:IArticle = responce.data;
                    setArticle(article);
                    setCreateDate(article.created_on);
                    setPrice(article.price);
                    setImageLink(article.image_link);
                    setContents(article.contents);
                }).catch((error) => console.error(`Error: ${error}`));
                
        },[]);

        return (
            
            <MainLayout>
            <section className="articleTop">
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
                <h5>Kent Brockman{article?.userId}</h5>
                <p>{article?.created_on} <Button className="followButton" variant="outline-success">Follow   </Button></p>
            </Col>
                <Button variant="primary">Facebook</Button>{' '}
                <Button variant="link">Twitter</Button>
                <h5>${article?.price}</h5>
            </Row>
            <hr/>             
            </section>
                <Image className="mx-auto articleImage" src={article?.image_link} />
            <p> {article?.contents}</p>
            </MainLayout>
                  
            )

    }

export default IndvArticle;
    
    
*/