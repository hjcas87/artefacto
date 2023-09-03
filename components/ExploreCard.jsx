'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import 'react-slideshow-image/dist/styles.css';
import { scrollNav } from '../utils/scrollNav';

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  show,
  showMore,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => !showMore && handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className={`${
        active === id ? '' : 'bg-black opacity-25'
      } absolute w-full h-full object-cover rounded-[24px]`}
    />
    {active !== id ? (
      <h3 className="font-normal sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div
        className={`${
          showMore ? 'top-0 rounded-[24px]' : ''
        } absolute bottom-0 p-8 flex justify-between w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]`}
      >
        <div className="flex flex-col">
          <h2 className="mb-[24px] font-semibold sm:text-[32px] text-[24px] text-white mx-auto self-end">
            {title}
          </h2>
          <a href="#salas" className="mx-auto">
            <button
              type="button"
              disabled={showMore}
              onClick={show}
              style={{ minWidth: '200px' }}
              className="mx-auto middle none center rounded-lg bg-gray-800 py-3 self-end px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Ver Más
            </button>
          </a>
        </div>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
