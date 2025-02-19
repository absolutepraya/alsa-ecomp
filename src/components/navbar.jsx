import Emboss from "./emboss";

export default function NavBar() {
  return (
    <div className="absolute top-0 flex h-20 w-full items-center justify-between bg-foreground px-16">
      <img
        src="logo.svg"
        alt="ALSA English Competition 2025"
        className="h-[88px] w-[88px]"
      />
      <div className="flex items-center justify-between gap-x-8 text-lg">
        <a
          href="#"
          className=" text-primary"
        >
          Home
        </a>
        <a
          href="#"
          className=" text-primary"
        >
          About Us
        </a>
        <a
          href="#"
          className=" text-primary"
        >
          Competitions
        </a>
        <a
          href="#"
          className=" text-primary"
        >
          Timeline
        </a>
        <a
          href="#"
          className=" text-primary"
        >
          Partners
        </a>
        <a href="#">
          <Emboss
            innerClassName="px-3 py-0.5 text-lg rounded-full"
          >
            Registration
          </Emboss>
        </a>
      </div>
    </div>
  );
}
