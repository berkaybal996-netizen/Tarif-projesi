"use client"
import useClickOutside from '@/app/_hooks/useClickOutside';
import React, { useState, useRef   } from 'react'
 

export default function MenuContainer   ({setIsOpen}) {

    const [isLogin , setIsLogin] = useState(false);
    const menuRef= useClickOutside(() => {
        setIsOpen (false);
    });
     
  return (
    < > {
                    isLogin  ?
              
                
        <ul ref={menuRef} className='bg-white border-default-border rounded-sm w-full absolute  top-[50px]'>

            <li className='px-3 py-2 text-primary font-medium cursor-pointer   hover:bg-gray-100'>
                Profile
            </li>
            <li className='px-3 py-2 text-primary font-medium cursor-pointer   hover:bg-gray-100'>
                Tarif Defteri
            </li>
            <li className='px-3 py-2  text-primary font-medium cursor-pointer  hover:bg-gray-100  '>
                Favori
            </li>
             <li className='px-3 py-2  text-primary font-medium cursor-pointer hover:bg-gray-100 '>
                Oturumu Kapat
            </li>
        </ul>
            :
        
            <ul ref={menuRef}  className='bg-white border-default-border rounded-sm w-full absolute  top-[50px]'>

                <li className='px-3 py-2 '>
                    Giriş Yap
                </li>
                <li className='px-3 py-2 '>
                    Kayıt  Yap
                </li>

            </ul>  }
                </ >
  )
}