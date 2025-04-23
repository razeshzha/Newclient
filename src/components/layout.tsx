
'use client'
import React from 'react'
import Header from './header';
import { usePathname } from 'next/navigation'
import Footer from './footer/footer';

interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
    const pathName = usePathname()
    const hideNav = pathName === '/login' || pathName === '/sign-up'
    return (
        <div className='h-full w-full '>
            {!hideNav && <div>
                <Header />
            </div>}
            <div className='min-h-[100vh] mb-10'>
                {children}
            </div>
            {/* footer */}
            {!hideNav && <div>
                <Footer />
            </div>}

        </div>
    )
}

export default Layout