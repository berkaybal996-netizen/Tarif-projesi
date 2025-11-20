import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryItem  ({data : { title, description, url, image, count }}  )   {
  
 
      
 

  return (
    <Link href={url} className='flex flex-col items-center flex-1 gap-3'>
        <figure className='rounded-full p-1 object-cover'>
             <Image src={image} width={120} height={120} alt='hamburger' />
             
        </figure>
        <div className='text-center'>
            <span className='font-medium text-base text-primary'> {title} </span>
            <p className='font-normal mt-1 text-sm '>{count} adet tarif bulunmakta.</p>
        </div>


    </Link>
  )
}

