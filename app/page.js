import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
    <div className="relative w-full h-full">
      <a href="https://api.whatsapp.com/send/?phone=5492235815178" target="_blank" className="fixed bottom-10 right-10 w-20 sm:w-24 sm:bottom-20 sm:right-20 z-50">
        <img
          key="whatsApp"
          src="./wpicon.png"
          alt="whatsApp"
          className="cursor-pointer"
        />
      </a>
    </div>
  </div>
);

export default Page;
