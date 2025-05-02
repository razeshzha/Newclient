import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { addToCart } from '@/api/cart';
import { AxiosError } from 'axios'; // Import AxiosError to type the error properly

export const useCart = () => {
  const queryClient = useQueryClient();

  const add = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      toast.success('Item added to cart!');
      queryClient.invalidateQueries({ queryKey: ['cart'] }); // Refresh cart query
    },
    onError: (error: unknown) => {
      // Check if the error is an instance of AxiosError
      if (error instanceof AxiosError) {
        // If it's an Axios error, access the response data safely
        toast.error(error?.response?.data?.message || 'Failed to add item to cart!');
      } else {
        // If it's not an Axios error, show a generic error
        toast.error('An unexpected error occurred!');
      }
    },
  });

  return { add };
};
