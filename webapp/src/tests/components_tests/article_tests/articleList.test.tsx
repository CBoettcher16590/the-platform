import React from 'react';

//article testing
//some of this is still not completly sure.
//Do I query the databse for this or not?

//unsure if I'll break apart. 

describe('Any Page or Compponent', () => {


    it('should test some part of the component or page', ()=>{




    })

})

/*
import { atom, useRecoilState } from 'recoil';
import{ useEffect, useState } from "react";
import {IArticle} from "../../../../services/crud-server/src/models/article";
import api from "../../api";
import Axios from 'axios';

// export const articleListState = atom({
//     key: 'articleList',
//     default: [] as IArticle[]
// });


export default function useArticleList () {


    // const [ articleList, setArticleList ] = useRecoilState<IArticle[]>(articleListState);
    const [ articleList, setArticleList ] = useState<IArticle[]>();

    useEffect(() => {
        const fetchData = async () => {
            await api.articles.get().then((res) => {
                setArticleList(res.data);
            }).catch((error) => console.error(`Error: ${error}`));
        }
        fetchData();
    },[]);

    return {
        articleList

    }
}

*/

