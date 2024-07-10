import { useState, useEffect } from "react";
import { photos, videos } from "./media";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const allMedia = [...photos, ...videos];

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
    <div className="px-[100px] sm:px-4">
      <Link to="/">
        <FaArrowLeft className="fixed left-8 top-9 text-2xl sm:left-1" />
      </Link>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="5px">
          {photos.map((photo) => (
            <img
              className="cursor-pointer"
              key={photo.src}
              src={photo.src}
              alt=""
              onClick={() => openModal(photo)}
            />
          ))}
          {videos.map((video) => (
            <div
              key={video.src}
              onClick={() => openModal(video)}
              className="relative flex cursor-pointer items-center justify-center"
            >
              <video className="h-full w-full" poster={video.poster}>
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaPlay className="text-4xl text-white" />
              </div>
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
            className="absolute left-4 cursor-pointer text-4xl text-white"
            onClick={prevMedia} // Przejdź do poprzedniego elementu
          />
          <FaArrowRight
            className="absolute right-4 cursor-pointer text-4xl text-white"
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
