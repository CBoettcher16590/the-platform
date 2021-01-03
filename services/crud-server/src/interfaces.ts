
export interface IsignUp{
    memberid:number;
    Fname: string;
    Lname: string;
    email: string;
    password: string;
    phoneNumber:string;
    
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


