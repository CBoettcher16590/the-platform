import { atom, useRecoilState } from 'recoil';
import { useEffect, useState } from "react";
import { IArticle } from "../../../../services/crud-server/src/models/article";
import api from "../../api";
import Axios from 'axios';


export default function useArticleList() {


    // const [ articleList, setArticleList ] = useRecoilState<IArticle[]>(articleListState);
    const [articleList, setArticleList] = useState<IArticle[]>();

    useEffect(() => {
        const fetchData = async () => {
            await api.articles.get().then((res) => {
                setArticleList(res.data);
            }).catch((error) => console.error(`Error: ${error}`));
        }
        fetchData();
    }, []);

    return {
        articleList

    }
}