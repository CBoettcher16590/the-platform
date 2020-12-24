
export interface IsignUp{
    Fname: string;
    Lname: string;
    email: string;
    password: string;
    success: boolean;
}


export interface IArticle{
    
    articleId: number;
    seriesId: number;
    statusTypeId:number;
    title:string;
    preview:string;
    contents:string;
    imageLink:string;
}