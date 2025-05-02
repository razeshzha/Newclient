// src/app/hooks/useCart.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { addToCart } from '@/api/cart';

export const useCart = () => {
  const queryClient = useQueryClient();

  const add = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      toast.success('Item added to cart!');
      queryClient.invalidateQueries({ queryKey: ['cart'] }); // Refresh cart query
    },
    onError: (error: any) => {
      toast.error(error?.message || 'Failed to add item to cart!');
    },
  });

  return { add };
};
