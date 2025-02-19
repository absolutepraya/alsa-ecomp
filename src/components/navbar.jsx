'use client';

import { Menu, X } from 'lucide-react';
import Emboss from './emboss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import BlurFade from './blurfade';

const navItems = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'About Us',
    route: '/about',
  },
  {
    name: 'Competitions',
    route: '/competitions',
  },
  {
    name: 'Timeline',
    route: '/timeline',
  },
  {
    name: 'Partners',
    route: '/partners',
  },
];

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = () => {
      setShowMenu(false);
    };

    if (showMenu) {
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [showMenu]);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-0 !z-[100] flex h-20 w-full items-center justify-between bg-foreground px-4 shadow-xl lg:px-16">
      <a href="/">
        <Image
          src="/logo.svg"
          alt="ALSA English Competition 2025"
          width={88}
          height={88}
          priority={true}
        />
      </a>
      <div className="hidden items-center justify-between gap-x-12 text-lg lg:flex">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.route}
            className={`relative text-primary transition-transform after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:scale-105 hover:after:scale-x-100 active:scale-95 active:brightness-75 ${pathname === item.route ? 'after:scale-x-100' : ''}`}
          >
            {item.name}
          </a>
        ))}
        <a
          href="registration"
          className="transition-all hover:scale-105 active:scale-95 active:brightness-75"
        >
          <Emboss innerClassName="px-3 py-0.5 text-lg rounded-full">Registration</Emboss>
        </a>
      </div>

      <div className="flex items-center justify-between gap-x-12 text-lg lg:hidden">
        {!showMenu && (
          <Menu
            size={50}
            className="text-primary"
            strokeWidth={3.5}
            onClick={handleMenuClick}
          />
        )}

        {showMenu && (
          <X
            size={50}
            className="text-primary"
            strokeWidth={3.5}
            onClick={handleMenuClick}
          />
        )}
      </div>

      {showMenu && (
        <BlurFade
          direction="down"
          className="absolute left-0 top-20 flex w-full flex-col items-start justify-center gap-3 bg-foreground px-4 py-8 pt-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.route}
              className={`relative text-primary transition-transform after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:scale-105 hover:after:scale-x-100 active:scale-95 active:brightness-75 ${pathname === item.route ? 'after:scale-x-100' : ''}`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="registration"
            className="transition-all hover:scale-105 active:scale-95 active:brightness-75"
          >
            <Emboss innerClassName="px-3 py-0.5 text-lg rounded-full">Registration</Emboss>
          </a>
        </BlurFade>
      )}
    </div>
  );
}
