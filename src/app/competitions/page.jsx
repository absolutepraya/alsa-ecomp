'use client';

import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { competitionsData } from './data';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';

export default function Competitions() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 pb-[380px] pt-36">
      <NavBar currentRoute="competitions" />

      <GoldText
        text="COMPETITIONS"
        className="text-6xl font-extrabold"
      />

      <Swiper
        modules={[Navigation, Pagination]}
        className="relative flex h-[600px] w-full items-center justify-center"
        slidesPerView={1}
        centeredSlides={true}
        centeredSlidesBounds={true}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-cust-pagination',
          bulletClass: '.swiper-cust-bullet',
          bulletActiveClass: '.swiper-cust-bullet-active',
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

        <div className="swiper-prev absolute left-[15%] top-24 z-10 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-gold">X</div>
        <div className="swiper-next absolute right-[15%] top-24 z-10 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-gold">X</div>

        {/* <div className="swiper-cust-pagination absolute bottom-0 left-1/2 flex -translate-x-1/2 transform gap-x-2">
          {competitionsData.map((_, index) => (
            <div
              key={index}
              className="swiper-cust-bullet h-2 w-2 rounded-full bg-primary"
            />
          ))}
        </div> */}
      </Swiper>

      <Footer />
    </div>
  );
}
