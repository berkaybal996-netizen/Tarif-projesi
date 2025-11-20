import Link from 'next/link';
import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Title = ({title, description, showMore= false}) => {
    return (

        <div className='justify-between items-center flex'>
            <div>
                <h2 className='font-bold text-[29px]'> {title}</h2>
                <p className='mt-1 text-secondary text-base font-normal'> {description}</p>

            </div>

            {
                showMore
                &&
                <div>
                    <Link className='flex items-center gap-2' href={"/"} >
                        <span className='text-main text-base font-medium'>  Tümünü Gör </span>
                        <MdOutlineKeyboardArrowRight size={16} color='text-main' />

                    </Link>

                </div>
            }
        </div>
    )
}

export default Title