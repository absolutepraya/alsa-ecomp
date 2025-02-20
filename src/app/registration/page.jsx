import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';
import BlurFade from '@/components/blurfade';

export default function Registration() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 py-36 lg:pb-[420px]">
      <div className="justify-centert flex flex-col items-center text-center">
        <BlurFade
          delay={0.3}
          offset={15}
          inView
        >
          <GoldText
            text="NOW OPENING:"
            className="text-[2rem] font-extrabold lg:text-6xl"
          />
        </BlurFade>
        <BlurFade
          delay={0.4}
          offset={15}
          inView
        >
          <GoldText
            text="EARLY PHASE REGISTRATION"
            className="text-[1.2rem] font-extrabold lg:text-6xl"
          />
        </BlurFade>
      </div>

      <BlurFade
        delay={0.5}
        offset={15}
        inView
      >
        <div className="overflow-hidden rounded-2xl bg-background p-6 shadow-xl lg:h-[80rem] lg:w-[60rem]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdnuv9mrrja-lHq-rXv8xnNz-tMnKH-BpmeFMN3wt8Yekc-LQ/viewform?embedded=true"
            className="h-full w-full"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </BlurFade>
    </div>
  );
}
