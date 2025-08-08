"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import slideImg1 from "../public/assets/s1.png";
import slideImg2 from "../public/assets/s2.png";
import slideImg3 from "../public/assets/s3.png";

// Swiper CSS 임포트
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ImageSlider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      modules={[Autoplay]}
      speed={700}
      allowTouchMove={false}
      autoplay={{
        delay: 8500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Image src={slideImg1} alt="slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slideImg2} alt="slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slideImg3} alt="slide 3" />
      </SwiperSlide>
    </Swiper>
  );
}
