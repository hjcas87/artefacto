'use client';

import { motion, useInView } from 'framer-motion';

import styles from '../styles';
import { CalendarTurns, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import { useEffect, useRef, useState } from 'react';
 

const ListOfRooms = () => {
  // const salas = ['salaA', 'salaB', 'salaEstudio'];const ref = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    if (!isLoaded && isInView) {
      console.log('first')
      setIsLoaded(true)
    }
  }, [isInView])
  
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
          {
            isLoaded && 
            <div className="mt-[50px]">
              <div>
                <div className="my-7">
                  <TitleText title={<>SALA A</>} />
                </div>
                <CalendarTurns id={'salaA'} />
              </div>
              <div>
                <div className="my-7">
                  <TitleText title={<>SALA B</>} />
                </div>
                <CalendarTurns id={'salaB'} />
              </div>
              <div>
                <div className="my-7">
                  <TitleText title={<>SALA ESTUDIO</>} />
                </div>
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

export default ListOfRooms;
