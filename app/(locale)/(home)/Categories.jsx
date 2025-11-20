import Title from '@/app/_components/title/title'
import React from 'react'
import CategoryItem from './_components/categories/CategoryItem';




const Categories = () => {
 
const dummyDataCategories = [
    {
        title: "Pizza",
        description: "En lezzetli pizzalar",
        image: "/dummy/hamburger.svg",
            count: 180,
             url: "/"

    },
       {
        title: "Pide",
        description: "En lezzetli pizzalar",
        image: "/dummy/hamburger.svg",
            count: 120,
             url: "/"

    },
       {
        title: "Hamburger",
        description: "En lezzetli pizzalar",
        image: "/dummy/hamburger.svg",
             count: 100,
             url: "/"
        
    },
       {
        title: "Hamburger",
        description: "En lezzetli pizzalar",
        image: "/dummy/hamburger.svg",
        count: 80,
             url: "/"

    },

];
 

  return (
    <div className='mt-12'> 
    <Title title={"En Çok Tercih Edilenler"}  description={"En çok tercih edilen kategoriler"} showMore={true} />   
    
        <div className='flex items-center  mt-6'> 
            {
                dummyDataCategories.map((data, index) =>(
                    <CategoryItem data={data} key={index} />
                )
                )
            }

        </div>

    </div>
  )
}

export default Categories