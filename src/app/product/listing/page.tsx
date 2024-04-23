
import { Dropdown, ProductCard, Search } from '@/components/compositions'
import { listItems } from '@/utils'
import { faPlus, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import { Button, Text, } from "@/components/elements"

import { ReactComponent as HeadPhone } from '@/assets/headphone.svg'

const Listings = () => {
    const menuItems = ["Headsets", "Laptops", "Watches", "Earpods", "Phones", "Washing Machine", "Air Condition", "Cooking Gas"]
    return (
        <div className='flex px-8 lg:px-16 lg:pt-8'>
            <div className='flex justify-center lg:justify-start lg:flex-col lg:w-[23%] lg:pr-16'>
                <Text level="h2" className="text-black text-xl">Lifestyle</Text>
                <Search className='lg:my-6' />
                {menuItems.map((item, index) => (<button key={item + index} className='text-black flex items-center justify-between border-b-[1px] py-3'>
                    <Text className=''>{item}</Text>
                    <FontAwesomeIcon icon={faPlus} className='text-gray-400' />
                </button>))}
            </div>

            <div className="flex flex-col items-center w-full">
                <div className="flex border-y-[1px] w-full justify-between lg:py-3">
                    <div className="flex">
                        <Text className='text-black font-light'>Filters:</Text>
                        <Dropdown label={'Brand (1)'} active />
                        <Dropdown label={'Settings'} />
                        <Dropdown label={'Price'} />
                    </div>
                    <div className="flex">
                        <Text className='text-black font-light'>Sort by:</Text>
                        <Dropdown label={'Most Popular'} active className='text-blue' />
                    </div>
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 min-w-full place-content-between">
                    {listItems(8).map((_, index) => (<ProductCard key={index} link={`/product/${index + 1}`} className="text-[#101928] ">
                        {/* change the product images to normal images so they can accept url */}
                        <HeadPhone className="" />
                    </ProductCard>))}

                </div>
                <div className="flex justify-between w-full py-4 lg:py-8">
                    <Text className='text-black border-[1px] rounded-md py-1 px-4'>{'< Previous'}</Text>
                    <div className="flex">
                        {/* TODO: Make this dynamic later */}
                        <Text className='text-black   py-1 px-4'>{'1'}</Text>
                        <Text className='text-black   py-1 px-4'>{'2'}</Text>
                        <Text className='text-black border-[1px] rounded-md py-1 px-4'>{'3'}</Text>
                        <Text className='text-black   py-1 px-4'>{'...'}</Text>
                        <Text className='text-black   py-1 px-4'>{'10'}</Text>
                        <Text className='text-black   py-1 px-4'>{'11'}</Text>
                        <Text className='text-black   py-1 px-4'>{'12'}</Text>
                    </div>
                    <Text className='text-black border-[1px] rounded-md py-1 px-4'>{'Next >'}</Text>
                </div>
            </div>
        </div>
    )
}

export default Listings