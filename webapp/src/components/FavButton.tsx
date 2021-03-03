import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

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
         