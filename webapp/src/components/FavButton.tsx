import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { IArticle } from '../../../services/crud-server/src/models/article';
import api from '../api';


//simulates a network request
function simulateNetworkRequest() {
<<<<<<< HEAD
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function PayButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {

        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button

      variant="primary"
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? 'Loading…' : 'Add To Favorites'}
    </Button>
  );
=======
    return new Promise((resolve) => setTimeout(resolve, 2000));
    }

//finds a user by a userID
function getUser(userID:string){
  const user = api.users.getById(userID)
  console.log(user)
  return user;
}
         
export default function PayButton(_article:IArticle) {

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

        }).catch((error) => {throw error});
        //add the article to the users favorited List -- sql user-has-article
        setLoading(false);
        });
      }
}, [ isLoading ]);
         
    const handleClick = () => setLoading(true);
         
    return (
             <Button
             
               variant="primary"
               disabled={isLoading}
               onClick={handleClick}
             >
               {isLoading ? 'Loading…' : 'Add To Favorites'}
             </Button>
);
>>>>>>> a2625d188d1b90f5c93971c485daf11fe6d20a2d
}
