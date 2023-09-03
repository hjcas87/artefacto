'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, ModalRoom, TitleText, TypingText } from '../components';

const ExploreRooms = () => {
  const [active, setActive] = useState('world-2');
  const [showMore, setShowMore] = useState(false);
  const [instruments, setInstruments] = useState([]);
  const show = () => {
    setShowMore(!showMore);
  };
  
  const worldActive = () => {
    for (let i = 0; i < exploreWorlds.length; i++) {
      if (exploreWorlds[i].id === active) {
        return setInstruments(
          {
            title:exploreWorlds[i].title,
            inst: exploreWorlds[i].instruments,
            salaDesc: exploreWorlds[i].salaDesc
          })
      }
      
    }
  }
  useEffect(() => {
      worldActive()
  }, [active]);

  return (
    <section className={`${styles.paddings} relative`}>
    <div className="absolute top-[-40px]" id="salas"/>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Nuestras Salas" textStyles="text-center" />
        <TitleText
          title={<>Mirá nuestras salas. <br className="md:block hidden" /> Elegí la que mejor se ajuste a tus necesidades</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
              show={show}
              showMore={showMore}
            />
          ))}
        </div>
      </motion.div>
      {
            showMore && (
              <ModalRoom show={show} instruments={instruments} />
            )
          }
    </section>
  );
};

export default ExploreRooms;
