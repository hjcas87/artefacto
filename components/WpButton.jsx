
const WpButton = () => (
  <div className="relative w-20 sm:w-24">
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
