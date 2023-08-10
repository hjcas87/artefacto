import React from 'react';

const WpButton = () => (
  <div className="relative w-full h-full">
    <a
      href="https://api.whatsapp.com/send/?phone=5492235815178"
      target="_blank"
      className="fixed bottom-10 right-10 w-20 sm:w-24 sm:bottom-20 sm:right-20 z-50"
      rel="noreferrer"
    >
      <img
        key="whatsApp"
        src="./wpicon.png"
        alt="whatsApp"
        className="cursor-pointer"
      />
    </a>
  </div>
);

export default WpButton;
