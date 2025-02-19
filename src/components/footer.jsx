import GoldText from './goldtext';

export default function Footer() {
  return (
    <div className="bg-background absolute bottom-0 flex w-full flex-col items-center gap-y-5 py-5 text-foreground">
      <GoldText
        text="Contact Person"
        className="text-3xl font-extrabold"
      />

      <div className="flex w-full flex-row justify-center gap-x-6">
        <div className="flex w-[20rem] flex-col items-center gap-y-2">
          <GoldText
            text="Sponsorship & In-Kind"
            className="text-2xl font-extrabold"
          />
          <div className="flex flex-col items-center gap-y-0 text-center text-sm">
            <p>Faza</p>
            <p>081311332449/LINE ID: fzfazila</p>
            <p>Dinara</p>
            <p>081323961416/LINE ID: ddinaraapd</p>
          </div>
        </div>
        <div className="flex w-[20rem] flex-col items-center gap-y-2">
          <GoldText
            text="Registration"
            className="text-2xl font-extrabold"
          />
          <div className="flex flex-col items-center gap-y-0 text-center text-sm">
            <p>Sherly</p>
            <p>082170460200/LINE ID: sherlyfll22</p>
            <p>Khaira</p>
            <p>08568246458/LINE ID: khairamihrsyaa</p>
          </div>
        </div>
        <div className="flex w-[20rem] flex-col items-center gap-y-2">
          <GoldText
            text="Media Partner"
            className="text-2xl font-extrabold"
          />
          <div className="flex flex-col items-center gap-y-0 text-center text-sm">
            <p>Nana</p>
            <p>081289867698/LINE ID: nnacwaa</p>
            <p>Zafina</p>
            <p>08114140705/LINE ID: zsazsafmp</p>
          </div>
        </div>
      </div>

      <div className="mt-2 flex w-full flex-row items-center justify-center gap-x-4">
        <div className="flex flex-row items-center gap-x-1 text-xs">
          <div className="h-7 w-7 rounded-full bg-gold" />
          <p className="">@alsaecomp</p>
        </div>
        <div className="flex flex-row items-center gap-x-1 text-xs">
          <div className="h-7 w-7 rounded-full bg-gold" />
          <a
            href="https://www.youtube.com/@alsalcuiofficial"
            className="underline decoration-[1px] underline-offset-[3px]"
          >
            ALSA LC UI
          </a>
        </div>
        <div className="flex flex-row items-center gap-x-1 text-xs">
          <div className="h-7 w-7 rounded-full bg-gold" />
          <a
            href="https://x.com/alsaecomp"
            className="underline decoration-[1px] underline-offset-[3px]"
          >
            @alsaecomp
          </a>
        </div>
        <div className="flex flex-row items-center gap-x-1 text-xs">
          <div className="h-7 w-7 rounded-full bg-gold" />
          <a
            href="https://www.instagram.com/alsalcui/"
            className="underline decoration-[1px] underline-offset-[3px]"
          >
            @alsaecomp
          </a>
        </div>
        <div className="flex flex-row items-center gap-x-1 text-xs">
          <div className="h-7 w-7 rounded-full bg-gold" />
          <a
            href="https://www.alsaecomp.com"
            className="underline decoration-[1px] underline-offset-[3px]"
          >
            alsaecomp.com
          </a>
        </div>
      </div>
    </div>
  );
}
