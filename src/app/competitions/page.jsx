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
import BlurFade from '@/components/blurfade';

export default function Competitions() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 py-36 lg:pb-[380px]">
      <BlurFade
        delay={0.3}
        offset={15}
        inView
      >
        <GoldText
          text="COMPETITIONS"
          className="text-4xl font-extrabold lg:text-6xl"
        />
      </BlurFade>

      <Swiper
        modules={[Navigation, Pagination]}
        className="relative flex h-screen w-full items-center justify-center lg:h-[600px]"
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
        {competitionsData.map((competition, index) =>
          index === 0 ? (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-y-6 px-8 lg:w-[700px]">
                  <BlurFade
                    delay={0.4}
                    offset={15}
                    inView
                  >
                    <div className="h-56 w-56 rounded-full bg-goldlight" />
                  </BlurFade>
                  <BlurFade
                    delay={0.5}
                    offset={15}
                    inView
                  >
                    <p className="text-4xl text-primary">{competition.title}</p>
                  </BlurFade>
                  <BlurFade
                    delay={0.6}
                    offset={15}
                    inView
                  >
                    <Emboss
                      innerClassName="px-6 py-3 rounded-xl text-justify"
                      toPercent="to-40%"
                    >
                      <p>{competition.desc}</p>
                    </Emboss>
                  </BlurFade>
                </div>
              </div>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-y-6 px-8 lg:w-[700px]">
                  <div className="h-56 w-56 rounded-full bg-goldlight" />
                  <p className="text-center text-4xl text-primary">{competition.title}</p>
                  <Emboss
                    innerClassName="px-6 py-3 rounded-xl text-justify"
                    toPercent="to-40%"
                  >
                    <p>{competition.desc}</p>
                  </Emboss>
                </div>
              </div>
            </SwiperSlide>
          )
        )}

        {/* <div className="swiper-cust-pagination absolute bottom-0 left-1/2 flex -translate-x-1/2 transform gap-x-2">
          {competitionsData.map((_, index) => (
            <div
              key={index}
              className="swiper-cust-bullet h-2 w-2 rounded-full bg-primary"
            />
          ))}
        </div> */}
      </Swiper>

      <BlurFade
        delay={0.7}
        offset={15}
        inView
        className={'swiper-prev absolute bottom-10 left-20 z-10 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-gold lg:left-[15%] lg:top-24'}
      ></BlurFade>
      <BlurFade
        delay={0.7}
        offset={15}
        inView
        className={'swiper-next absolute bottom-10 right-20 z-10 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-gold lg:right-[15%] lg:top-24'}
      ></BlurFade>
    </div>
  );
}
