'use client'

import React from 'react'
import Image from 'next/image'
import { IProduct } from '@/interface/auth/product.interface'
import Link from 'next/link'
import { GoTrash } from "react-icons/go"
import { useWishlist } from '@/app/hooks/useWishlist'
import { useCart } from '@/app/hooks/useCart'

interface IProp {
  product: IProduct
  wishlist?: boolean
}

const ProductCard: React.FC<IProp> = ({ product, wishlist = false }) => {
  const { coverImage, price, name, _id } = product
  const { remove } = useWishlist()
  const { add: addToCart } = useCart()

  const handleRemove = async () => {
    try {
      await remove.mutateAsync(_id)  // Using mutateAsync for better async control
    } catch (err) {
      console.error("Error removing from wishlist:", err)
    }
  }

  const handleAddToCart = async () => {
    try {
      await addToCart.mutateAsync({ productId: _id, quantity: 1 })
    } catch (err) {
      console.error("Error adding to cart:", err)
    }
  }

  return (
    <div className='relative overflow-hidden tracking-wider border border-gray-300 w-fit rounded-md'>
      {/* Image */}
      <div className='h-50 w-60 aspect-square'>
        <Image
          className='h-full w-full transition-all object-cover duration-300 hover:scale-[1.1]'
          layout="responsive"
          width={500}
          height={500}
          src={coverImage ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/${coverImage}` : '/product/product.webp'}
          alt={name}
        />
      </div>

      {/* Details */}
      <div className='p-3'>
        <p className='text-[15px]'>{name}</p>
        <span className='text-[15px]'>रु.{price.toLocaleString()}</span>
      </div>

      {/* View Detail Button */}
      <Link href={`/product/${_id}`}>
        <button className='cursor-pointer py-3 w-full text-[14px] bg-black text-white font-semibold'>
          View Detail
        </button>
      </Link>

      {/* Wishlist specific actions */}
      {wishlist && (
        <>
          <div
            className='absolute top-2 right-2 z-50 w-fit h-fit cursor-pointer'
            onClick={handleRemove} // Remove from wishlist
            aria-label="Remove from wishlist"
          >
            <GoTrash className='text-red-500' size={22} />
          </div>

          <button
            onClick={handleAddToCart} // Add to cart
            className='w-full py-2 text-[14px] bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200'
            aria-label="Add to cart"
          >
            Add to Cart
          </button>
        </>
      )}
    </div>
  )
}

export default ProductCard
