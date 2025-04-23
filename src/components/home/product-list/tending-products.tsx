'use client'
import React, { useEffect } from 'react'
import ProductList from '../products-list'
import { useQuery } from '@tanstack/react-query'
import {getAllTendingProduct } from '@/api/product'
import toast from 'react-hot-toast'




const TendingProducts = () => {
    const { isPending,isError, data, error } = useQuery({
        queryKey: ['trending-products'],
        queryFn: getAllTendingProduct,
      })
      console.log('tending ',data,isPending)

      useEffect(()=>{
        if(isError){
            toast.error(error?.message ?? 'Something went wrong')
        }

      },[error,isError])

    return (
        <div className='mt-10'>
            {
                <ProductList title='Trending Products' isLoading={isPending} products={data?.data?.data ?? []} />
            }
        </div>
    )
}

export default TendingProducts