/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IReviews } from '@/interface/review.interface'
import React from 'react'
import {RatingStar} from '@/components/ui/rating-stars'

interface IProps{
review:IReviews
}

const ReviewCard:React.FC<IProps> = ({review}) => {
  const {user,rating,review:comment} = review
  return (
    <div className='border border-gray-400 rounded-md tracking-wider p-3 min-h-[100px] max-w-[450px]'>
      <div className='flex gap-4 w-full'>
            <div className='h-10 w-10 rounded-full border border-blue-400 flex justify-center items-center  text-center'>
                      <p className='text-center text-3xl font-bold text-gray-500'>{user.firstName.split('')[0]}</p>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='flex items-center gap-2 w-fit'>
                    
                    <h3 className='text-xl font-semibold '>{`${user.firstName} ${user.lastName}`}</h3>
                    <div>
                    <RatingStar rating={rating ?? 0.5} onChange={function (_: any, value: any): void {
                throw new Error('Function not implemented.')
              } }/>
                  </div>
                  </div>
                  
                  <p className='text-lg font-[500]'>{comment}</p>
              </div>
        </div>

    </div>
  )
}

export default ReviewCard