/* eslint-disable @typescript-eslint/no-explicit-any */

import ProductTitle from  './product-title'
import {IProduct} from '@/interface/auth/product.interface'
import {QuantityInput} from '@/components/ui/quantity-input'
import { useMutation } from '@tanstack/react-query'
import { addToWishList } from '@/api/wishlist'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { addToCart } from '@/api/cart'
interface IProps {
    product:IProduct
}
export const ProductDetails:React.FC<IProps> = ({product}) =>{
const [quantity,setQuantity] = useState(1)


    const {isPending:addToCartPending,mutate:addToCartMutation} = useMutation({
        mutationFn:addToCart,
        mutationKey:['add-to-cart'],
        onSuccess(data:any) {
            console.log('add to cart',data)
            toast.success(data?.message ?? 'Added to cart')
            
        },
        onError:(err:Error) =>{
            toast.error(err?.message ?? 'Add to cart failed.')
            console.log(err)
        }
    })

    const {isPending:addToWishlistPending,mutate:addToWishlistMutation} = useMutation({
        mutationFn:addToWishList,
        mutationKey:['add-to-wishlist'],
        onSuccess(data:any) {
            console.log('add to wishlist',data)
            toast.success(data?.message ?? 'Added to cart')
            
        },
        onError:(err:Error) =>{
            toast.error(err?.message ?? 'Add to cart failed.')
            console.log(err)
        }
    })


    const addProductToCart = () =>{

        addToCartMutation({productId:product._id,quantity})

    }

    const addProductToWishlist = () =>{

        addToWishlistMutation(product._id)

    }



    return(
        <div>
            <div>
                <ProductTitle name={product?.name} rating={product?.averageRating ?? 0}/>
                <p className='text-[20px] tracking-wider mt-5 '>रु. <span className='text-blue-500 font-bold'>{product.price}</span></p>
            </div>
            <div className='mt-10'>
                <p>Quantity input</p>
                <QuantityInput value={quantity} setValue={setQuantity}/>
            </div>
            {/* buttons */}
            
            <div className='flex gap-10 px-4  mt-8 w-full '>
                <button 
                onClick={addProductToCart}
                disabled={addToCartPending}
                className='px-4 py-2 w-1/2 md:max-w-[300px] rounded-md cursor-pointer text-lg font-bold tracking-wider  bg-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed text-white '>Add To Cart</button>
                <button 
                onClick={addProductToWishlist}
                disabled={addToWishlistPending}
                className='disabled:cursor-not-allowed disabled:text-blue-400 px-4 py-2 w-1/2 md:max-w-[300px] cursor-pointer text-lg font-bold tracking-wider text-blue-500 border border-blue-500 rounded-md'>Add To Wishlist</button>
            </div>
            <div className='mt-10 tracking-wider'>
                <h1 className='font-bold text-xl mb-2'>Description</h1>
                <p className='text-md '>{product.description}</p>
            </div>
            
        </div>
    )
}