/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/hooks/useCart.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { addToCart } from '@/api/cart'; // API function to add item to cart

export const useCart = () => {
  const queryClient = useQueryClient();

  const add = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      toast.success('Item added to cart!');
      // Invalidate the cart query using the correct format
      queryClient.invalidateQueries({
        queryKey: ['cart'], // This is where the query key for cart is used
      });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to add item to cart!');
    }
  });

  return { add };
};
