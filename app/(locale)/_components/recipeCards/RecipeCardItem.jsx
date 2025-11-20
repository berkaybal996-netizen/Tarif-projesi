"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TiHeartFullOutline } from "react-icons/ti";
import Link from "next/link";

export default function RecipeCardItem({ data: { imageUrl, tinyImageData, surveyScore, title, desc, categories, bookMarkCount, readCount, url } }) {
    const [surveyScoreText, setSurveyScoreText] = useState("");
    useEffect(() => {
        if (surveyScore > 9) {
            setSurveyScoreText("Mük2o");
        } else if (surveyScore > 8) {
            setSurveyScoreText("İyidir");
        } else if (surveyScore > 7) {
            setSurveyScoreText("ortalama");
        } else if (surveyScore > 6) {
            setSurveyScoreText("vasat üstü");
        } else if (surveyScore > 5) {
            setSurveyScoreText("vasat");
        } else if (surveyScore > 4) {
            setSurveyScoreText("kötü");
        }
    }, [])
    return (
        <li className="border border-default-border rounded-[8px]">
            <div className="flex gap-4">
                {/* Sol taraftaki iki resim bloğu */}
                <div className="flex gap-[1px]">
                    <figure>
                        <Image
                            src={imageUrl}
                            width={150}
                            height={200}
                            alt={title}
                        />
                    </figure>
                </div>

                <div>
                    <figure className="flex flex-col gap-[1px]">

                        {
                            tinyImageData.map((data, index) => (
                                <Image
                                    src={data.imageUrl}
                                    width={150}
                                    height={200}
                                    alt={data.imageTitle}
                                />
                            ))
                        }
                    </figure>

                </div>

                {/* Sağdaki içerik */}
                <div className="py-4 pr-4 flex flex-col justify-between w-full">

                    {
                     surveyScore > 6 &&   

                        <div className="flex items-center gap-4">
                            <span className="bg-box rounded-full text-primary text-sm font-medium px-4 py-3"> {surveyScore}</span>
                            <span className="text-primary text-sm">{surveyScoreText} </span>
                        </div>
               
                            }
                    <div className="mt-3 px-4">
                        <div className="text-primary text-base font-medium">
                            {title}
                        </div>
                        <p className="mt-1 text-secondary text-sm font-normal">
                            {desc}
                        </p>
                    </div>

                    {/* Etiket listesi */}
                    <ul className="flex gap-3 items-center mt-6 px-4">

                        {
                            categories.map((category, index) => (
                                <li key={index} className="bg-box text-primary text-sm px-4 py-3 rounded-[4px]">
                                    {category}
                                </li>
                            ))
                        }
                    </ul>

                    {/* İncele Butonu */}
                    <div className="px-4 mt-6">
                        <Link href={url} className="bg-main text-white text-base font-medium py-3 px-4 rounded-[8px] cursor-pointer">
                            Tarifi İncele
                        </Link>
                    </div>
                    <div className="flex justify-between items-center px-4 py-6">
                        <div className="flex items-center gap-1">
                            <BsFillInfoCircleFill size={16} className="text-primary" />
                            <span className="text-sm text-primary">
                                {readCount} kişi tarafından okundu
                            </span>
                        </div>

                        <div className="flex items-center gap-1">
                            <TiHeartFullOutline size={16} className="text-primary" />
                            <span className="text-sm text-primary">
                                {bookMarkCount} kişi tarafından kaydedildi
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </li>
    );
}
