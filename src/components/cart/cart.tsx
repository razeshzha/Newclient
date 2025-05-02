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
      <div className="text-red-500">
        Error: {error instanceof Error ? error.message : 'Something went wrong'}
      </div>
    );
  }

  // Assuming API response shape: { data: { items: IProduct[] } }
  const cartItems: IProduct[] = data?.data?.items || [];

  return (
    <div className="px-10">
      <div className="my-4 tracking-wider text-xl">
        <h1>Your Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start adding some products!</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {cartItems.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
