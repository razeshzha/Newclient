'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addToWishList, removeFromWishList } from '@/api/wishlist'
import { toast } from 'react-hot-toast'

export const useWishlist = () => {
  const queryClient = useQueryClient()

  const add = useMutation({
    mutationFn: addToWishList,
    onSuccess: () => {
      toast.success('Added to wishlist!')
      queryClient.invalidateQueries({ queryKey: ['wishlist'] }) // Correct queryKey format
    },
  })

  const remove = useMutation({
    mutationFn: removeFromWishList,
    onSuccess: () => {
      toast.success('Removed from wishlist!')
      queryClient.invalidateQueries({ queryKey: ['wishlist'] }) // Correct queryKey format
    },
  })

  return { add, remove }
}
