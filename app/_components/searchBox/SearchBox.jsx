import React from 'react'
import { RiRestaurant2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function SearchBox() {
    return (
        <div className="  bg-[url('/search-bg.svg')]  h-[450px] relative    items-center  flex   bg-no-repeat  justify-center items-center  w-full    bg-cover   before:content-['']  before:absolute  before:inset-0  before:bg-black/50">
            <div className='relative container mx-auto  items-center '> <div>
                <h1 className='text-white text-3xl font-bold'> Foody ile lezzet ara</h1>
                <p className='text-white text-medium'>ne yemek istiyon</p></div>

                <div className='mt-10 font-medium    bg-white p-4 flex  justify-between items-center rounded-2xl gap-4 '>
                    <div className='flex items-center  flex-1'>
                        <div > <RiRestaurant2Line size={48} color='red' />
                        </div>
                        <div className="flex  flex-col flex-1 gap-1 bg-white/20 px-4 py-2  rounded-full">
                            <p className=" font-medium">Canın ne istiyor</p>
                            <input
                                type="text"
                                placeholder="Restoran, yemek veya mutfak ara"
                                className=" h-12   bg-transparent    "
                            />
                        </div>
                    </div>
                    <div className='  items-center'>
                        <button className='bg-main text-white px-6 py-4 items-center  rounded-xl mr-4'>Yemekleri Listele</button>
                    </div>
                </div>

                <div className='flex flex-col mt-5 gap-4'>
                    <div className='text-white text-2xl font-bold'>Son aramalar</div>
                    <ul className='flex gap-5 '>
                        <li className='flex  items-center p-4 bg-white text-red rounded-xl text-xl'>Restoran <IoClose  size={24} color='red' /> </li>
                        <li className='flex  items-center p-4 bg-white text-red rounded-xl text-xl'>Yemek <IoClose  size={24} color='red' /> </li>
                        <li className='flex  items-center p-4 bg-white text-red rounded-xl text-xl'>Market <IoClose  size={24} color='red' /> </li>
                 
                    </ul>
                </div></div>
        </div>


    )
}
