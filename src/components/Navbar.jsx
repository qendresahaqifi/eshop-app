import React from 'react'
import AppTheme from '../layout/AppTheme'
import { BiSearch } from 'react-icons/bi'
import { FaCartShopping } from 'react-icons/fa6'
import { FaCaretDown } from 'react-icons/fa'

const MenuLinks = [
    {
        id: 1,
        name: 'Home',
        link: "/#",
    },
    {
        id: 2,
        name: 'Shop',
        link: "/#shop",
    },
    {
        id: 3,
        name: 'About',
        link: "/#about",
    },
    {
        id: 4,
        name: 'Blogs',
        link: "/#blog",
    },

];

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#"
    }
]

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='px-16 py-4'>
            <div className='flex justify-between items-center'>
                {/* ------ Logo and Link ------ */}
                <div className='flex items-center gap-4' >
                    <a href="" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>EShop</a>
                    {/* ------ Menu Items ------ */}
                    <div>
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4'>
                                {
                                    MenuLinks.map((data) => {
                                       return <li key={data.id}>
                                            <a
                                            className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                                            href={data.link}>{data.name}</a>
                                        </li>
                                    })
                                }
                                { /* ------ Dropdown ------ */ }
                                <li className='relative cursor-pointer group'>
                                    <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>
                                        Quick Links
                                        <span>
                                        <FaCaretDown className='group-hover:rotate-180 duration-300' />
                                    </span>
                                    </a>
                                    { /* ------ Dropdown Links ------ */ }
                                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white '>
                                        <ul className='space-y-2'>
                                            {
                                                DropdownLinks.map((data) => {
                                                    return <li key={data.id}>
                                                        <a className='text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold' href={data.link}>{data.name}</a>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ------ Navbar Right ------ */}
                <div className='flex justify-between items-center gap-4'>
                    { /* ------ Search Bar ------ */}
                    <div className='relative group hidden sm:block '>
                        <input className='search-bar' type="text" placeholder='Search' />
                        <BiSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-0 mr-3 duration-200' />
                    </div>
                    { /* ------ Order Button ------ */ }
                   <button className='relative p-3' onClick={handleOrderPopup}>
                    <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400 cursor-pointer' />
                    <div className='size-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                        4
                    </div>
                   </button>
                   { /* ------ Dark Mode ------ */}
                    <div className='relative'><AppTheme className='w-12 absolute right-0 z-10' /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar