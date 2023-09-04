'use client';

import { Fade } from 'react-slideshow-image';

const ModalRoom = ({ show, instruments }) => (
  // return instruments.inst && (
  <div className="absolute bg-white top-0 left-0 right-0 mt-10 px-4 pt-4 pb-12 m-4 z-40 lg:w-1/2 sm:mx-auto flex flex-col justify-around rounded-[24px] bg-gradient-to-t from-gray-800 from-70% via-indigo-800 via-15% to-indigo-500 to-90%"
  // style={{
  //   opacity: showMore ? '1' : '0',
  //   zIndex: showMore ? '40' : '-40',
  //   transition: '0.5s',
  //   translate: showMore ? '0' : '-1000px'
  // }}
  >
    <div className="relative">
      <div className="absolute right-0 top-[-10px] z-40 font-bold text-black hover:cursor-pointer rounded-full shadow-lg shadow-gray-400 w-[50px] h-[50px] bg-white">
        <div 
          className="w-full h-full flex items-center justify-center text-3xl"
          onClick={() => show(null)}
        >
          X
        </div>
      </div>
    </div>
    <Fade duration={10000}>
      {instruments.inst.map((inst, i) => (
        <div key={i} className="each-slide">
          <div className="mb-5 mx-auto">
            <img
              src={inst.img}
              className="h-80 rounded-[24px] mt-4 shadow-lg shadow-gray-400"
            />
          </div>
          <h2 className="text-center text-lg font-bold">{inst.title}</h2>
          <ul className="p-8 list-disc flex flex-col w-3/4 m-auto">
            {
              inst.esp.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
      ))}
    </Fade>
    <div className="mx-auto flex flex-col items-center gap-y-4 mt-8">
      <h2 className="font-bold text-xl text-white">{instruments.title}</h2>
      <p className="py-2 px-8 text-center text-white font-light">
        {instruments.salaDesc}
      </p>
      <button
        type="button"
        onClick={() => show(null)}
        style={{ minWidth: '200px' }}
        className="mx-auto middle none center rounded-lg bg-gray-800 py-3 self-end px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Cerrar
      </button>
    </div>
  </div>
// );
)
export default ModalRoom;
