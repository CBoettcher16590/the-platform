import React from "react";
import  { useState } from "react";


var Rating= require("react-rating");

export default function rating(props:any){
  const [rating1, setRating1] = useState(0);
return <>
<section>
<Rating />




  {/* <div  className="Rating">
          <rating1
           initialRating={rating1}
            onClick={(rate: rating.SetStateAction<number>) => setRating1(rate)}/>
</div> */}
</section>
</>
}
