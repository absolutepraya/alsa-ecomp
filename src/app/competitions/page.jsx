'use client';

import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
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
    <div className="relative flex flex-col items-center gap-y-20 px-0 pb-36 pt-36 lg:pb-0">
      <BlurFade
        delay={0.3}
        offset={15}
      >
        <GoldText
          text="COMPETITIONS"
          className="text-4xl font-extrabold lg:text-5xl"
        />
      </BlurFade>

      <Swiper
        modules={[Navigation]}
        className="relative flex h-[740px] w-full items-center justify-center lg:h-[600px]"
        slidesPerView={1}
        centeredSlides={true}
        centeredSlidesBounds={true}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
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
                    <p className="font-h2 text-4xl text-primary">{competition.title}</p>
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
                  <p className="font-h2 text-center text-4xl text-primary">{competition.title}</p>
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
      </Swiper>

      <div className='flex flex-row items-center justify-center gap-x-16 lg:gap-x-0 lg:mt-0 -mt-20'>
        <BlurFade
          delay={0.7}
          offset={15}
          className="swiper-prev z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded-full lg:absolute lg:left-[20%] lg:top-96"
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
          className="swiper-next z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded-full lg:absolute lg:right-[20%] lg:top-96"
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
    </div>
  );
}
