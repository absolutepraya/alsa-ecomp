import Emboss from '@/components/emboss';
import GoldText from '@/components/goldtext';
import Line from '@/components/line';
import BlurFade from '@/components/blurfade';

export default function Timeline() {
  return (
    <div className="relative flex flex-col items-center gap-y-20 px-0 py-36">
      <BlurFade
        delay={0.2}
        offset={15}
        inView
      >
        <GoldText
          text="TIMELINE"
          className="text-4xl font-extrabold lg:text-5xl"
        />
      </BlurFade>

      <div className="flex max-w-[70rem] flex-col gap-y-12">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <BlurFade
            delay={0.2}
            offset={15}
            inView
          >
            <p className="font-h2 text-3xl text-primary lg:text-4xl">REGISTRATION</p>
          </BlurFade>
          <BlurFade
            delay={0.2}
            offset={15}
            inView
          >
            <Emboss
              innerClassName="rounded-xl w-[16rem] h-20 flex items-center justify-center"
              outerClassName="w-fit lg:hover:scale-105 transition-transform"
            >
              <p className="text-center leading-5">
                NOW:
                <br />
                Normal Phase Registration
                <br />11 Maret - 25 Maret 2025
              </p>
            </Emboss>
          </BlurFade>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <BlurFade
            delay={0.2}
            offset={15}
            inView
          >
            <p className="font-h2 text-3xl text-primary lg:text-4xl">PRE-EVENT</p>
          </BlurFade>
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <BlurFade
              delay={0.2}
              offset={15}
              inView
            >
              <Emboss
                innerClassName="rounded-xl w-[16rem] h-20 flex items-center justify-center"
                outerClassName="w-fit lg:hover:scale-105 transition-transform"
              >
                <p className="text-center leading-5">
                  Pre-Event:
                  <br />
                  Golden Tickets
                  <br />5 Maret - 18 Maret 2025
                </p>
              </Emboss>
            </BlurFade>
            <BlurFade
              delay={0.2}
              offset={15}
              inView
            >
              <Line />
            </BlurFade>
            <BlurFade
              delay={0.2}
              offset={15}
              inView
            >
              <Emboss
                innerClassName="rounded-xl w-[16rem] h-20 flex items-center justify-center"
                outerClassName="w-fit lg:hover:scale-105 transition-transform"
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
              delay={0.2}
              offset={15}
              inView
            >
              <Line />
            </BlurFade>
            <BlurFade
              delay={0.2}
              offset={15}
              inView
            >
              <Emboss
                innerClassName="rounded-xl w-[16rem] h-20 flex items-center justify-center"
                outerClassName="w-fit lg:hover:scale-105 transition-transform"
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
            delay={0.2}
            offset={15}
            inView
          >
            <p className="font-h2 text-3xl text-primary lg:text-4xl">MAIN EVENT</p>
          </BlurFade>
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <BlurFade
              delay={0.2}
              offset={15}
              inView
            >
              <Emboss
                innerClassName="rounded-xl w-[16rem] h-20 flex items-center justify-center"
                outerClassName="w-fit lg:hover:scale-105 transition-transform"
              >
                <p className="text-center leading-5">
                  Technical Meeting:
                  <br />7 Mei 2025
                </p>
              </Emboss>
            </BlurFade>
            <BlurFade
              delay={0.2}
              offset={15}
              inView
            >
              <Line />
            </BlurFade>
            <BlurFade
              delay={0.2}
              offset={15}
              inView
            >
              <Emboss
                innerClassName="rounded-xl w-[16rem] h-20 flex items-center justify-center"
                outerClassName="w-fit lg:hover:scale-105 transition-transform"
              >
                <p className="text-center leading-5">
                  Main Event:
                  <br />7 Mei - 12 Mei 2025
                </p>
              </Emboss>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
