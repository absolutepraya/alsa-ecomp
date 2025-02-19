import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';

export default function Partners() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 pb-[420px] pt-36">
      <NavBar />

      <GoldText
        text="PARTNERS"
        className="text-6xl font-extrabold"
      />

      <div className="flex h-[30rem] w-full max-w-[70rem] justify-between gap-x-20">
        <div className="flex h-full w-1/2 flex-col items-center">
          <p className="text-4xl text-primary">Sponsorship & In-Kind</p>
        </div>
        <div className="flex h-full w-1/2 flex-col items-center">
          <p className="text-4xl text-primary">Media Partners</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
