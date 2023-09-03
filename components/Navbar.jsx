'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Sling as Hamburger } from 'hamburger-react';

import { navVariants } from '../utils/motion';
import styles from '../styles';
import { navButtons } from '../constants';
import { scrollNav } from '../utils/scrollNav';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed z-50 border-b border-gray-600 w-full h-20 bg-primary-black">
      <div className="absolute w-[50%] inset-0 gradient-01" />

      <motion.div
        initial={navVariants.initial}
        animate={navVariants.animate}
        transition={navVariants.transition}
        className={`${styles.innerWidth} px-4 mx-auto flex h-full justify-between items-center gap-8`}
      >
        <h2 className="font-normal text-[24px] leading-[30px] text-white">
          ARTEFACTO
        </h2>
        <div className="z-40">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            duration={1}
            color="rgba(255, 255, 255, 0.8)"
          />
        </div>
      </motion.div>
      <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-close'}`}>
        <div
          className={
            isOpen
              ? 'sidebar-content-open flex flex-col w-full sm:w-96'
              : 'sidebar-content'
          }
        >
          {/* <Link
                  href={'#ubicacion'}
                  prefetch={true}
                  scroll={false}
                  style={{
                    transform: !isOpen && 'translateX(-250px)',
                    transition: !isOpen && '0s',
                  }}
                  // onClick={(e) => scrollNav(e, setOpen)}
                >
                  <a> ubicacion</a>
                </Link> */}
          {
            navButtons.map((button, i) => (
              <div className="btn-nav" key={i}>
                <Link
                  href={button.href}
                  prefetch={false}
                  scroll={false}
                  style={{
                    transform: !isOpen && 'translateX(-250px)',
                    transition: !isOpen && '0s',
                  }}
                  // onClick={(e) => scrollNav(e, setOpen)}
                >
                  {button.title}
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
