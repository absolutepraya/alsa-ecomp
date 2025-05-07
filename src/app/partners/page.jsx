import GoldText from '@/components/goldtext';
import BlurFade from '@/components/blurfade';

export default function Partners() {
  return (
    <div className="relative flex flex-col items-center gap-y-20 px-0 pt-36 lg:pb-12 pb-56">
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

      <div className="flex h-auto w-full max-w-[70rem] flex-col gap-4 lg:h-[32rem] lg:flex-row lg:justify-between tablet:px-0 px-8">
        <BlurFade
          delay={0.2}
          offset={15}
          inView
          className="w-full lg:w-1/2"
        >
          <div className="relative mb-16 flex h-full w-full flex-col items-center lg:mb-0">
            <p className="absolute left-1/2 top-0 -translate-x-1/2 text-nowrap font-h2 text-3xl text-primary lg:text-4xl">Sponsorship &amp; In&#8209;Kind</p>
            <div className="mt-16 flex h-full w-full flex-col items-center justify-center">
              <img
                src="/sponsor.svg"
                alt="Sponsor"
                className="w-full"
              />
            </div>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.2}
          offset={15}
          inView
          className="w-full lg:w-1/2"
        >
          <div className="relative flex h-full w-full flex-col items-center">
            <p className="absolute left-1/2 top-0 -translate-x-1/2 text-nowrap font-h2 text-3xl text-primary lg:text-4xl">Media Partners</p>
            <div className="mt-16 flex h-full w-full flex-col items-center justify-center">
              <img
                src="/media.svg"
                alt="Media"
                className="w-full"
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
