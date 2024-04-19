import React from 'react'
import { Text, Button, Input } from "@/components/elements"
import { ReactComponent as Logo } from "@/assets/logo.svg"

export const Footer = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-app_light_bg lg:items-end p-8 lg:p-16">
            <div className="flex flex-col">
                {/* <div className='font-extrabold text-blue'>
                    L O G O
                </div> */}
                <Logo />
                <Text className='text-black py-4 lg:py-8'>Be the first to  receive all update about both new and<br />old products.</Text>
                <div className="flex items-center">
                    <Input name={'subscribe'} label={'Email Address'} rounded={false} className='' />
                    <Button label="Subscribe" className="bg-blue text-white p-3 rounded-md text-lg font-medium ml-4" />
                </div>
            </div>
            <div className="flex flex-grow justify-between pl-4 lg:pl-16">
                <Text className='text-black '>Terms of Service</Text>
                <Text className='text-black '>Privacy Policy</Text>
                <Text className='text-black '>Security</Text>
                <Text className='text-black '>Sitemap</Text>
                <Text className='text-gray-400 '>© 2024 Bayafy. All rights reserved.</Text>
            </div>
        </div>
    )
}
