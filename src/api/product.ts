/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "@/axios/api.axios";


export const getAllProducts = async() =>{
    try{
        const response = await api.get('/product')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const getAllTendingProduct = async() =>{
    try{
        const response = await api.get('/product')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const getAllSummerSale = async() =>{
    try{
        const response = await api.get('/product')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const getProductById = async(id:string) =>{
    try{
        const response = await api.get(`/product/${id}`)
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}