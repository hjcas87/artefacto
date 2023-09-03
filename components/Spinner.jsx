import React from 'react'

const Spinner = () => {
  return (
    <div className="w-full h-[600px] flex justify-items-center items-center flex-col text-white text-lg">
      <div className="sk-chase m-auto">
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
      </div>
      <p>Cargando, un momento...</p>
    </div>
  )
}

export default Spinner