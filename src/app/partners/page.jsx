import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';
import BlurFade from '@/components/blurfade';

export default function Partners() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 pb-[420px] pt-36">
      <NavBar currentRoute="partners" />

      <BlurFade
        delay={0.3}
        offset={15}
        inView
      >
        <GoldText
          text="PARTNERS"
          className="text-6xl font-extrabold"
        />
      </BlurFade>

      <div className="flex h-[30rem] w-full max-w-[70rem] justify-between">
        <BlurFade
          delay={0.4}
          offset={15}
          inView
        >
          <div className="flex h-full w-full flex-col items-center">
            <p className="text-4xl text-primary">Sponsorship & In-Kind</p>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.5}
          offset={15}
          inView
        >
          <div className="flex h-full w-full flex-col items-center">
            <p className="text-4xl text-primary">Media Partners</p>
          </div>
        </BlurFade>
      </div>

      <Footer />
    </div>
  );
}
