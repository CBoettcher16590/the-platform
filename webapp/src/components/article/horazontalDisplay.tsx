import React, { useEffect, useState } from 'react';      
import { CardDeck, Card } from 'react-bootstrap';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';
import PayButton from '../PayButton';

export default function HorazontalDisplay(props:{}){

const [article1, setArticle1] = useState<IArticle>();
const [article2, setArticle2] = useState<IArticle>();
const [article3, setArticle3] = useState<IArticle>();

const [articleList, setArticleList] = useState<IArticle[]>();

  useEffect(() => {
    api.articles.get().then((responce) => {
      //this console.log shows what information we have coming in(All of it is there)
      console.log(responce);
      setArticle1(responce.data[0]);
      setArticle2(responce.data[1]);
      setArticle3(responce.data[2]);
    }).catch((error: any) => console.error(`Error: ${error}`)); 
        },[]);
    
return <>

<section className="homeStories">
                        
  <div className="homeCard">
    <img className="cardImage" src={article1?.imageLink}/>
    <div className="article">
      <h2>{article1?.title}</h2>
      <p>
      {article1?.preview}
      </p>
      <p>
      {article1?.createdOn}
      </p>
      <PayButton/>
    </div>
  </div>


  <div className="homeCard">
    <img className="cardImage" src={article2?.imageLink}/>
    <div className="article">
      <h2>{article2?.title}</h2>
      <p>
      {article2?.preview}
      </p>
      <p>
      {article2?.createdOn}
      </p>
      <PayButton/>
    </div>
  </div>


  <div className="homeCard">
    <img className="cardImage" src={article1?.imageLink}/>
    <div className="article">
      <h2>{article3?.title}</h2>
      <p>
      {article3?.preview}
      </p>
      <p>
      {article3?.createdOn}
      </p>
      <PayButton/>
    </div>
  </div>

</section> 

</>
 }