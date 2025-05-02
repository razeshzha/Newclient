'use client'
import { getWishList } from '@/api/wishlist'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import PageLoading from '../ui/page-loading'
import ProductCard from '@/components/product/product-card'
import { IProduct } from '@/interface/auth/product.interface'

const WishList = () => {
    const { isLoading, data, isError, error } = useQuery({
        queryFn: getWishList,
        queryKey: ['wishlist']
    });

    if (isLoading) {
        return <PageLoading />
    }

    if (isError) {
        return <div>Error: {error instanceof Error ? error.message : 'Something went wrong'}</div>
    }

    const wishlistItems = data?.data?.data;

    return (
        <div className='px-10'>
            <div className='my-4 tracking-wider text-xl'>
                <h1>Wishlist</h1>
            </div>
            <div className='flex flex-wrap'>
                {wishlistItems?.length === 0 ? (
                    <p>Your wishlist is empty. Start adding some products!</p>
                ) : (
                    wishlistItems?.map((product: IProduct) => (
                        <ProductCard key={product._id} wishlist={true} product={product} />
                    ))
                )}
            </div>
        </div>
    )
}

export default WishList;
