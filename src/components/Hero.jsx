import React from 'react';
import Slider from 'react-slick';
import Image1 from '../assets/hero/headphone.png';
import Image2 from '../assets/category/vr.png';
import Image3 from '../assets/category/macbook.png';
import Button from '../shared/Button';

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphones",
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Virtual",
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Beats Solo",
        title: "Branded",
        title2: "Laptops",
    },
];

const Hero = ({ handleOrderPopup }) => {
    const settings = {
        dots: false,
        arrow: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

  return (
    <div className='px-16'>
        <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color'>
            <div className='pb-8 sm:pb-0'>
            {/* ------ Hero ------ */}
                <Slider {...settings}>
                    {
                        HeroData.map((data) => {
                            return <div key={data.id}> 
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    {/* ------ text content ------ */}
                                    <div className='flex flex-col justify-center gap-4 sm:pl-15 mt-12 sm:mt-40 sm:py-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[85px] xl:text-[150px] font-bold'>{data.title2}</h1>
                                        <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="500" data-aos-delay="300">
                                            <Button text='Shop By Category' bgColor='bg-primary' textColor='text-white' handler={handleOrderPopup} />
                                        </div>
                                    </div>
                                    {/* ------ image ------ */}
                                    <div className='order-1 sm:order-2 flex justify-center items-center'>
                                        <div data-aos="zoom-in" data-aos-once="true" className='relative z-10 sm:mt-30 lg:mt-20'>
                                            <img src={data.img} alt="" className='w-[300px] sm:w-[450] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-160 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
            </Slider>
            </div>
        </div>
    </div>
  )
}

export default Hero