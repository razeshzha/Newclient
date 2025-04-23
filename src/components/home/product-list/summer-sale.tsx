'use client'

import React, { useEffect } from 'react'
import ProductList from '../products-list'
import { getAllTendingProduct } from '@/api/product';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const SummerSale = () => {
    const { isPending,isError, data, error } = useQuery({
        queryKey: ['Summer-products'],
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
                <ProductList title='Summer Products' isLoading={isPending} products={data?.data?.data ?? []} />
            }
        </div>
    )
}

export default SummerSale