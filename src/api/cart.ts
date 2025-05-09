// src/api/cart.ts
import api from "@/axios/api.axios";

// Get Cart Items
export const getCart = async () => {
  try {
    const response = await api.get('/cart');
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Failed to fetch cart items: ' + error.message);
    } else {
      throw new Error('Failed to fetch cart items: unknown error');
    }
  }
};

// Add to Cart
export const addToCart = async ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) => {
  try {
    const response = await api.post('/cart/add', { productId, quantity });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Failed to add to cart');
    } else {
      throw new Error('Failed to add to cart: unknown error');
    }
  }
};
