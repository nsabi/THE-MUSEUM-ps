// Core modules imports are same as usual
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';


// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import './../scss/components/_ps-swiper.scss'; // Pagination module
// eslint-disable-next-line
export default ({ sliders }) => {


  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const pagination = {
    "clickable": false,
    "renderBullet": function (index, className) {
      return '<span class="ps-swiper-pagination ' + className + '"><svg width="100%" height="100%" viewBox="0 0 100 100"><linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D6001C"/></linearGradient><circle stroke-linecap="round" cx="50" cy="50" fill="none" r="48" stroke="url(#a)" stroke-width="2" stroke-dasharray="315"  transform="rotate(-90 50 50)"/></svg></span>';
    }
  };

  return (
    <Swiper
      spaceBetween={80}
      slidesPerView={'auto'}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}

      navigation
      pagination={pagination}
    //onSlideChange={() => console.log('slide change')}
    //onSwiper={(swiper) => console.log(swiper)}
    >
      {sliders.map((slider, index) => <SwiperSlide key={index}><img src={slider} alt="IMG SLIDER" /></SwiperSlide>)}

    </Swiper>
  );
};