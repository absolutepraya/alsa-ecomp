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
import Image from 'next/image';

export default function Competitions() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 pb-12 pt-36 lg:pb-0">
      <BlurFade
        delay={0.3}
        offset={15}
      >
        <GoldText
          text="COMPETITIONS"
          className="text-5xl font-extrabold lg:text-6xl"
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
                  >
                    <div className="h-56 w-56">
                      <Image
                        src={competition.src}
                        width={230}
                        height={230}
                        priority={true}
                        alt={competition.title}
                      />
                    </div>
                  </BlurFade>
                  <BlurFade
                    delay={0.5}
                    offset={15}
                  >
                    <p className="text-4xl text-primary">{competition.title}</p>
                  </BlurFade>
                  <BlurFade
                    delay={0.6}
                    offset={15}
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
                  <div className="h-56 w-56">
                    <Image
                      src={competition.src}
                      width={230}
                      height={230}
                      alt={competition.title}
                      priority={true}
                    />
                  </div>
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
        className="swiper-prev absolute bottom-28 left-20 z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded-full lg:left-[20%] lg:top-96"
      >
        <Image
          src="/comp/10.svg"
          width={90}
          height={90}
          priority={true}
          alt="Previous Competition"
          className="transition-all hover:scale-105 active:scale-95 active:brightness-75"
        />
      </BlurFade>
      <BlurFade
        delay={0.8}
        offset={15}
        className="swiper-next absolute bottom-28 right-20 z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded-full lg:right-[20%] lg:top-96"
      >
        <Image
          src="/comp/9.svg"
          width={90}
          height={90}
          priority={true}
          alt="Previous Competition"
          className="transition-all hover:scale-105 active:scale-95 active:brightness-75"
        />
      </BlurFade>
    </div>
  );
}
