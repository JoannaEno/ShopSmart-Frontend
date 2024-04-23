import { ProductCard, ProductDetailsCard } from '@/components/compositions'
import { ReactComponent as HeadPhone } from "@/assets/headphone.svg";
import { Text } from "@/components/elements"
import React from 'react'
import { listItems } from '@/utils';

const ProductDetails = () => {
    return (
        <div className='flex flex-col w-full px-4 lg:px-8'>

            <ProductDetailsCard description={`Lorem ipsum dolor sit amet consectetur. Sed cras commodo ante nunc
          proin mi in lacus adipiscing. Ullamcorper pretium in dui vitae
          adipiscing hendrerit a facilisis.`} />

            <div className=" min-w-full lg:px-8 px-4 py-6 lg:py-12 ">
                <div className="pb-4 lg:pb-8"><Text level="h2" className="text-black font-medium text-3xl">Similar Items You Might Like</Text></div>

                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 min-w-full justify-items-center">
                    {listItems(4).map((_, index) => (<ProductCard link={`/product/${index + 1}`} key={index} className="text-[#101928] ">
                        {/* change the product images to normal images so they can accept url */}
                        <HeadPhone className="" />
                    </ProductCard>))}

                </div>
            </div>
        </div>
    )
}

export default ProductDetails