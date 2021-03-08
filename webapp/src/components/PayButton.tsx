import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { IArticle } from '../../../services/crud-server/src/models/article';

function addArticleToFavorites(user:IUser, article:IArticle){

}

function simulateNetworkRequest() {
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
}, [ ]);
         
    const handleClick = () => setLoading(true);
         
    return (
             <Button
             className = "paynow"
               variant="primary"
               disabled={isLoading}
               onClick={handleClick}
             >
               {isLoading ? 'Loading…' : 'Add To Favorites'}
             </Button>
);
}
         