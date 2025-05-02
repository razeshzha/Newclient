/* eslint-disable @typescript-eslint/no-unused-vars */
import api from "@/axios/api.axios";

export const getCart = async () => {
  try {
    const response = await api.get('/cart');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cart items');
  }
};

// ✅ Add this function and export it
export const addToCart = async ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) => {
  try {
    const response = await api.post('/cart', { productId, quantity });
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to add to cart');
  }
};
