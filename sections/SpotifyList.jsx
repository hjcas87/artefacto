'use client';

import { motion } from 'framer-motion';

import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const SpotifyList = () => (
  <section
    className={`flex justify-center w-full mx-auto relative z-10 px-10 py-20`}
  >
    <div className="absolute top-[-40px]" id="producciones"/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25}}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col overflow-hidden"
      >
        <TypingText title="| Producciones" textStyles="text-center" />
        <TitleText title={<>Escuchá producciones realizadas en el estudio</>} textStyles="text-center"/>
        <iframe
          style={{ borderRadius: 12, marginTop: '3rem', overflow: 'hidden' }}
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

export default SpotifyList;
