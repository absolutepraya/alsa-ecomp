import Emboss from './emboss';

export default function NavBar({ currentRoute }) {
  return (
    <div className="fixed top-0 !z-[100] flex h-20 w-full items-center justify-between bg-foreground px-16 shadow-xl">
      <img
        src="logo.svg"
        alt="ALSA English Competition 2025"
        className="h-[88px] w-[88px]"
      />
      <div className="flex items-center justify-between gap-x-12 text-lg">
        <a
          href="/"
          className={`relative text-primary transition-transform hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 ${currentRoute === 'home' ? 'after:scale-x-100' : ''}`}
        >
          Home
        </a>
        <a
          href="/about"
          className={`relative text-primary transition-transform hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 ${currentRoute === 'about' ? 'after:scale-x-100' : ''}`}
        >
          About Us
        </a>
        <a
          href="/competitions"
          className={`relative text-primary transition-transform hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 ${currentRoute === 'competitions' ? 'after:scale-x-100' : ''}`}
        >
          Competitions
        </a>
        <a
          href="/timeline"
          className={`relative text-primary transition-transform hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 ${currentRoute === 'timeline' ? 'after:scale-x-100' : ''}`}
        >
          Timeline
        </a>
        <a
          href="/partners"
          className={`relative text-primary transition-transform hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 ${currentRoute === 'partners' ? 'after:scale-x-100' : ''}`}
        >
          Partners
        </a>
        <a href="registration" className="transition-transform hover:scale-105">
          <Emboss innerClassName="px-3 py-0.5 text-lg rounded-full">Registration</Emboss>
        </a>
      </div>
    </div>
  );
}
