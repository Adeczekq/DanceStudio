import { useEffect, useRef } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
import Pricing from "./Pages/Pricing";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Pages/Footer";
import Gallery from "./Pages/Gallery";
import GalleryPage from "./Pages/GalleryPage";
import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const aboutRef = useRef(null);

  const handleClick = () => {
    aboutRef.current.scrollIntoView();
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Hero handleClick={handleClick} />
            <div
              className="bg-gradient-to-t from-white to-primary p-16 md:p-6"
              ref={aboutRef}
            >
              <About />
            </div>
            <Pricing />
            <Gallery />

            <Contact />
            <Footer />
          </div>
        }
      />
      <Route path="galeria" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
