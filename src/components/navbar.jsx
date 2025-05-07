'use client';

import { Menu, X } from 'lucide-react';
import Emboss from './emboss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    name: 'Home',
    route: '/',
    id: 'home',
  },
  {
    name: 'About Us',
    route: '/about',
    id: 'about',
  },
  {
    name: 'Competitions',
    route: '/competitions',
    id: 'competitions',
  },
  {
    name: 'Timeline',
    route: '/timeline',
    id: 'timeline',
  },
  {
    name: 'Partners',
    route: '/partners',
    id: 'partners',
  },
  {
    name: 'Accomodation',
    route: '/accomodation',
    id: 'accomodation',
  },
];

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (pathname !== '/') {
      // If not on homepage, redirect to homepage with hash
      window.location.href = `/#${id}`;
    } else {
      // If on homepage, scroll to section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowMenu(false);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-0 !z-[100] flex h-20 w-full items-center justify-between bg-foreground px-4 shadow-xl tablet:px-16">
      <a href="/">
        <Image
          src="/logo.svg"
          alt="ALSA English Competition 2025"
          width={88}
          height={88}
          priority={true}
        />
      </a>
      <div className="hidden items-center justify-between gap-x-12 text-lg tablet:flex">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`relative text-primary transition-transform after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:scale-105 hover:after:scale-x-100 active:scale-95 active:brightness-75 ${activeSection === item.id ? 'after:scale-x-100' : ''}`}
          >
            {item.name}
          </a>
        ))}
        <a
          href="https://forms.gle/CY6CRDiWdbAS91gA8"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all hover:scale-105 active:scale-95 active:brightness-75"
        >
          <Emboss innerClassName="px-3 py-0.5 text-lg rounded-full">Registration</Emboss>
        </a>
      </div>

      <div className="flex items-center justify-between gap-x-12 text-lg tablet:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={showMenu ? 'close' : 'menu'}
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.2 }}
          >
            {showMenu ? (
              <X
                size={40}
                className="text-primary"
                strokeWidth={2}
                onClick={handleMenuClick}
              />
            ) : (
              <Menu
                size={40}
                className="text-primary"
                strokeWidth={2}
                onClick={handleMenuClick}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="absolute left-0 top-20 flex w-full flex-col items-center justify-center gap-3 bg-foreground px-4 pb-4 pt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative text-primary transition-transform after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:scale-105 hover:after:scale-x-100 active:scale-95 active:brightness-75 ${activeSection === item.id ? 'after:scale-x-100' : ''}`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://forms.gle/CY6CRDiWdbAS91gA8"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105 active:scale-95 active:brightness-75"
            >
              <Emboss innerClassName="px-3 py-0.5 text-lg rounded-full">Registration</Emboss>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
