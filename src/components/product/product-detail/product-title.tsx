/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import  {RatingStar}  from '@/components/ui/rating-stars';

import React from 'react'

interface IProp {
    name:string;
    rating:number
}

const ProductTitle:React.FC<IProp> = ({name,rating}) =>{
    return(
            <div className='flex items-center gap-10 mt-4'>
            <p className='tracking-wider  font-bold text-3xl'>{name}</p>
            <div className='flex gap-3 items-center font-bold'>
                <RatingStar rating={Math.ceil(rating)} onChange={function (_: any, value: any): void {
                    throw new Error('Function not implemented.');
                } }/>
                <p className='tracking-wider text-sm text-gray-500'>({rating})</p>
            </div>
            </div>
             
    )
}

export default ProductTitle