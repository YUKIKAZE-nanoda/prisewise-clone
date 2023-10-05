import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const navIcons = [
    {
        src: "/assets/icons/search.svg", alt: 'search'}

]
const Navbar = () => {
    return (
        <header className='w-full'>
            <nav className='nav'>
                <Link href="/" className='flex items-center gap-1'>
                    <Image width={27}
                        height={27}
                        alt='logo'
                        src="/assets/icons/logo.svg"

                    />
                    <p className='nav-logo'>Price<span className='text-primary'>Wise</span></p>
                </Link>
                <div className='flex items-center gap-5'></div>
            </nav>
        </header>
    )
}

export default Navbar