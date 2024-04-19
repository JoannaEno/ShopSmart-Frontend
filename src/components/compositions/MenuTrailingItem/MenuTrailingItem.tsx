import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Text } from '@/components/elements'

type MenuTrailingItemProps = {
    icon?: IconProp | any
    label: string
    children?: React.ReactNode
}

export const MenuTrailingItem: React.FC<MenuTrailingItemProps> = ({ icon, label, children }) => {
    return (
        <div className='flex flex-col items-center lg:pl-8'>
            {children ? children : <FontAwesomeIcon
                icon={icon}
                className="text-lg text-black pr-2"
            />}

            <Text className='text-black text-sm pt-2'>{label}</Text>
        </div>
    )
}
