"use client"
import React, { useState } from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useSuggestProductQuery} from '@/services/product/product'
import { Provider } from 'react-redux'
import store from "@/store";

type SearchProps = {
    className?: string
    value?:any
    onChange?:any
    

}

export const Search: React.FC<SearchProps> = ({ className, value, onChange }) => {
   
    return (
        <div className={`${className} flex p-2  border-[0.1px] border-gray-300 rounded-md items-center`}>
            <FontAwesomeIcon
                icon={faSearch}
                className="w-3 h-3 m-[3px] text-black pr-2"
            />
            <input type="text" name={'smartSuggest'} value={value} onChange={onChange} placeholder='search here...' className='bg-transparent lg:w-[30rem] outline-none text-black active:outline-none' />
        </div>
    )
}
