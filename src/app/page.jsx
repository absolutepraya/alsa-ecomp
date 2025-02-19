import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 pb-[380px]">
      <NavBar currentRoute='home' />

      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <img
          src="logo.svg"
          alt="ALSA English Competition 2025"
          className="h-[30rem] w-[30rem]"
        />

        <img
          src="title.webp"
          alt="ALSA English Competition 2025"
          className="h-[10rem]"
        />
      </div>

      <Footer />
    </div>
  );
}
