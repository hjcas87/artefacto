"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <motion.section
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 3,
    }}
    className={`bg-[url('/consola.jpg')] bg-hero bg-top sm:bg-right-top bg-cover relative overflow-hidden h-[100vh] w-full flex items-center`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.img
          variants={textVariant(1.1)}
          className={`w-[350px] rounded-full z-10`}
          src="/logoSala.jpg"
        />
      </div>
    </motion.div>
  </motion.section>
);

export default Hero;
