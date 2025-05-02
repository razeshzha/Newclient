'use client'
import Link from 'next/link'
import React from 'react'
import { CiHeart } from "react-icons/ci"
import { BsCart3 } from "react-icons/bs"
import { IoPersonOutline } from "react-icons/io5"
import { useAuth } from '@/context/auth.context'

const Header = () => {
    const { isAuthenticated, logout } = useAuth()
    console.log(isAuthenticated)

    return (
        <div className='tracking-wider flex shadow justify-between items-center py-6 px-10'>
            {/* logo */}
            <div>
                <p className='font-bold text-xl text-blue-500'>⚡ BrandName</p>
            </div>

            {/* center section */}
            <div className='flex gap-5 text-lg'>
                <Link href='/' className='transition-all duration-300 hover:text-blue-600 font-semibold'>
                    Home
                </Link>
                <Link href='/contact-us' className='transition-all duration-300 hover:text-blue-600 font-semibold'>
                    Contact Us
                </Link>
                <Link href='/about-us' className='transition-all duration-300 hover:text-blue-600 font-semibold'>
                    About Us
                </Link>
            </div>

            {/* right section */}
            {isAuthenticated ? (
                <div className='flex items-center gap-4'>
                    <Link href='/wishlist'>
                        <CiHeart className='text-gray-600 font-bold transition-all duration-300 hover:scale-[1.1]' size={28} />
                    </Link>
                    <Link href='/cart'>
                        <BsCart3 className='text-gray-600 font-bold transition-all duration-300 hover:scale-[1.1]' size={24} />
                    </Link>
                    <IoPersonOutline className='text-gray-600 font-bold transition-all duration-300 hover:scale-[1.1]' size={24} />
                    <button
                        onClick={logout}
                        className='cursor-pointer text-lg font-semibold border border-red-500 text-red-500 px-3 py-2 min-w-[100px] rounded-md'
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className='flex gap-4 tracking-wider'>
                    <Link
                        href='/login'
                        className='cursor-pointer text-lg font-semibold border border-blue-500 text-blue-500 px-3 py-2 min-w-[100px] rounded-md block text-center'
                    >
                        Login
                    </Link>
                    <Link
                        href='/sign-up'
                        className='cursor-pointer text-lg font-semibold bg-blue-500 text-white px-3 py-2 min-w-[100px] rounded-md block text-center'
                    >
                        Register
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Header
