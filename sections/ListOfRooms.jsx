'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import styles from '../styles';
import { CalendarTurns, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
 

const ListOfRooms = () => {
  const [isLoadedA, setIsLoadedA] = useState(false)
  const [isLoadedB, setIsLoadedB] = useState(false)
  const [isLoadedE, setIsLoadedE] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)
  
  return (
    <section className={`${styles.paddings} relative z-10`} ref={ref} id="turnos">
    {/* <div className="absolute top-[-40px]" /> */}
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col text-center"
        >
          <TypingText title='| Turnos' />
          <TitleText title={<>Turnos Disponibles</>} />
          <p className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">Abierto de Lunes a Viernes de 16:00hs a 00:00hs</p>
          {/* <div style={{minHeight: '2200px'}}>

          {
            isLoaded &&  */}
            <div className="mt-[50px]">
              <div>
                <div className="my-7">
                  <TitleText title={<>SALA A</>} />
                </div>
                {
                  isInView || isLoadedA ? <CalendarTurns id={'salaA'} setIsLoaded={ setIsLoadedA }/> : <div className="h-[600px]" />
                }                
              </div>
              <div>
                <div className="my-7">
                  <TitleText title={<>SALA B</>} />
                </div>
                {
                  isInView || isLoadedB ? <CalendarTurns id={'salaB'} setIsLoaded={ setIsLoadedB }/> : <div className="h-[600px]" />
                }
              </div>
              <div>
                <div className="my-7">
                  <TitleText title={<>SALA ESTUDIO</>} />
                </div>
                {
                  isInView || isLoadedE ? <CalendarTurns id={'salaEstudio'} setIsLoaded={ setIsLoadedE }/> : <div className="h-[600px]" />
                }
                </div>
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ListOfRooms;
