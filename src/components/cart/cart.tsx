'use client'

import React, { useEffect, useState } from 'react';
import api from '@/axios/api.axios';
import Image from 'next/image';

interface CartItem {
  _id: string;
  productId: {
    _id: string;
    name: string;
    coverImage?: string;
    price: number;
  };
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await api.get('/cart');
      setCartItems(res.data.items || []);
    } catch (err) {
      console.error('Error fetching cart:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (id: string) => {
    try {
      await api.delete(`/cart/remove/${id}`);
      setCartItems(cartItems.filter((item) => item._id !== id));
    } catch (err) {
      console.error('Failed to remove item:', err);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  if (loading) return <p className="p-4">Loading cart...</p>;

  return (
    <div className="p-4 w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border p-3 rounded-md"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={
                    item.productId.coverImage
                      ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/${item.productId.coverImage}`
                      : '/product/product.webp'
                  }
                  width={60}
                  height={60}
                  alt={item.productId.name}
                  className="rounded object-cover"
                />
                <div>
                  <p className="font-medium">{item.productId.name}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  <p className="text-sm text-gray-800">
                    Subtotal: रु. {(item.productId.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right font-semibold mt-4">
            Total: रु. {total.toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
