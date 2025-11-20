"use client"
import React, { useState} from 'react'
import { TbMenu2 } from 'react-icons/tb'
 
import MenuContainer from './MenuContainer'



export default function Menu() {
 
const [isOpen , setIsOpen] = useState(false);  
const handlesetOpen = () => {
    setIsOpen(!isOpen);
}  
    return (
        <> 
        <div className='px-4 py-3 flex gap-4 items-center border rounded-full border-default-border' onClick={handlesetOpen}>
            <TbMenu2 className='text-primary ' />
            <span className='text-primary text-base font-medium '> giriş yap  </span>
               
                {
                        isOpen && <MenuContainer setIsOpen={setIsOpen} />
                }
        </div></>
    )
}
