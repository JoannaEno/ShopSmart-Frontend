import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text, } from "@/components/elements"
import React from 'react'

type DropdownProps = {
    active?: boolean
    label: string
    onClick?: () => void
    className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({ active = false, label, onClick, className }) => {
    return (
        <button className={`${className} text-black flex items-center px-2 lg:px-3`} onClick={onClick}>
            <Text className=''>{label}</Text>
            <FontAwesomeIcon icon={faChevronDown} className={`${!active ? 'text-yellow' : 'text-blue'} pl-1 lg:pl-3 `} />
        </button>
    )
}