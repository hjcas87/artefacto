import { Footer, Navbar, WpButton } from "../components";
import {
  About,
  ExploreRooms,
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
    <ExploreRooms />
    <GetStarted />
    {/* <WhatsNew /> */}
    <World />
    <Insights />
    {/* <Feedback /> */}
    <Footer />
    <WpButton />
  </div>
);

export default Page;
