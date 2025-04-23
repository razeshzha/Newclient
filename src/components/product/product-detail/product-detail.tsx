/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import ProductTitle from './product-title'
import { IProduct } from '@/interface/auth/product.interface'
import { QuantityInput } from '@/components/ui/quantity-input'
import { useMutation } from '@tanstack/react-query'
import { addTOCart } from '@/api/cart'
import { addToWishList } from '@/api/wishlist'
import toast from 'react-hot-toast'
import { useState } from 'react'

interface IProps {
  product: IProduct | null
}

export const ProductDetails: React.FC<IProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  // Fallback UI if product is not available
  if (!product) {
    return <div className="text-center">Loading...</div> // You can replace this with a spinner or more sophisticated fallback UI
  }

  // Add to Cart Mutation
  const { isPending: addToCartPending, mutate: addToCartMutation } = useMutation({
    mutationFn: addTOCart,
    mutationKey: ['add-to-cart'],
    onSuccess(data: any) {
      console.log('add to cart', data)
      toast.success(data?.message ?? 'Added to cart')
    },
    onError: (err: Error) => {
      toast.error(err?.message ?? 'Add to cart failed.')
      console.log(err)
    }
  })

  // Add to Wishlist Mutation
  const { isPending: addToWishlistPending, mutate: addToWishlistMutation } = useMutation({
    mutationFn: addToWishList,
    mutationKey: ['add-to-wishlist'],
    onSuccess(data: any) {
      console.log('add to wishlist', data)
      toast.success(data?.message ?? 'Added to wishlist')
    },
    onError: (err: Error) => {
      toast.error(err?.message ?? 'Add to wishlist failed.')
      console.log(err)
    }
  })

  // Add Product to Cart
  const addProductToCart = () => {
    addToCartMutation({ productId: product._id, quantity })
  }

  // Add Product to Wishlist
  const addProductToWishlist = () => {
    addToWishlistMutation(product._id)
  }

  return (
    <div className="px-4 md:px-10">
      <div>
        <ProductTitle name={product?.name} rating={product?.averageRating ?? 0} />
        <p className="text-[20px] tracking-wider mt-5">
          रु. <span className="text-blue-500 font-bold">{product.price}</span>
        </p>
      </div>

      {/* Quantity Input */}
      <div className="mt-10">
        <p>Quantity</p>
        <QuantityInput value={quantity} setValue={setQuantity} />
      </div>

      {/* Buttons */}
      <div className="flex gap-5 flex-wrap mt-8">
        <button
          onClick={addProductToCart}
          disabled={addToCartPending}
          className="px-6 py-3 w-full md:w-[48%] rounded-md cursor-pointer text-lg font-bold tracking-wider bg-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed text-white "
        >
          {addToCartPending ? 'Adding...' : 'Add To Cart'}
        </button>

        <button
          onClick={addProductToWishlist}
          disabled={addToWishlistPending}
          className="disabled:cursor-not-allowed disabled:text-blue-400 px-6 py-3 w-full md:w-[48%] cursor-pointer text-lg font-bold tracking-wider text-blue-500 border border-blue-500 rounded-md"
        >
          {addToWishlistPending ? 'Adding...' : 'Add To Wishlist'}
        </button>
      </div>

      {/* Product Description */}
      <div className="mt-10 tracking-wider">
        <h1 className="font-bold text-xl mb-2">Description</h1>
        <p className="text-md">{product.description}</p>
      </div>
    </div>
  )
}
