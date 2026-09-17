import Details from "./components/Details";
import Footer, { FloatingCall } from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import LevelsOfCare from "./components/LevelsOfCare";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Reviews from "./components/Reviews";
import TrustSection from "./components/TrustSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body text-navy-800">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Gallery />
        <Programs />
        <LevelsOfCare />
        <Details />
        <Reviews />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
