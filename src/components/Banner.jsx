import React from 'react'
import Button from '../shared/Button'

const Banner = ({ data }) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 my-20'>
        <div className='px-16'>
            <div style={{ backgroundColor: data.bgColor }} className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white  rounded-3xl'>
                { /* ------ 1st Column ------ */ }
                <div className='p-6 sm:p-8'>
                    <p data-aos="slide-right" className='text-sm'>{data.discount}</p>
                    <h1 data-aos="zoom-out" className='uppercase text-4xl lg:text-7xl font-bold'>{"  "}{data.title}</h1>
                    <p data-aos="fade-up" className='text-sm' >{data.date}</p>
                </div>

                { /* ------ 2nd Column ------ */ }
                <div data-aos="zoom-in" aos-init="true" aos-animate="true" className='h-full flex items-center'>
                    <img src={data.img} alt="" className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover' />
                </div>

                { /* ------ 3rd Column ------ */ }
                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                    <p data-aos="zoom-out" className='font-bold text-xl'>{data.title2}</p>
                    <p data-aos="fade-up" className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
                    <p data-aos="fade-up" className='text-sm tracking-wide leading-5'>{data.title4}</p>
                    <div data-aos="fade-up" data-aos-offset="0" >
                        <Button text="Shop" bgColor='bg-white' textColor={`${data.textColor}`} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner