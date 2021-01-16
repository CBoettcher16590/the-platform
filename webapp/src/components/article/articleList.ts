import { atom, useRecoilState } from 'recoil';
import{ useEffect } from "react";
import {IArticle} from "../../../../services/crud-server/src/models/article";
import api from "../../api";

export const articleListState = atom({
    key: 'articleList',
    default: [] as IArticle[]
});

export function useArticleList () {

    const [ articleList, setArticleList ] = useRecoilState<IArticle[]>(articleListState);
  
    useEffect(() => {
        api.articles.get().then((responce) => {
            setArticleList(responce.data);
        }).catch((error) => console.error(`Error: ${error}`));
    },[]);

    return {
        articleList,
        setArticleList
    }
}