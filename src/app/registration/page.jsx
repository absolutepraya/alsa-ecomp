import GoldText from '@/components/goldtext';
import BlurFade from '@/components/blurfade';

export default function Registration() {
  return (
    <div className="relative flex flex-col items-center gap-y-16 px-6 py-36 lg:px-0 lg:pb-[380px]">
      <div className="justify-centert flex flex-col items-center text-center">
        <BlurFade
          delay={0.2}
          offset={15}
          inView
        >
          <GoldText
            text="NOW OPENING:"
            className="mb-2 text-2xl font-extrabold lg:text-3xl"
          />
        </BlurFade>

        <BlurFade
          delay={0.2}
          offset={15}
          inView
        >
          <div className="flex flex-col lg:hidden">
            <div className="flex flex-col items-center justify-center gap-y-1">
              <GoldText
                text="EARLY PHASE"
                className="text-center text-4xl font-extrabold"
              />
              <GoldText
                text="REGISTRATION"
                className="text-center text-4xl font-extrabold"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <GoldText
              text="EARLY PHASE REGISTRATION"
              className="text-center text-5xl font-extrabold"
            />
          </div>
        </BlurFade>
      </div>

      <BlurFade
        delay={0.2}
        offset={15}
        inView
      >
        <div className="h-[80rem] w-[60rem] max-w-[90%] overflow-hidden rounded-2xl bg-background p-6 shadow-xl lg:max-w-full">
          <iframe
            src="https://forms.gle/CY6CRDiWdbAS91gA8"
            className="h-full w-full"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </BlurFade>
    </div>
  );
}
