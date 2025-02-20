import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';
import Line from '@/components/line';
import BlurFade from '@/components/blurfade';

export default function Timeline() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 py-36 lg:pb-[420px]">
      <BlurFade
        delay={0.3}
        offset={15}
      >
        <GoldText
          text="TIMELINE"
          className="text-5xl font-extrabold lg:text-6xl"
        />
      </BlurFade>

      <div className="flex max-w-[70rem] flex-col gap-y-12">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <BlurFade
            delay={0.35}
            offset={15}
          >
            <p className="text-3xl text-primary lg:text-4xl">REGISTRATION</p>
          </BlurFade>
          <BlurFade
            delay={0.4}
            offset={15}
          >
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
          </BlurFade>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <BlurFade
            delay={0.45}
            offset={15}
          >
            <p className="text-3xl text-primary lg:text-4xl">PRE-EVENT</p>
          </BlurFade>
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <BlurFade
              delay={0.5}
              offset={15}
            >
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
            </BlurFade>
            <BlurFade
              delay={0.55}
              offset={15}
            >
              <Line />
            </BlurFade>
            <BlurFade
              delay={0.6}
              offset={15}
            >
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
            </BlurFade>
            <BlurFade
              delay={0.65}
              offset={15}
            >
              <Line />
            </BlurFade>
            <BlurFade
              delay={0.7}
              offset={15}
            >
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
            </BlurFade>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <BlurFade
            delay={0.75}
            offset={15}
          >
            <p className="text-3xl text-primary lg:text-4xl">MAIN EVENT</p>
          </BlurFade>
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <BlurFade
              delay={0.8}
              offset={15}
            >
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
            </BlurFade>
            <BlurFade
              delay={0.85}
              offset={15}
            >
              <Line />
            </BlurFade>
            <BlurFade
              delay={0.9}
              offset={15}
            >
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
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
