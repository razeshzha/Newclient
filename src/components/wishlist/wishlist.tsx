'use client';

import { getWishList } from '@/api/wishlist';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PageLoading from '../ui/page-loading';
import ProductCard from '@/components/product/product-card';
import { IProduct } from '@/interface/auth/product.interface';

const WishList = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryFn: getWishList,
    queryKey: ['wishlist'],
  });

  if (isLoading) {
    return <PageLoading />;
  }

  if (isError) {
    return (
      <div className="text-red-500">
        Error: {error instanceof Error ? error.message : 'Something went wrong'}
      </div>
    );
  }

  // Log response to inspect structure
  console.log('Wishlist API response:', data);

  // Safely extract wishlist items
  const wishlistItems = Array.isArray(data?.data?.data)
    ? data.data.data
    : Array.isArray(data?.data)
    ? data.data
    : [];

  return (
    <div className="px-10">
      <div className="my-4 tracking-wider text-xl font-semibold">
        <h1 className="text-pink-500">Your Wishlist</h1>
      </div>
      <div className="flex flex-wrap gap-6">
        {wishlistItems.length === 0 ? (
          <p className="text-gray-600">Your wishlist is empty. Start adding some products!</p>
        ) : (
          wishlistItems.map((product: IProduct) => (
            <div
              key={product._id}
              className="border rounded-md p-4 shadow-md w-full sm:w-[280px] bg-white"
            >
              <ProductCard product={product} wishlist={true} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishList;
