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
        inView
      >
        <GoldText
          text="TIMELINE"
          className="text-6xl font-extrabold"
        />
      </BlurFade>

      <div className="flex max-w-[70rem] flex-col gap-y-12">
        <BlurFade
          delay={0.4}
          offset={15}
          inView
        >
          <div className="flex flex-col items-center justify-center gap-y-4">
            <p className="text-4xl text-primary">REGISTRATION</p>
            <BlurFade
              delay={0.5}
              offset={15}
              inView
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
        </BlurFade>
        <BlurFade
          delay={0.5}
          offset={15}
          inView
        >
          <div className="flex flex-col items-center justify-center gap-y-4">
            <p className="text-4xl text-primary">PRE-EVENT</p>
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <BlurFade
                delay={0.6}
                offset={15}
                inView
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
              <Line />
              <BlurFade
                delay={0.7}
                offset={15}
                inView
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
              <Line />
              <BlurFade
                delay={0.8}
                offset={15}
                inView
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
        </BlurFade>
        <BlurFade
          delay={0.6}
          offset={15}
          inView
        >
          <div className="flex flex-col items-center justify-center gap-y-4">
            <p className="text-4xl text-primary">MAIN EVENT</p>
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <BlurFade
                delay={0.7}
                offset={15}
                inView
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
              <Line />
              <BlurFade
                delay={0.8}
                offset={15}
                inView
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
        </BlurFade>
      </div>
    </div>
  );
}
