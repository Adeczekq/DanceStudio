import { useState, useEffect } from "react";

const useScreenType = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setScreenSize(true);
      else setScreenSize(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenType;
