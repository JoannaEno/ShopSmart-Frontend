"use client"

import React from 'react'
import { ReactComponent as HeroText } from "@/assets/HeroText.svg";
import { Text, Button, StackedImage } from "@/components/elements"
import Image1 from "../../../assets/image-1.png"
import Image2 from "../../../assets/image-2.png"
import Image3 from "../../../assets/image-3.png"
import Image4 from "../../../assets/image-4.png"
import { useRouter } from 'next/navigation';


export const Hero = () => {
    const router = useRouter()

    return (
        <div className='bg-gradient-to-r from-black_00 via-black_04 via-10% to-black w-full rounded-lg text-white'>
            <div className="bg-[url('../assets/hero-img.png')] overflow-x-auto overflow-y-hidden bg-no-repeat rounded-tl-lg rounded-bl-lg">
                <div className="flex w-full lg:px-16 px-8 lg:pt-32">
                    <div className="flex flex-col pt-16">
                        <StackedImage image={Image1} className='mb-8' />
                        <StackedImage image={Image2} className='mb-8' />
                        <StackedImage image={Image3} className='mb-8' />
                        <StackedImage image={Image4} className='mb-8' />
                    </div>

                    <div className="flex flex-col flex-grow items-end justify-center py-16 pr-8">
                        <div className='flex items-center bg-white_05 border-[2px] border-gray-300 rounded-full px-16 py-4 shadow-xl shadow-white/30'>
                            <Text level="h2" className='text-3xl'>A New Way To Getting Stuff at Ease</Text>
                        </div>
                        {/* <HeroText className='p-0 m-0' /> */}
                        <Text level="h1" className='text-5xl py-8 text-end'>Up to <strong>80% off</strong> on<br />all items till<br /><strong className='flex justify-end'>FEBRUARY 1<span className='text-3xl'>st</span></strong></Text>
                        <Button onClick={() => router.push('/product/listing')} icon label="Shop Now" className="bg-blue text-white p-4 rounded-md text-lg font-medium" />
                    </div>

                </div>

            </div>

        </div>
    )
}
