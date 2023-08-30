'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';

const Location = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="absolute top-[-40px]" id="ubicacion"/>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| Ubicación' textStyles='text-center' />
      <TitleText title={<>No te podes perder</>} textStyles='text-center' />
      <p className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">Estamos en Italia 1913, a metros de Belgrano</p>
      <div className='mx-auto sm:w-4/5 w-96'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.4058690233765!2d-57.57118232312097!3d-37.990992544189226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d94e945ba0ef%3A0x14550c9c6087487b!2sItalia%201913%2C%20B7600BBG%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1691450152512!5m2!1ses-419!2sar'
          className='mt-12 rounded-[32px] w-full'
          height={450}
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </motion.div>
  </section>
);

export default Location;
