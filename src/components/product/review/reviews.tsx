 

import { getProductReviews } from '@/api/review'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ReviewCard from './review-card'
import { IReviews } from '@/interface/review.interface'

interface IProps {
    productId: string
}

const Reviews: React.FC<IProps> = ({ productId }) => {
    // Fetch reviews data with React Query
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['reviews', productId], // Adding productId to the query key for better cache handling
        queryFn: () => getProductReviews(productId),
    })

    // Handle loading state
    if (isLoading) {
        return <div>Loading...</div>
    }

    // Handle error state
    if (isError) {
        return <div>Error: {error instanceof Error ? error.message : 'Something went wrong'}</div>
    }

    // If no reviews, handle empty state
    if (!data?.data || data.data.length === 0) {
        return <div>No reviews available for this product.</div>
    }

    // Render reviews
    return (
        <div className='flex flex-wrap justify-center gap-4 mt-3'>
            {data.data?.map((review: IReviews) => (
                <ReviewCard key={review?._id} review={review} />
            ))}
        </div>
    )
}

export default Reviews
