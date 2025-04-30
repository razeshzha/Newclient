/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/axios/api.axios";

/**
 * Get all wishlist items
 */
export const getWishList = async () => {
  try {
    const response = await api.get('/wishlist');
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data || error.message;
  }
};

/**
 * Add product to wishlist
 * @param productId - Product ID to add
 */
export const addToWishList = async (productId: string) => {
  try {
    const response = await api.post('/wishlist', { productId });
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data || error.message;
  }
};

/**
 * Remove product from wishlist
 * @param productId - Product ID to remove
 */
export const removeFromWishList = async (productId: string) => {
  try {
    const response = await api.delete(`/wishlist/${productId}`);
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data || error.message;
  }
};
