import React from 'react'
import Heading from '../shared/Heading'
import Image1 from '../assets/blogs/blog-1.jpg'
import Image2 from '../assets/blogs/blog-2.jpg'
import Image3 from '../assets/blogs/blog-3.jpg'

const BlogData = [
    {
        id: 1,
        title: "How to choose perfect smartwatch",
        subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2025 by Dilshad",
        img: Image1,
        aosDelay: "0"
    },
    {
        id: 2,
        title: "How to choose perfect gadget",
        subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2025 by Satya",
        img: Image2,
        aosDelay: "200"
    },
    {
        id: 3,
        title: "How to choose perfect VR headset",
        subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2025 by Sabir",
        img: Image3,
        aosDelay: "400"
    },
];

const Blog = () => {
  return (
    <div className='my-12'>
        <div className='px-16'>
           { /* ------ Header ------ */ }
           <Heading title="Recent News" subtitle="Explore Our Blogs" />

           { /* ------ Blog ------ */ }
           <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-4 md:gap-7">
                { /* ------ Blog Card ------ */ }
                {
                    BlogData.map((data) => {
                        return <div key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay} className='bg-white dark:bg-gray-900'>
                            { /* ------ Image ------ */ }
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.img} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' />
                            </div>
                            { /* ------ Content ------ */ }
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{data.published}</p>
                                <p className='font-bold line-clamp-1 dark:text-white'>{data.title}</p>
                                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                            </div>
                        </div>
                    })
                }
            </div>
           </div>
        </div>
    </div>
  )
}

export default Blog