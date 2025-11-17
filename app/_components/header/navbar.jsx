"use client"


import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({data}) => {
    const pathname = usePathname();

    return (
      
            <Link href={data.pathName}>   <li className= {`hover:text-primary cursor-pointer   p-4 rounded-full ${pathname == data.pathName ? 'text-white bg-main' : "" }`}  >{data.title}</li></Link>
    
    )
}

export default Navbar