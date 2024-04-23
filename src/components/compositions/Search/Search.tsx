import React from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SearchProps = {
    className?: string
}

export const Search: React.FC<SearchProps> = ({ className }) => {
    return (
        <div className={`${className} flex p-2  border-[0.1px] border-gray-300 rounded-md items-center`}>
            <FontAwesomeIcon
                icon={faSearch}
                className="w-3 h-3 m-[3px] text-black pr-2"
            />
            <input type="text" placeholder='search here...' className='bg-transparent lg:w-[30rem] outline-none text-black active:outline-none' />
        </div>
    )
}
