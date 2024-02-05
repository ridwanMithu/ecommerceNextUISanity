// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import BlogCards from './BlogCards';

export default function BlogSlider() {
  return (
    <Swiper
    pagination={{
          clickable: true,
        }}
             breakpoints={{
              320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><BlogCards/></SwiperSlide>
    </Swiper>
  );
};
