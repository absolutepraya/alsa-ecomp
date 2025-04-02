'use client';

import GoldText from '@/components/goldtext';
import BlurFade from '@/components/blurfade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Emboss from '@/components/emboss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const texts = ['1. Stay at Hotel Kartika One, Depok;', '2. Transportation from Soekarno-Hatta International Airport to Depok/Depok to Soekarno-Hatta International Airport(Weekly Package);', '3. Transportation to and from the competition venue; and', '4. Three meals per day.'];
const accomodationImages = ['/accomodation/acom_1.jpg', '/accomodation/acom_2.jpeg', '/accomodation/acom_3.jpeg', '/accomodation/acom_4.jpeg', '/accomodation/acom_5.jpeg', '/accomodation/acom_6.jpeg', '/accomodation/acom_7.jpeg'];

export default function Accomodation() {
  return (
    <div className="flex h-full flex-col items-center gap-8 px-0 pt-0 lg:gap-16 lg:pt-32">
      <BlurFade
        delay={0.2}
        offset={15}
        inView
      >
        <GoldText
          text="ACCOMMODATION"
          className="text-3xl font-extrabold lg:text-5xl"
        />
      </BlurFade>

      <div className="grid h-auto w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
        <BlurFade
          delay={0.2}
          offset={15}
          inView
          className="mx-autop flex h-fit w-full flex-col items-center gap-8"
        >
          <p className="font-h2 text-3xl text-primary lg:text-4xl">Accomodation Package</p>
          <div className="px-8 text-center lg:px-16">
            {texts.map((text, index) => (
              <p
                key={index}
                className="text-xl text-foreground"
              >
                {text}
              </p>
            ))}
          </div>
        </BlurFade>
        <BlurFade
          delay={0.2}
          offset={15}
          inView
          className="flex h-1/2 w-full flex-col items-center gap-8"
        >
          <p className="font-h2 text-3xl text-primary lg:text-4xl">Hotel Preview</p>
          <div className="relative h-40 w-full lg:h-80">
            <Swiper
              modules={[Navigation]}
              className="flex h-full w-full items-center justify-center"
              slidesPerView={1}
              centeredSlides={true}
              centeredSlidesBounds={true}
              navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
              }}
              loop={true}
            >
              {accomodationImages.map((competition, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="relative flex h-full w-full items-center justify-center">
                      <Image
                        src={competition}
                        width={500}
                        height={500}
                        priority={true}
                        alt={competition}
                        className="aspect-contain w-1/2 object-cover"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Image
              src="/comp/10.svg"
              width={90}
              height={90}
              priority={true}
              alt="Previous Competition"
              className="swiper-prev absolute left-[10%] top-1/2 z-10 h-14 w-14 -translate-y-1/2 cursor-pointer transition-all hover:scale-105 active:scale-95 active:brightness-75 lg:h-24 lg:w-24"
            />

            <Image
              src="/comp/9.svg"
              width={90}
              height={90}
              priority={true}
              alt="Next Competition"
              className="swiper-next absolute right-[10%] top-1/2 z-10 h-14 w-14 -translate-y-1/2 cursor-pointer transition-all hover:scale-105 active:scale-95 active:brightness-75 lg:h-24 lg:w-24"
            />
          </div>
        </BlurFade>
      </div>
      <a
        href="https://bit.ly/AccommodationE-Comp2025"
        target="_blank"
        className="transition-all hover:scale-105 active:scale-95"
      >
        <Emboss innerClassName="flex px-4 rounded-full text-2xl items-center justify-center h-fit text-center py-3 leading-none">
          <p>Register yourself here!</p>
        </Emboss>
      </a>
    </div>
  );
}
