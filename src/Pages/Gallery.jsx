import Picture from "./../assets/Picture.png";
import { Link } from "react-router-dom";
function Gallery() {
  return (
    <div className="snap-section relative flex h-screen flex-col  gap-24 p-16 xl:h-fit md:h-fit md:p-4 ">
      <h1 data-aos="fade-up" className=" sacramento-regular text-8xl   ">
        Galeria
      </h1>
      <div className="grid place-items-center ">
        <Link to="galeria">
          <img
            className=" picture swing w-[600px] hover:cursor-pointer"
            src={Picture}
            alt="logobg"
          />
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
