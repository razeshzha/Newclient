'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '@/api/cart';
import PageLoading from '../ui/page-loading';
import ProductCard from '@/components/product/product-card';
import { IProduct } from '@/interface/auth/product.interface';

const Cart = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryFn: getCart,
    queryKey: ['cart'],
  });

  if (isLoading) return <PageLoading />;

  if (isError) {
    return (
      <div className="text-red-500 p-4">
        Error: {error instanceof Error ? error.message : 'Something went wrong'}
      </div>
    );
  }

  // Log response to debug
  console.log('Cart API response:', data);

  // Extract cart items safely
  const cartItems: IProduct[] = Array.isArray(data?.data?.data)
    ? data.data.items
    : [];

  return (
    <div className="px-10">
      <div className="my-4 tracking-wider text-xl font-semibold">
        <h1 className="text-pink-500">Your Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Start adding some products!</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {cartItems.map((data) => (
            <div
              key={data._id}
              className="border rounded-md p-4 shadow-md w-full sm:w-[280px] bg-white"
            >
              <ProductCard product={data} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
