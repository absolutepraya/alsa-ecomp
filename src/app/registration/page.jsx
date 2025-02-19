import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';
import BlurFade from '@/components/blurfade';

export default function Registration() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 pb-[420px] pt-36">
      <NavBar currentRoute="home" />

      <div className="justify-centert flex flex-col items-center text-center">
        <BlurFade
          delay={0.3}
          offset={15}
          inView
        >
          <GoldText
            text="NOW OPENING:"
            className="text-6xl font-extrabold"
          />
        </BlurFade>
        <BlurFade
          delay={0.4}
          offset={15}
          inView
        >
          <GoldText
            text="EARLY PHASE REGISTRATION"
            className="text-6xl font-extrabold"
          />
        </BlurFade>
      </div>

      <BlurFade
        delay={0.5}
        offset={15}
        inView
      >
        <div className="bg-background h-[80rem] w-[60rem] overflow-hidden rounded-2xl p-6 shadow-xl">
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

      <Footer />
    </div>
  );
}
