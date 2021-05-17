import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { IArticle } from '../../../services/crud-server/src/models/article';
import api from '../api';
import './styling.css';


//simulates a network request
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

//finds a user by a userID
function getUser(userID: string) {
  const user = api.users.getById(userID);
  console.log(user);
  return user;
}

export default function PayButton(_article: IArticle) {

  //when clicked gives an article that it was clicked on,
  // needs to add article to user_has_article table

  //get the logged in user


  const [isLoading, setLoading] = useState(false);
  const userID = localStorage.getItem("userID");

  //here i send the artucle, and the userID to the backend
  const payload = [_article, userID];

  //here I stringify the payload to send it to the server
  JSON.stringify(payload);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        api.articles.addToFav(payload).then((responce) => {

        }).catch((error) => { throw error });
        //add the article to the users favorited List -- sql user-has-article
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (

    <Button

      id="first"
      variant="primary"
      disabled={isLoading}
      onClick={handleClick}
    >
      <div className="border"></div>
      <div className="border"></div>
      {isLoading ? 'Loading…' : 'Add To Favourites'}
    </Button>



  );
}
