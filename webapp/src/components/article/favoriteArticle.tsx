import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { IArticle } from "../../../../services/crud-server/src/models/article";
import api from "../../api";


export default function FavoriteArticles(){

// Here we create a variable so we can set all of our Favorited Articles
const [favoriteArticles, setFavoriteArticles] = useState<IArticle[]>();

//Find User Id so we can find favorites for this specific user
const userID = localStorage.getItem("userID");

const history  = useHistory();

const GoToArticle = (article:IArticle) => (event:any) => {
    //here we find the article id for our Title, Link
    let articleId = article.article_id;
    //then We use history.push to redirect to that page
    history.push(`/article/${articleId}`)
    }

    useEffect(() => {
        //get all the articles that this user has favorited... user_has_article
        api.articles.getForFavList(userID).then((responce) => {
          const favArticles:IArticle[] = responce.data;
          return setFavoriteArticles(favArticles);
        })
      
      }, []);
    
return(
    <>
        <Card className="text-center purchasedArticles">
        <Card.Header><h3>Favourite Articles</h3></Card.Header>
        <Card.Body>

        <section className="favArticleRow">
        {favoriteArticles?.map(function(_art:IArticle){
            let image = _art.image_link;
            let title = _art.title;
            let preview = _art.preview;
            let createdOn = _art.created_on.slice(0,10);
            return (
            <div key={_art.article_id} className="favCard">

            <img className="favImage"src={image} />

            <div className="favArticle">

            <h2 onClick={GoToArticle(_art)}>{title}</h2>

                <p>{preview}</p>

        
            </div>
            </div>
            )
        })}
        </section> 
        </Card.Body>
        <Card.Footer className="text-muted" />
        </Card>
    </>
)
}