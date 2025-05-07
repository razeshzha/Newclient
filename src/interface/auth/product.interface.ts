/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IImage {
    public_id:string,
    path:string
}
export interface IProduct {
    _id:string;
    name:string;
    coverImage:IImage;
    images?:IImage[];
    averageRating?:number;
    createdBy?:any;
    price:string;
    description?:string;
    
}