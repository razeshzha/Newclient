/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { getCart } from '@/api/cart';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PageLoading from '../page-loading';

const Cart = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryFn: getCart,
    queryKey: ['cart'],
  });

  if (isLoading) return <PageLoading />;
  if (isError)
    return (
      <div className="text-red-500">
        Error: {error instanceof Error ? error.message : 'Something went wrong'}
      </div>
    );

  const cartItems = Array.isArray(data?.data?.items)
    ? data.data.items
    : Array.isArray(data?.items)
    ? data.items
    : [];

  const total = cartItems.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="px-10">
      <h1 className="text-2xl font-semibold text-pink-500 mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item: any) => (
            <div
              key={item._id}
              className="border p-4 rounded-lg flex justify-between items-center bg-white shadow-md"
            >
              <div>
                <h2 className="font-medium text-lg">{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <p className="text-gray-600">${Number(item.price).toFixed(2)}</p>
              </div>
              <p className="font-bold text-lg">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="text-right mt-6 text-xl font-semibold">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
