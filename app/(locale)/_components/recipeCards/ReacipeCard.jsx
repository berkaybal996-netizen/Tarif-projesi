import React from 'react'
import RecipeCardItem from "./RecipeCardItem"
import Title from '@/app/_components/title/title'

const ReacipeCard = (title, description,) => {

        const recipeDummyData = [
            {
                imageUrl: "/dummy/hamburger2.svg",
                tinyImageData: [
                    {
                        imageUrl:"/dummy/hamburger3.svg",
                        imageTitle:"hamburger3"
                    },
                     {
                        imageUrl:"/dummy/hamburger4.svg",
                        imageTitle:"hamburger4"
                    },
                ],
                surveyScore: 6.6,
                title: "Tavuklu Alfredo",
                desc: "sizlere efnes tarif alfredo",
                categories: ["Türk yemek", "Akşam yemek", "Tavuk"],
                bookMarkCount: 375,
                readCount: 1100,
                url:"/"

            },
             {
                imageUrl: "/dummy/hamburger2.svg",
                tinyImageData: [
                    {
                        imageUrl:"/dummy/hamburger3.svg",
                        imageTitle:"hamburger3"
                    },
                     {
                        imageUrl:"/dummy/hamburger4.svg",
                        imageTitle:"hamburger4"
                    },
                ],
                surveyScore: 9.6,
                title: "Tavuklu Alfredo",
                desc: "sizlere efnes tarif alfredo",
                categories: ["Türk yemek", "Akşam yemek", "Tavuk"],
                bookMarkCount: 375,
                readCount: 1100,
                url:"/"

            }
        ]


  return (
   
        
           
       


   <div className='mt-12'> 
    <Title title={"En Çok Tercih Edilenler"}  description={"En çok tercih edilen kategoriler"} showMore={true} />   
    
        <div className='flex items-center  mt-6'> 
                {
                    recipeDummyData.map((data, index) =>(
                                    <RecipeCardItem key={index} data={data}/> 
                    ))
                }

        </div>

    </div>
       
  )
}

export default ReacipeCard