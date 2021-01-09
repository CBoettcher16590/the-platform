import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import './pages.css';
import { Nav, Form, FormControl, Button, Col, Container, Row, NavbarBrand } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import api from '../api';
import {IArticle} from '../../../services/crud-server/src/interfaces';



    function Article(props:{}){

      const [articles, setArticles] = useState<any>([]);

      useEffect(() => {
        api.articles.get().then(_articles => {
        setArticles(_articles);
        })
        }, []) ;

return<>
<MainLayout>

    <div>
    <h3>test</h3> 
    <p>{articles.map((article: IArticle) => {
    return article;
    })}</p>
    </div>

<section className="articleTop">
<Row>
<Col>
    <h1></h1>
    <h4>Eat, Sleep, Study, Survive</h4>
</Col>  
</Row>
<Row>
    <Col lg="2">
    <Image  id="authorAvatar" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" roundedCircle  />
</Col>
    <Col className="authorInfo" lg="10">
    <h5>Kent Brockman </h5>
    <p>Oct, 21 2020   <Button className="followButton" variant="outline-success">Follow   </Button></p>
</Col>
    <Button variant="primary">Facebook</Button>{' '}
    <Button variant="link">Twitter</Button>
</Row>
<hr/>
</section>
    <Image className="mx-auto articleImage" src="https://images.unsplash.com/photo-1606304073564-d87d47bb4b7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" rounded />

<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id feugiat risus. Quisque scelerisque non metus sit amet interdum. 
            Ut porta vi ligula sed hendrerit. Maecenas aliquet lectus quam. Curabitur auctor dui ultricies ligula dapibus, vitae imperdiet 
            nunc eleifend. Duis nec turpis malesuada, tincidunt mi cursus, ultrices lorem. Vestibulum finibus mattis nisi, ut ornare sapien tincidunt
            eu. Integer egestas hendrerit leo, eget blandit est efficitur id. Nam risus magna, euismod non viverra id, iaculis vel lorem. 
            Fusce eleifend urna rutrum, consequat neque ac, malesuada sem.
</p>
<p>
            Quisque feugiat pellentesque justo, eu scelerisque tellus malesuada at. Duis et risus sapien. Donec tincidunt pharetra turpis et hendrerit. 
            Proin posuere tellus non auctor varius. Ut id mattis nunc. Nulla at dapibus purus, vitae tempor massa. Vestibulum ante ipsum primis in 
            faucibus orci luctus et ultrices posuere cubilia curae; Quisque nisi nunc, posuere vitae feugiat eget, condimentum eu nunc. Vivamus quis 
            cursus libero. Etiam et dui ac ligula tincidunt ultricies vel vitae neque. Sed lectus justo, rhoncus ut scelerisque tempor, imperdiet vel 
            mauris. Vivamus mattis, purus eu vestibulum viverra, enim ex cursus mauris, non condimentum nibh tellus ac risus.
</p>
<p>
            Aliquam orci magna, sagittis nec dolor non, pretium porttitor ipsum. Proin scelerisque risus a purus porta, sit amet rhoncus 
            libero aliquam. Quisque maximus porttitor est, sit amet vehicula nibh. Pellentesque eget lectus lorem. Vivamus rhoncus quam 
            id elit ullamcorper malesuada. Vestibulum a pharetra dui, a pellentesque augue. Phasellus aliquet metus at sagittis cursus. Duis 
            efficitur hendrerit arcu, ut varius justo lacinia non. Fusce nunc urna, fermentum eu tristique nec, condimentum ut nibh. 
            Suspendisse potenti. Nullam tempor ex vel leo tempus gravida. Donec at dignissim ex. Vestibulum sagittis lectus eget quam rhoncus 
            blandit. Donec imperdiet diam id efficitur vehicula.
</p>
<p>
            In sagittis tincidunt purus et mollis. Vestibulum dapibus urna in ullamcorper porta. Vivamus auctor ultrices convallis. Morbi luctus,
             mauris non porta elementum, sem sem placerat elit, sed blandit leo orci vel felis. Vestibulum suscipit metus molestie eros blandit, 
             ut tincidunt neque malesuada. Fusce dignissim justo eget diam bibendum iaculis. Fusce convallis consequat ante, eget commodo metus 
             dictum quis. Curabitur elementum, neque vel mattis lacinia, urna turpis pharetra risus, nec ultricies risus felis nec leo. Morbi 
             ultricies massa sed erat accumsan accumsan. Maecenas rutrum ligula non urna varius, nec congue nisl semper. Donec quis diam lobortis,
             vida diam et, imperdiet metus. Praesent lacinia viverra quam, non aliquam lorem feugiat et. Morbi finibus imperdiet ex ac condimentum. 
             Mauris feugiat lorem ac sapien blandit, sit amet efficitur mi dictum. Pellentesque leo nisi, volutpat quis dapibus et, sagittis 
             quis sem. Etiam eleifend ex id nibh tristique efficitur. Sed posuere mattis venenatis. Integer libero lacus, pulvinar sed feugiat 
             id, tincidunt sed felis. Quisque et augue convallis, pharetra dolor ullamcorper, posuere mi. Nunc sagittis, elit vitae pharetra 
             pellentesque, ex diam volutpat risus, at ornare diam turpis id orci. pretium lacus. Aenean fringilla, dui vitae pulvinar commodo, 
             lacus justo aliquam est, sed bibendum lectus risus et odio. Proin sed nibh non ante molestie fringilla in vitae ligula. Praesent
              sem libero, suscipit vel justo sed, tempor ornare nulla. Donec ullamcorper finibus est, in condimentum risus ornare a. Nam sit 
              amet ipsum dignissim nunc vestibulum placerat. Vestibulum vel blandit ipsum, vitae cursus orci. Nulla fermentum imperdiet molestie.
</p>

        </MainLayout>
      
     
      
</>    
        }
export default Article;






            
            
               
