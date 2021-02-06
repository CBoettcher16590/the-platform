import { useState, useEffect } from "react";
import { IArticle } from "../../../../services/crud-server/src/models/article";
import api from "../../api";


export default async function FindPendingAricles(){

    const [pendingAtricles, setPendingAtricles] = useState<IArticle[]>();

    useEffect(() => {
     api.articles.get().then((responce) => {
        console.log("RESPONCE",responce)
      setPendingAtricles(responce.data?.filter((item:IArticle) => item.articleStatus === "1"))
      console.log("Pending1: ", pendingAtricles);  
      }).catch((error: any) => console.error(`Error: ${error}`)); 
          },[]);
  
      console.log("Pending2: ", pendingAtricles);  

        return {pendingAtricles, setPendingAtricles}
        
}