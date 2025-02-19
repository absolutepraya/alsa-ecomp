import Emboss from "./emboss";

export default function NavBar({ currentRoute }) {
  return (
    <div className="fixed top-0 flex h-20 w-full items-center justify-between bg-foreground px-16 shadow-xl !z-[100]">
      <img
        src="logo.svg"
        alt="ALSA English Competition 2025"
        className="h-[88px] w-[88px]"
      />
      <div className="flex items-center justify-between gap-x-12 text-lg">
        <a
          href="/"
          className={`text-primary ${currentRoute === 'home' ? 'underline decoration-2 underline-offset-[5px]' : ''}`}
        >
          Home
        </a>
        <a
          href="/about"
          className={`text-primary ${currentRoute === 'about' ? 'underline decoration-2 underline-offset-[5px]' : ''}`}
        >
          About Us
        </a>
        <a
          href="/competitions"
          className={`text-primary ${currentRoute === 'competitions' ? 'underline decoration-2 underline-offset-[5px]' : ''}`}
        >
          Competitions
        </a>
        <a
          href="/timeline"
          className={`text-primary ${currentRoute === 'timeline' ? 'underline decoration-2 underline-offset-[5px]' : ''}`}
        >
          Timeline
        </a>
        <a
          href="/partners"
          className={`text-primary ${currentRoute === 'partners' ? 'underline decoration-2 underline-offset-[5px]' : ''}`}
        >
          Partners
        </a>
        <a href="registration">
          <Emboss innerClassName="px-3 py-0.5 text-lg rounded-full">Registration</Emboss>
        </a>
      </div>
    </div>
  );
}
