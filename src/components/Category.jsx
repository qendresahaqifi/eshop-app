import React from 'react'
import Image1 from '../assets/category/earphone.png'
import Image2 from '../assets/category/watch.png'
import Image3 from '../assets/category/macbook.png' 
import Image4 from '../assets/category/gaming.png'
import Image5 from '../assets/category/vr.png'
import Image6 from '../assets/category/speaker.png'
import Button from '../shared/Button'

const Category = () => {
  return (
    <div className='py-8'>
        <div className='px-16'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                { /* ------ 1st col ------ */ }
                <div className='col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-3'>Earphones</p>
                            <Button text='Browse' bgColor='bg-primary' textColor='text-white' />
                        </div>
                    </div>
                    <img src={Image1} alt="" className='w-[320px] absolute bottom-0' />
                </div>
                { /* ------ 2nd col ------ */ }
                <div className='col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>Gadget</p>
                            <Button text='Browse' bgColor='bg-white' textColor='text-brandYellow' />
                        </div>
                    </div>
                    <img src={Image2} alt="" className='w-[320px] absolute -right-4 lg:top-[40px]' />
                </div>
                { /* ------ 3rd col ------ */ }
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='text-white mb-[2px]'>Enjoy</p>
                            <p className='text-2xl mb-[2px] font-semibold'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>Laptop</p>
                            <Button text='Browse' bgColor='bg-white' textColor='text-primary' />
                        </div>
                    </div>
                    <img src={Image3} alt="" className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0' />
                </div>
                { /* ------ 4rth col ------ */ }
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='text-white mb-[2px]'>Enjoy</p>
                            <p className='text-2xl mb-[2px] font-semibold'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>Laptop</p>
                            <Button text='Browse' bgColor='bg-primary' textColor='text-white' />
                        </div>
                    </div>
                    <img src={Image4} alt="" className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0' />
                </div>
                { /* ------ 5th col ------ */ }
                <div className='col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-23'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>Earphone</p>
                            <Button text='Browse' bgColor='bg-white' textColor='text-brandGreen' />
                        </div>
                    </div>
                    <img src={Image5} alt="" className='w-[320px] absolute bottom-0' />
                </div>
                { /* ------ 6th col ------ */ }
                <div className='col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-23'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>Gadget</p>
                            <Button text='Browse' bgColor='bg-white' textColor='text-brandBlue' />
                        </div>
                    </div>
                    <img src={Image6} alt="" className='w-[200px] absolute right-0 bottom-0 ' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category