// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import BlogCards from './BlogCards';
import { useEffect, useState } from 'react';
import { client } from '../../Config/SanityConfig';

export default function BlogSlider() {
  const [blogs, setBlog]=useState([])

  const getBlogData=async()=>{
    // fetch("./blog.json")
    // .then((res)=> res.json())
    // .then((data)=>setBlog(data));
    const blogQuery=`*[_type=="blogSection"]{blogTopic, blogCategory, publishingDate,blogImage,_id,blogAuthor}`
    const blogData=await client.fetch(blogQuery);
    setBlog(blogData)
  }

  console.log(blogs)

  useEffect(()=>{
    getBlogData();
  },[])
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
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <SwiperSlide><BlogCards/></SwiperSlide> */}
      {
        blogs.map((blogsdet)=>(
          <SwiperSlide key={blogsdet._id} >
            <BlogCards blogInform={blogsdet}/>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
