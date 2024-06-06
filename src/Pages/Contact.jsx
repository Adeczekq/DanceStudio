import avatar from "./../assets/avatar.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact h-screen flex justify-center items-center snap-section md:h-screen   ">
      <div className="flex flex-col gap-40 md:items-center md:mt-8">
        <div className=" shadow w-[600px] h-[300px] bg-redcard p-8 flex flex-col gap-16 relative z-[1] overflow-hidden card md:w-[95vw] md:h-[200px] md:gap-6 ">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-6 text-white  z-10">
              <span className="md:text-xs">tel: +48 222 333 444</span>
              <span className="md:text-xs">email: sandrabielak@gmail.com</span>
              <span className="md:text-xs">
                adres: Dębica 39-200 Strażacka 12
              </span>
            </div>
            <div>
              <img
                className="rounded-full h-28 w-28 border-redBorder border-8 relative z-10  md:h-20 md:w-20 "
                src={avatar}
                alt="avatar"
              />
            </div>
          </div>
          <div className="sacramento-regular text-white text-4xl  z-10 md:text-2xl">
            Sandra Bielak
          </div>
          <div className="sacramento-regular text-redBorder text-9xl absolute -bottom-8 -left-3 -z-[1] opacity-50">
            Bielak
          </div>
        </div>
        <div className=" shadow w-[600px]  h-[300px] bg-bluecard flex flex-col p-8 items-center  md:w-[95vw] md:h-[200px] ">
          <div className="flex gap-7 w-full items-center border-[#244f48] border-b-2 pb-4   ">
            <img
              className="rounded-full h-28 w-28 border-darkgreen border-8 relative md:h-20 md:w-20"
              src={avatar}
              alt="avatar"
            />
            <div className="flex flex-row items-center gap-5">
              <div className="sacramento-regular text-white text-6xl  md:text-2xl">
                Sandra
              </div>
              <div className=" sacramento-regular text-white text-6xl  md:text-2xl  ">
                Bielak
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full mt-6 h-full">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                className="h-8 text-white md:h-5"
                icon={faInstagram}
              />
              <span className="text-white md:text-xs">@SandraBielak</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                className="h-8  text-white md:h-5"
                icon={faFacebookF}
              />
              <span className="text-white md:text-xs">
                facebook.com/sandrabielak
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
