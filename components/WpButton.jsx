
const WpButton = () => (
  <div className="relative w-16 sm:w-20">
    <a
      href="https://api.whatsapp.com/send/?phone=5492235815178"
      target="_blank"
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
