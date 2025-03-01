import GoldText from './goldtext';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="flex w-full flex-col items-center gap-y-5 bg-background py-5 text-foreground">
      <GoldText
        text="Contact Person"
        className="text-md text-2xl font-extrabold"
      />

      <div className="flex w-full flex-col justify-center gap-4 gap-x-6 lg:flex-row">
        <div className="flex flex-col items-center gap-y-2 lg:w-[20rem]">
          <GoldText
            text="Sponsorship & In-Kind"
            className="text-xl font-extrabold"
          />
          <div className="flex flex-col items-center gap-y-0 text-center text-sm">
            <p>Faza</p>
            <p>081311332449/LINE ID: fzfazila</p>
            <p>Dinara</p>
            <p>081323961416/LINE ID: ddinaraapd</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2 lg:w-[20rem]">
          <GoldText
            text="Registration"
            className="text-xl font-extrabold"
          />
          <div className="flex flex-col items-center gap-y-0 text-center text-sm">
            <p>General Inquiries</p>
            <p>085123537004</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2 lg:w-[20rem]">
          <GoldText
            text="Media Partner"
            className="text-xl font-extrabold"
          />
          <div className="flex flex-col items-center gap-y-0 text-center text-sm">
            <p>Nana</p>
            <p>081289867698/LINE ID: nnacwaa</p>
            <p>Zafina</p>
            <p>08114140705/LINE ID: zsazsafmp</p>
          </div>
        </div>
      </div>

      <div className="mt-2 grid w-full grid-cols-2 gap-4 px-16 lg:flex lg:flex-row lg:justify-center lg:gap-x-4">
        <div className="flex flex-row items-center gap-x-1 text-xs">
          <div className="h-8 w-8 rounded-full">
            <Image
              src="/social/4.webp"
              width={32}
              height={32}
              alt="Instagram ALSA LC UI"
            />
          </div>
          <a
            href="https://www.instagram.com/alsalcui/"
            className="underline decoration-[1px] underline-offset-[3px]"
          >
            @alsaecomp
          </a>
        </div>
        <div className="flex flex-row items-center gap-x-1 text-xs">
          <div className="h-8 w-8 rounded-full">
            <Image
              src="/social/2.webp"
              width={32}
              height={32}
              alt="YouTube ALSA LC UI"
            />
          </div>
          <a
            href="https://www.youtube.com/@alsalcuiofficial"
            className="underline decoration-[1px] underline-offset-[3px]"
          >
            ALSA LC UI
          </a>
        </div>
        <div className="flex flex-row items-center gap-x-1 text-xs">
          <div className="h-8 w-8 rounded-full">
            <Image
              src="/social/3.webp"
              width={32}
              height={32}
              alt="X ALSA LC UI"
            />
          </div>
          <a
            href="https://x.com/alsaecomp"
            className="underline decoration-[1px] underline-offset-[3px]"
          >
            @alsaecomp
          </a>
        </div>

        <div className="flex flex-row items-center gap-x-1 text-xs">
          <div className="h-8 w-8 rounded-full">
            <Image
              src="/social/5.webp"
              width={32}
              height={32}
              alt="Website ALSA LC UI"
            />
          </div>
          <a
            href="https://www.alsaecomp.com"
            className="underline decoration-[1px] underline-offset-[3px]"
          >
            alsaecomp.id
          </a>
        </div>
      </div>
    </div>
  );
}
