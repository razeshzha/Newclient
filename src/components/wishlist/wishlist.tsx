'use client'
import { getWishList } from '@/api/wishlist'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import PageLoading from '../ui/page-loading'
import  ProductCard from '@/components/product/product-card'
import { IProduct } from '@/interface/auth/product.interface'

const WishList = () => {

    const {isLoading,data} = useQuery({
        queryFn:getWishList,
        queryKey:['wishlist']
    })

    console.log('wishlist',data)
    if(isLoading){
        return <PageLoading/>
    }

  return (
    <div className='px-10'>
        <div className='my-4 tracking-wider text-xl' >
            <h1>Wishlist</h1>
        </div>
        <div className='flex flex-wrap'>
        {
            data?.data?.data?.map((product:IProduct) => <ProductCard key={product._id} wishlist={true} product={product}/>)
        }
        </div>
 
    </div>
  )
}

export default WishList