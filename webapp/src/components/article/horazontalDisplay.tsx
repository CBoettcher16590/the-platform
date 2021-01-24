import React, { useEffect, useState } from 'react';      
import { CardDeck, Card } from 'react-bootstrap';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';

export default function HorazontalDisplay(props:{}){

const [articleList, setArticleList] = useState<IArticle[]>();

  useEffect(() => {
    api.articles.get().then((responce) => {
      //this console.log shows what information we have coming in(All of it is there)
      console.log(responce);
      setArticleList(responce.data);
    }).catch((error: any) => console.error(`Error: ${error}`)); 
        },[]);

  

//   return <>

//   </>
}
