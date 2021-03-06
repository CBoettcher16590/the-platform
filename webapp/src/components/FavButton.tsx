import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { IUser } from '../../../services/crud-server/src/models/user';
import api from '../api';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
    }
         
export default function PayButton() {

  const [isLoading, setLoading] = useState(false);

  const userID = localStorage.getItem("userID");
    
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
        api.users.getById(userID).then((responce) => {

        }).catch((error) => {throw error})
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
}
         