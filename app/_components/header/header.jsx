 
import Image from 'next/image'
import React from 'react'
import { TbWorld } from "react-icons/tb";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import Link from 'next/link';
import Navbar from './navbar';



export default function Header() {



    const navigationItems = [
        { title: 'Anasayfa', pathName: '/' },
        { title: 'Tarifler', pathName: '/recipes' },
        { title: 'Favoriler', pathName: '/favorite' },
        { title: 'Hakkimizda', pathName: '/aboutus' },
    ];


    return (
        <div>
            <div className='flex items-center justify-end gap-3 border-b border-weak-border py-1'>
                <Link href={"/destek"} className='flex items-center gap-1 p-2'>
                    <IoHelpBuoyOutline />
                    <span>Destek Al</span>
                </Link>
                <Link href={"/iletisim"} className='flex items-center gap-1 p-2'>
                    <FiPhone />
                    <span>İletişim</span>
                </Link>
            </div>
            <div className='flex items-center justify-between py-4'>
                <figure>
                    <Image src={"/logo.svg"} width={121} height={43} alt='logo' />
                </figure>
                <ul className='flex items-center gap-6  '>
                        {
                            navigationItems.map((item, index) =>(
                                <Navbar key={index} data={item} />
                            ))
                        }
                  
                </ul>
                <div className='flex gap-3 items-center relative'>
                    <div className='px-4 py-3 flex gap-1 hover:bg-gray-50 cursor-pointer rounded-full'>
                        <TbWorld size={24} className='text-primary' />
                        <span className='text-primary text-base font-medium'>Türkçe</span>
                    </div>

                </div>
            </div>
        </div>
    )
}