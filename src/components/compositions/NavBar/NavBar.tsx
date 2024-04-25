

"use client";
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { MenuTrailingItem, Search } from "@/components/compositions"
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart, } from '@fortawesome/free-regular-svg-icons'
import { ReactComponent as CheckOut } from "@/assets/checkout.svg";
import { ReactComponent as Logo } from "@/assets/logo.svg"




export const NavBar = () => {
    // const [isNavOpen, setIsNavOpen] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [fix, setfix] = useState(false)
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }
    const router = useRouter()
    const pathname = usePathname()



    const setFixed = () => {
        if (window.scrollY >= 400) {
            // alert('hmmm')
            setfix(true)

        } else {
            setfix(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', setFixed)
    }, [])
    return (
        pathname.includes('login') || pathname.includes('register') ? <></> :
            <>

                <div className={`z-20 bg-black opacity-90 w-screen h-screen p-8 ${isNavOpen === true ? ' flex flex-col' : 'hidden'} lg:hidden fixed`}>
                    {/* <div onClick={toggleNav} className="flex justify-end">
                    <button >
                        <AiOutlineClose className='text-white text-3xl  font-bold' />
                    </button>
                </div> */}
                    <div className="flex flex-col font-medium text-[1.6rem] items-center  text-center h-full justify-center">
                        {/* <ul> */}

                        <Link onClick={() => { toggleNav() }} className={` ${pathname.includes('men') ? 'text-light border-b border-primary_2' : 'text-grey_1'}`} href="#">Men</Link>

                        <Link onClick={() => { toggleNav() }} className={` ${pathname.includes('women') ? 'text-light border-b border-primary_2' : 'text-grey_1'}`} href="#">Women</Link>

                        <Link onClick={() => { toggleNav() }} className={` ${pathname.includes('kids') ? 'text-light border-b border-primary_2' : 'text-grey_1'}`} href="#">Kids</Link>

                        <Link onClick={() => { toggleNav() }} className={` ${pathname.includes('sale') ? 'text-light border-b border-primary_2' : 'text-grey_1'}`} href="#">On Sale</Link>

                        {/* </ul> */}
                    </div>
                </div>

                <nav className={`flex w-full items-center justify-between py-4 lg:px-16 px-8 font-medium ${fix ? 'bg-wedding fixed top 0 z-20' : 'bg-white top-0 right-0 z-20'}  `} >

                    <div className='flex items-center'>
                        <div className='font-extrabold text-blue'>
                        ShopSmart
                    </div>
                        {/* <Logo /> */}
                        <div className={` font-medium text-xl  lg:hidden`} >
                            {!isNavOpen ? <HiMenuAlt3 onClick={toggleNav} className='text-darkColor dark:text-white text-4xl ' /> : <AiOutlineClose onClick={toggleNav} className='text-darkColor dark:text-white text-4xl ' />}
                        </div>

                        <div className="hidden lg:pl-12 lg:flex lg:items-center">
                            <a href="#" className={` ${pathname.includes('men') ? 'text-blue border-b border-primary_2' : 'text-black'} hover:text-blue`}>
                                Men
                            </a>
                            <span className='px-2'></span>
                            <a href="#" className={` ${pathname.includes('women') ? 'text-blue border-b border-primary_2' : 'text-black'} hover:text-blue`}>
                                Women
                            </a>
                            <span className='px-2'></span>
                            <a href="#" className={` ${pathname.includes('kids') ? 'text-blue border-b border-primary_2' : 'text-black'} hover:text-blue`}>
                                Kids
                            </a>
                            <span className='px-2'></span>
                            <a href="#" className={` ${pathname.includes('sale') ? 'text-blue border-b border-primary_2' : 'text-black'} hover:text-blue`}>
                                On Sale
                            </a>
                        </div>

                    </div>
                    <div className='flex items-center'>
                        <Search className='bg-white_05' />
                        <MenuTrailingItem icon={faUser} label='Profile' />
                        <MenuTrailingItem icon={faHeart} label='All Categories' />
                        <MenuTrailingItem label='Cart' ><CheckOut className="" /></MenuTrailingItem>
                    </div>


                </nav>

            </>

    )
}
