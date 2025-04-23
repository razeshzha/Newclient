import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='relative tracking-wider min-h-[calc(100vh-5rem)] w-full mt-1'>

            <div className='absolute inset-0 h-full '>
                <Image
                    src='/hero/hero.webp'
                    width={1000}
                    height={1000}
                    className='w-full h-full'
                    alt='hero cover image'
                />
            </div>

            <div className='absolute inset-0 bg-black/40'></div>
            {/* content */}
            <div className='absolute top-1/3  z-50 max-w-[700px] px-4 '>
                {/* text */}
                <div className='tracking-wider'>
                    <h1 className='font-bold text-3xl mb-4'>
                        Discover your perfect style with just a click!
                    </h1>
                    <p>
                        Unbeatable deals and the latest trends are waiting for you.
                        Whether you&apos;re looking to upgrade your wardrobe or find your new favorite item, everything you need is right here.
                        Don&apos;t miss out—exclusive offers and top-quality selections are just a click away. Shop smart and shop now to get
                        the best of what we have to offer!
                    </p>
                </div>


                <div className='flex justify-start mt-6'>
                    <button
                        className='cursor-pointer  px-5 py-3 transition-all duration-300 bg-blue-600
                        hover:text-gray-200 hover:bg-blue-700 font-bold uppercase text-white  rounded-md'>
                        Shop Now
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Hero