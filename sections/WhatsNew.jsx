'use client';

import { motion, useInView } from 'framer-motion';

import styles from '../styles';
import { CalendarTurns, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import { useEffect, useRef, useState } from 'react';
 

const WhatsNew = () => {
  // const salas = ['salaA', 'salaB', 'salaEstudio'];const ref = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <section className={`${styles.paddings} relative z-10`} ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col text-center"
        >
          <TypingText title='| Turnos' />
          <TitleText title={<>Turnos Disponibles</>} />
          {
            isInView && 
            <div className="mt-[50px]">
              <div>
                <TitleText title={<>SALA A</>} />
                <CalendarTurns id={'salaA'} />
              </div>
              <div>
                <TitleText title={<>SALA B</>} />
                <CalendarTurns id={'salaB'} />
              </div>
              <div>
                <TitleText title={<>SALA ESTUDIO</>} />
                <CalendarTurns id={'salaEstudio'} />
              </div>
            
            {/* <CalendarTurns /> */}
            </div>
          }
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
