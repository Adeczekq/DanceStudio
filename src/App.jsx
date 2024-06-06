import { useEffect, useRef } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
import Pricing from "./Pages/Pricing";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Pages/Footer";

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
    <div>
      <Hero handleClick={handleClick} />
      <div
        className="bg-gradient-to-t to-primary from-white p-16 md:p-6"
        ref={aboutRef}
      >
        <About />
      </div>
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
