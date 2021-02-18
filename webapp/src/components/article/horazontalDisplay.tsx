import React, { useEffect, useState } from 'react';      
import { CardDeck, Card } from 'react-bootstrap';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import  {IUserLogin} from '../../api/login/index';
import api from '../../api';
import PayButton from '../PayButton';




export default function HorazontalDisplay(props:{}, article:IArticle){

  var [article1, setArticle] = useState<IArticle>(); 

// const [article1, setArticle1] = useState< IArticle >();
// const [article2, setArticle2] = useState<IArticle>();
// const [article3, setArticle3] = useState<IArticle>();

// const [articleList, setArticleList] = useState<IArticle[]>();

const [user, setUser] = useState<IUserLogin>();

  useEffect(() => {
    api.articles.get().then((responce) => {
      
     setArticle(responce.data[0]);

      // setArticle1(responce.data[0]);
      // setArticle2(responce.data[1]);
      // setArticle3(responce.data[2]);
    }).catch((error: any) => console.error(`Error: ${error}`)); 
        },[]);
    

    useEffect(()=> {
    
      let userId = localStorage.getItem(user?.userId!);
      console.log(userId);

    }, []);

return <>

<section className="homeStories">

                        
  <div className="homeCard">
    <img className="cardImage" src={article.imageLink} />
    <div className="article">
      <h2>{article.title}</h2>
      <p> 
      {article.preview}
      </p>
      <p>
      {article.createdOn}
      </p>
      <PayButton />
    </div>
  </div>


  <div className="homeCard">
    <img className="cardImage" src={article.imageLink} />
    <div className="article">
      <h2>{article.title}</h2>
      <p>
      {article.preview}
      </p>
      <p>
      {article.createdOn}
      </p>
      <PayButton/>
    </div>
  </div>


  <div className="homeCard">
    <img className="cardImage" src={article.imageLink} />
    <div className="article">
      <h2>{article.title}</h2>
      <p>
      {article.preview}
      </p>
      <p>
      {article.createdOn}
      </p>
      <PayButton/>
    </div>
  </div>

</section> 

</>
 }