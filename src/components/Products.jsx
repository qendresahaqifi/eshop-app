import React from 'react'
import Heading from '../shared/Heading'
import Image1 from '../assets/product/p-1.jpg'
import Image2 from '../assets/product/p-2.jpg'
import Image3 from '../assets/product/p-3.jpg'
import Image4 from '../assets/product/p-4.jpg'
import Image5 from '../assets/product/p-5.jpg'
import Image6 from '../assets/product/p-3.jpg'
import Image7 from '../assets/product/p-7.jpg'
import Image8 from '../assets/product/p-9.jpg'
import Button from '../shared/Button'

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: 'Boat Headphones',
        price: '120',
        aosDelay: '0'
    },
    {
        id: 2,
        img: Image2,
        title: 'Rocky Mountain',
        price: '420',
        aosDelay: '200'
    },
    {
        id: 3,
        img: Image3,
        title: 'Goggles',
        price: '320',
        aosDelay: '400'
    },
    {
        id: 4,
        img: Image4,
        title: 'Printed',
        price: '220',
        aosDelay: '600'
    },
    {
        id: 5,
        img: Image5,
        title: 'Boat Headphones',
        price: '120',
        aosDelay: '0'
    },
    {
        id: 6,
        img: Image6,
        title: 'Rocky Mountain',
        price: '420',
        aosDelay: '200'
    },
    {
        id: 7,
        img: Image7,
        title: 'Goggles',
        price: '320',
        aosDelay: '400'
    },
    {
        id: 8,
        img: Image8,
        title: 'Printed',
        price: '220',
        aosDelay: '600'
    },
]

const Products = () => {
  return (
    <div>
        <div className='px-16'>
            { /* ------ Header Section ------ */ }
            <Heading title='Our Products' subtitle='Explore Our Products' />
            { /* ------ Body Section ------ */ }
            <div>
                <div>
                    { /* ------ Cards ------ */ }
                    <div className='mb-10 dark:text-white'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
                            {
                        ProductsData.map((data) => {
                            return <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='group'>
                                    <div className='relative space-y-3'>
                                        <img src={data.img} alt="" className='h-[180px] w-[260px] object-cover rounded-xl' />
                                        { /* ------ hover button ------ */ }
                                        <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
                                            <Button text="Add to cart" bgColor="bg-primary" textColor="text-white" />
                                        </div>
                                    </div>
                                    <div className='leading-7'>
                                        <h2 className='font-semibold'>{data.title}</h2>
                                        <h2 className='font-bold'>${data.price}</h2>
                                    </div>
                             </div>
                        })
                    }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products