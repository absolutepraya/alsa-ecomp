'use client';
import Image from 'next/image';
import BlurFade from '@/components/blurfade';
import About from './about/page';
import Competitions from './competitions/page';
import Timeline from './timeline/page';
import Accomodation from './accomodation/page';

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="relative flex h-[100lvh] flex-col items-center justify-center gap-y-20 overflow-x-clip px-6 lg:px-0"
      >
        <div className="flex h-full w-full flex-col items-center justify-center">
          <BlurFade
            delay={0.3}
            offset={15}
          >
            <Image
              src="/logo.svg"
              alt="ALSA English Competition 2025"
              width={480}
              height={480}
              priority={true}
            />
          </BlurFade>

          <BlurFade
            delay={0.4}
            offset={15}
          >
            <Image
              src="/title.webp"
              alt="ALSA English Competition 2025"
              height={480}
              width={700}
              priority={true}
            />
          </BlurFade>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="competitions">
        <Competitions />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      {/* <div id="partners">
        <Partners />
      </div> */}
      <div id="accomodation">
        <Accomodation />
      </div>
    </>
  );
}
