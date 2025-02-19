'use client';

import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { competitionsData } from './data';
import Footer from '@/components/footer';

export default function Competitions() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-12 px-0 pt-36">
      <NavBar />

      <p className="text-5xl">COMPETITIONS</p>

      <Swiper
        modules={[Navigation]}
        className="relative flex h-[600px] w-full items-center justify-center"
        slidesPerView={1}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
      >
        {competitionsData.map((competition, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div className="absolute left-1/2 top-1/2 flex h-full w-[700px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-y-6">
                <div className="h-56 w-56 rounded-full bg-goldlight" />
                <p className="text-4xl text-primary">{competition.title}</p>
                <Emboss
                  innerClassName="px-6 py-3 rounded-xl text-justify"
                  toPercent="to-40%"
                >
                  <p>{competition.desc}</p>
                </Emboss>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-prev absolute left-[15%] top-24 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gold cursor-pointer">X</div>
        <div className="swiper-next absolute right-[15%] top-24 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gold cursor-pointer">X</div>
      </Swiper>

      <Footer />
    </div>
  );
}
