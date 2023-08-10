'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section
    className={`flex justify-center w-full mx-auto relative z-10 px-10 py-20`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      // className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      {/* <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div> */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Producciones" textStyles="text-center" />
        <TitleText title={<>Escuchá producciones realizadas en el estudio</>} textStyles="text-center"/>
        <iframe
        style={{ borderRadius: 12, marginTop: '3rem' }}
        src="https://open.spotify.com/embed/playlist/25IjZBPxy8iaaqZ9762tOP?utm_source=generator&theme=0"
        width="100%"
        height={700}
        frameBorder={0}
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
