'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    {/* {isInView && <ComponentB />} */}
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="font-normal text-[24px] leading-[30px] text-white">
            ARTEFACTO
          </h2>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2023 Artefacto estudio y salas. Todos los derechos
              reservados.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                >
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
