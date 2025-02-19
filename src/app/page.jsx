import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';
import Image from 'next/image';
import BlurFade from '@/components/blurfade';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 pb-[380px]">
      <NavBar currentRoute="home" />

      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <BlurFade
          delay={0.3}
          offset={15}
          inView
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
          delay={0.6}
          offset={15}
          inView
        >
          <Image
            src="/title.webp"
            alt="ALSA English Competition 2025"
            height={480}
            width={700}
          />
        </BlurFade>
      </div>

      <Footer />
    </div>
  );
}
