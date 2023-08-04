'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Sling as Hamburger } from 'hamburger-react';

import { navVariants } from '../utils/motion';
import styles from '../styles';
import { socials } from '../constants';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed z-40 border-b border-gray-600 w-full h-24 bg-primary-black">
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
        <div className={isOpen ? 'sidebar-content-open flex flex-col z-40' : 'sidebar-content'}>
          <div className="btn-nav">
            <p>ESTUDIO</p>
          </div>
          <div className="btn-nav">
            <p>SALAS</p>
          </div>
          <div className="btn-nav">
            <p>TURNOS</p>
          </div>
          <div className="btn-nav">
            <p>CONTACTO</p>
          </div>
        <div className="flex gap-4 h-full content-end z-40">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
