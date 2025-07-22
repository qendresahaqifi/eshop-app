import React from 'react'
import Button from '../shared/Button'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone } from 'react-icons/fa';

const FooterLinks = [
    {
        id: 1,
        title: 'Home',
        link: "/#home"
    },
    {
        id: 2,
        title: 'About',
        link: "/#about"
    },
    {
        id: 3,
        title: 'Contact',
        link: "/#contact"
    },
    {
        id: 4,
        title: 'Blog',
        link: "/#blog"
    },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className='px-16'> 
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                { /* ------ Company Details ------ */ }
                <div className='py-8 px-4'>
                    <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
                    <p className='text-gray-600 dark:text-gray-400 lg:pr-24 py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum</p>
                    <Button text="Explore" bgColor="bg-primary" textColor="text-white" />
                </div>

                { /* ------ Footer Links ------ */ }
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='dark:text-white text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data) => {
                                    return <li key={data.id}>
                                        <a className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300' href={data.link}>
                                            {data.title}
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                    { /* ------ Quick Links ------ */}
                    <div className='py-8 px-4'>
                        <h1 className='dark:text-white text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data) => {
                                    return <li key={data.id}>
                                        <a className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300' href={data.link}>
                                            {data.title}
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                    { /* ------ Company Address ------ */ }
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='dark:text-white text-xl font-bold sm:text-left mb-3'>Address</h1>
                        <div className='dark:text-white'>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>78 Baker Road, London, UK</p>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <FaPhone />
                               <p>+44 20 7946 0958</p>
                            </div>

                            { /* ------ Social Media Links ------ */ }
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#"><FaInstagram className='text-3xl hover:text-primary duration-300' /> </a>
                                <a href="#"><FaFacebook className='text-3xl hover:text-primary duration-300' /> </a>
                                <a href="#"><FaLinkedin className='text-3xl hover:text-primary duration-300' /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer