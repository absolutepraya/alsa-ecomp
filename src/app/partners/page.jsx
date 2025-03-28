import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';
import BlurFade from '@/components/blurfade';

export default function Partners() {
  return (
    <div className="relative flex flex-col items-center gap-y-20 px-0 pb-[420px] pt-36">
      <BlurFade
        delay={0.2}
        offset={15}
        inView
      >
        <GoldText
          text="PARTNERS"
          className="text-4xl font-extrabold lg:text-5xl"
        />
      </BlurFade>

      <div className="flex h-[30rem] w-full max-w-[70rem] flex-col justify-between text-center lg:flex-row">
        <BlurFade
          delay={0.2}
          offset={15}
          inView
        >
          <div className="flex h-full w-full flex-col items-center">
            <p className="font-h2 text-3xl text-primary lg:text-4xl">Sponsorship & In-Kind</p>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.2}
          offset={15}
          inView
        >
          <div className="flex h-full w-full flex-col items-center">
            <p className="font-h2 text-4xl text-primary">Media Partners</p>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
