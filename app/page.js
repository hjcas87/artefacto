import { Footer, Navbar, WpButton } from "../components";
import IgButton from '../components/IgButton';
import {
  About,
  ExploreRooms,
  Hero,
  ListOfRooms,
  Location,
  SpotifyList,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <ExploreRooms />
    <ListOfRooms />
    <SpotifyList />
    <Location />
    <Footer />
    <div className="fixed bottom-10 right-10 sm:bottom-20 sm:right-20 z-50 flex gap-8 flex-row-reverse">
      <WpButton />
      <IgButton />
    </div>
  </div>
);

export default Page;
