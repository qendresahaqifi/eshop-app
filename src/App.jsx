import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Services from './components/Services'
import Banner from './components/Banner'
import headphones from './assets/hero/headphone.png'
import Products from './components/Products'
import smartwatch from './assets/category/smartwatch2-removebg-preview.png'
import Blog from './components/Blog'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Popup from './components/Popup'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollToTopButton from './components/ScrollToTopBtn'

const BannerData = {
    discount: '30% OFF',
    title: 'Fine Smile',
    date: '10 Oct to 28 Oct',
    img: headphones,
    title2: 'Air Solo Base',
    title3: 'Winter Sale',
    title4: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis',
    bgColor: '#f42c37',
    textColor: 'text-primary'
};

const BannerData2 = {
    discount: '30% OFF',
    title: 'HAPPY HOURS',
    date: '14 Oct to 31 Oct',
    img: smartwatch,
    title2: 'Smart Solo',
    title3: 'Winter Sale',
    title4: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis',
    bgColor: '#2dcc6f',
    textColor: 'text-brandGreen'
}

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blog />
      <Partners />
      <ScrollToTopButton />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  )
}

export default App