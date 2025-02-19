import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';
import Line from '@/components/line';

export default function Timeline() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 pb-[420px] pt-36">
      <NavBar />

      <GoldText
        text="TIMELINE"
        className="text-6xl font-extrabold"
      />

      <div className="flex max-w-[70rem] flex-col gap-y-12">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="text-4xl text-primary">REGISTRATION</p>
          <Emboss
            innerClassName="rounded-xl w-[16rem] h-20  flex items-center justify-center"
            outerClassName="w-fit"
          >
            <p className="text-center leading-5">
              NOW:
              <br />
              Early Phase Registration
              <br />3 Maret - 9 Maret 2025
            </p>
          </Emboss>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="text-4xl text-primary">PRE-EVENT</p>
          <div className="flex flex-row items-center justify-center">
            <Emboss
              innerClassName="rounded-xl w-[16rem] h-20  flex items-center justify-center"
              outerClassName="w-fit"
            >
              <p className="text-center leading-5">
                Pre-Event:
                <br />
                Golden Tickets
                <br />4 Maret - 18 Maret 2025
              </p>
            </Emboss>
            <Line />
            <Emboss
              innerClassName="rounded-xl w-[16rem] h-20  flex items-center justify-center"
              outerClassName="w-fit"
            >
              <p className="text-center leading-5">
                Open Registration
                <br />
                Pre-Event: Webinar
                <br />7 Maret - 17 Maret 2025
              </p>
            </Emboss>
            <Line />
            <Emboss
              innerClassName="rounded-xl w-[16rem] h-20  flex items-center justify-center"
              outerClassName="w-fit"
            >
              <p className="text-center leading-5">
                Pre-Event:
                <br />
                Webinar
                <br />
                22 Maret 2025
              </p>
            </Emboss>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="text-4xl text-primary">MAIN EVENT</p>
          <div className="flex flex-row items-center justify-center">
            <Emboss
              innerClassName="rounded-xl w-[16rem] h-20  flex items-center justify-center"
              outerClassName="w-fit"
            >
              <p className="text-center leading-5">
                Technical Meeting:
                <br />
                15 Mei 2025
              </p>
            </Emboss>
            <Line />
            <Emboss
              innerClassName="rounded-xl w-[16rem] h-20  flex items-center justify-center"
              outerClassName="w-fit"
            >
              <p className="text-center leading-5">
                Main Event:
                <br />
                15 Mei - 20 Mei 2025
              </p>
            </Emboss>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
