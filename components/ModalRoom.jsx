'use client';

import { Fade } from 'react-slideshow-image';

const ModalRoom = ({ show, instruments }) => (
  <div className="absolute bg-white top-0 left-0 right-0 bottom-0 h-screen sm:h-4/5 mt-10 p-4 m-4 z-10 sm:w-1/2 sm:mx-auto flex flex-col justify-around rounded-[24px] bg-indigo-200">
    <Fade duration={10000}>
      {instruments.inst.map((inst, i) => (
        <div key={i} className="each-slide">
          <div className="mb-5 mx-auto">
            <img src={inst.img} className="h-80" />
          </div>
          <p className="p-4 text-center">{inst.desc}</p>
        </div>
      ))}
    </Fade>
    <div className="mx-auto flex flex-col items-center gap-y-8">
      <h2 className="font-bold">{instruments.title}</h2>
      <p className="p-4 text-center">{instruments.salaDesc}</p>
      <button
        type="button"
        onClick={show}
        style={{ minWidth: '250px' }}
        className="mx-auto middle none center rounded-lg bg-gray-800 py-3 self-end px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Cerrar
      </button>
    </div>
  </div>
);

export default ModalRoom;
