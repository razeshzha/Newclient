import Register from '@/components/auth/register'
import React from 'react'
import Link from "next/link"

const Page = () => {
    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <div className='md:border border-gray-400 rounded-md  h-fit w-full md:w-fit p-4'>
                <div className='flex flex-col items-center tracking-wider'>
                    <h1 className='text-xl font-bold '>Register</h1>
                    <p>welcome</p>
                </div>
                <div>
                    <Register />
                </div>
                <div className='mt-4 tracking-wider text-center'>
                    <p>Already have an account? <Link href='/login'><span className="text-blue-600 font-semibold">Login</span></Link></p>
                </div>
            </div>

        </div>
    )
}

export default Page