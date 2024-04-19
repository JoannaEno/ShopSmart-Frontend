import React from 'react'
// import Image1 from '../../../assets/image-1.svg'
// import Image2 from '../../../assets/image-2.svg'
import Image1 from "../../../assets/image-1.png"
import Image from 'next/image'


type StackedImageProps = {
    className?: string,
    image: any
    trailingImage?: any
}

export const StackedImage: React.FC<StackedImageProps> = ({ className, image, trailingImage }) => {
    return (
        <div className={`${className} relative w-20 h-20 shadow-xl shadow-white/30 `}>
            <div className={`absolute w-full h-full bottom-2 left-2 rounded-lg ${!trailingImage && 'bg-gray-500'}`}>
                {trailingImage && <Image
                    src={image}
                    alt="Image 1"
                    className="w-full h-full rounded-lg"
                />}
            </div>
            <div className={`absolute w-full h-full shadow-sm shadow-white/30 rounded-lg`}>
                <Image
                    src={image}
                    alt="Image 1"
                    className="w-full h-full rounded-lg"
                />
            </div>
            {/* <img
                src={Image1}
                alt="Image 1"
                className="absolute top-0 left-0 w-40 h-40"
            />
            <img
                src={Image2}
                alt="Image 2"
                className="absolute top-0 left-0 w-40 h-40"
            /> */}
        </div>
    )
}
