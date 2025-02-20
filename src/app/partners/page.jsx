import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';
import BlurFade from '@/components/blurfade';

export default function Partners() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 pb-[420px] pt-36">
      <BlurFade
        delay={0.3}
        offset={15}
      >
        <GoldText
          text="PARTNERS"
          className="text-5xl font-extrabold lg:text-6xl"
        />
      </BlurFade>

      <div className="flex h-[30rem] w-full max-w-[70rem] flex-col justify-between text-center lg:flex-row">
        <BlurFade
          delay={0.4}
          offset={15}
        >
          <div className="flex h-full w-full flex-col items-center">
            <p className="text-3xl text-primary lg:text-4xl">Sponsorship & In-Kind</p>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.5}
          offset={15}
        >
          <div className="flex h-full w-full flex-col items-center">
            <p className="text-4xl text-primary">Media Partners</p>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
