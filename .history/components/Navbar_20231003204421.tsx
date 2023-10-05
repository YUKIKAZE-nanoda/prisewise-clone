import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href="/" className='flex items-center gap-1'>
                <Image width={27}
                height={27}
                alt=''
                src="/assets/icons/logo.svg"
                
                />
            </Link>
        </nav>
    </header>
  )
}

export default Navbar