'use client'
import { getProductById } from '@/api/product'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import ImageSlider from './image-slider'
import {ProductDetails} from './product-detail'
import ReviewForm from '../../ui/review-form'
import PageLoading from '@/components/ui/page-loading'
import Reviews from '../review/reviews'
interface IProp {
    id:string
}

// const product = {
//     name:'Laptop',
//     category:{
//         name:'Electronics'
//     },
//     _id:'3',
//     coverImage: '/product/product.webp',
//     images:['/product/product.webp','/product/product.webp','/product/product.webp',],
//     price:'1000',
//     averageRating: 3.5,
//     description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, expedita? Amet rem itaque
//         facilis reprehenderit suscipit culpa cupiditate placeat facere, natus, nemo sequi fugiat alias
//         modi dolorem. Natus, nisi culpa!`,

// }

const ProductDetail:React.FC<IProp> = ({id}) => {
    const {isLoading,data,isError,error} = useQuery({
        queryKey:['get-product-by-id',id],
        queryFn:() => getProductById(id)
    })
    


    console.log('get by id',data)

    useEffect(()=>{
        if(isError){
            toast.error(error?.message ??'something went wrong')
        }
    },[error,isError])

    if(isLoading){
        return <PageLoading/>
    }
  return (
    <div className='flex flex-col px-10 '>
    <div className='flex flex-col lg:flex-row  gap-10 w-full h-full mt-1'>
        {/* left side */}
        {/* image section */}
            <div className='w-[400px] h-[400px] mx-auto'>
            <ImageSlider images={data?.data?.images ?? []}/>
            </div>
        {/* right side */}
        {/* product detail */}
        <div className='flex-1 '>
            <ProductDetails product={data?.data}/>
        </div>
    </div>
    <div className='mt-10'>
        {/*  */}
        <ReviewForm productId={id}/>
        <Reviews productId={id}/>
    </div>


    </div>
  )
}

export default ProductDetail