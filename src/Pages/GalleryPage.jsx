import { useState, useEffect } from "react";
import { photos, videos } from "./media";
import { FaArrowLeft, FaArrowRight, FaPlay, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Measure from "react-measure";
import { useSwipeable } from "react-swipeable";
import useScreenType from "../hooks/useScreenTypes";

function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const allMedia = [...photos, ...videos];
  const handleLoad = () => setIsLoading(false);

  const isMobile = useScreenType();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextMedia(),
    onSwipedRight: () => prevMedia(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    // Only allow swipe on mobile devices
    filterTaps: true,
    delta: 10, // Adjust this value based on your needs
  });

  useEffect(() => {
    if (selectedMedia) {
      setCurrentIndex(allMedia.indexOf(selectedMedia));
    }
    console.log(selectedMedia);
  }, [selectedMedia, allMedia]);

  const openModal = (media) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const nextMedia = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % allMedia.length;
      setSelectedMedia(allMedia[newIndex]);
      return newIndex;
    });
  };

  const prevMedia = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? allMedia.length - 1 : prevIndex - 1;
      setSelectedMedia(allMedia[newIndex]);
      return newIndex;
    });
  };

  return (
    <div className="px-[100px] sm:px-8 " {...(isMobile ? swipeHandlers : {})}>
      <Link to="/">
        <FaArrowLeft className="fixed left-8 top-9 text-2xl sm:left-1" />
      </Link>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="5px">
          {[...photos, ...videos].map((media, i) => (
            <div
              key={i}
              className="transition-all hover:scale-90"
              onClick={() => openModal(media)}
            >
              <Measure>
                {({ measureRef }) => (
                  <>
                    {media.type === "video" ? (
                      <div
                        ref={measureRef}
                        className="relative flex cursor-pointer items-center justify-center"
                      >
                        <video
                          className="h-full w-full "
                          poster={media.poster}
                          onLoadedData={handleLoad}
                        >
                          <source src={media.src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {isLoading && (
                            <FaSpinner className="animate-spin text-4xl text-white" />
                          )}
                          {!isLoading && (
                            <FaPlay className="text-4xl text-white" />
                          )}
                        </div>
                      </div>
                    ) : (
                      <img
                        ref={measureRef}
                        src={media.src}
                        alt="photo"
                        className="cursor-pointer"
                        onLoad={handleLoad}
                      />
                    )}
                  </>
                )}
              </Measure>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {selectedMedia && (
        <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black">
          <div
            className="absolute inset-0"
            onClick={closeModal} // Zamknij modal po kliknięciu tła
          />

          <FaArrowLeft
            className="absolute left-4  cursor-pointer text-4xl text-white md:hidden"
            onClick={prevMedia} // Przejdź do poprzedniego elementu
          />
          <FaArrowRight
            className="absolute right-4  cursor-pointer text-4xl text-white md:hidden"
            onClick={nextMedia} // Przejdź do następnego elementu
          />

          <span
            className="close-button absolute right-4 top-4 cursor-pointer text-3xl text-white"
            onClick={closeModal}
          >
            ×
          </span>
          {selectedMedia.type === "video" ? (
            <video
              key={selectedMedia.src}
              controls
              autoPlay
              className="max-h-full max-w-full"
            >
              <source src={selectedMedia.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={selectedMedia.src}
              alt=""
              className="max-h-full max-w-full"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
