import React from "react";
import { RecoilRoot } from "recoil";
import IndvArticle from "../components/article/indvArticle";

export default function IndvArticlePage(props:{}){
    return (
    <RecoilRoot>
        <IndvArticle />
    </RecoilRoot>
    )
}