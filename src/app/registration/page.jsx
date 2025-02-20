import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';
import BlurFade from '@/components/blurfade';

export default function Registration() {
  return (
    <div className="relative flex flex-col items-center gap-y-16 px-6 py-36 lg:px-0 lg:pb-[380px]">
      <div className="justify-centert flex flex-col items-center text-center">
        <BlurFade
          delay={0.3}
          offset={15}
        >
          <GoldText
            text="NOW OPENING:"
            className="text-2xl font-extrabold lg:text-3xl mb-2"
          />
        </BlurFade>

        <BlurFade
          delay={0.4}
          offset={15}
        >
          <div className="flex flex-col lg:hidden">
            <div className="flex flex-col items-center justify-center gap-y-1">
              <GoldText
                text="EARLY PHASE"
                className="text-center text-4xl font-extrabold"
              />
              <GoldText
                text="REGISTRATION"
                className="text-center text-4xl font-extrabold"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <GoldText
              text="EARLY PHASE REGISTRATION"
              className="text-center text-5xl font-extrabold"
            />
          </div>
        </BlurFade>
      </div>

      <BlurFade
        delay={0.5}
        offset={15}
      >
        <div className="h-[80rem] overflow-hidden rounded-2xl bg-background p-6 shadow-xl lg:w-[60rem]">
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
