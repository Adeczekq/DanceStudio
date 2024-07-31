import avatar from "./../assets/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact snap-section flex h-screen items-center justify-center md:h-screen   ">
      <div className="flex flex-col gap-40 md:mt-8 md:items-center">
        <div className=" card relative z-[1] flex h-[300px] w-[600px] flex-col gap-16 overflow-hidden bg-redcard p-8 shadow md:h-[200px] md:w-[95vw] md:gap-6 ">
          <div className="flex items-center justify-between">
            <div className="z-10 flex flex-col gap-6  text-white">
              <span className="md:text-xs">tel: 690 097 186</span>
              <span className="md:text-xs">
                email: dance.clandestine@gmail.com
              </span>
              <span className="md:text-xs">
                adres: 39-200 Nagawczyna Nagawczyna 109D
              </span>
            </div>
            <div>
              <img
                className="relative z-10 h-28 w-28 rounded-full border-8 border-redBorder  object-cover md:h-20 md:w-20 "
                src={avatar}
                alt="avatar"
              />
            </div>
          </div>
          <div className="sacramento-regular z-10 text-4xl  text-white md:text-2xl">
            Sandra Bielak
          </div>
          <div className="sacramento-regular absolute -bottom-8 -left-3 -z-[1] text-9xl text-redBorder opacity-50">
            Bielak
          </div>
        </div>
        <div className=" flex h-[300px]  w-[600px] flex-col items-center bg-bluecard p-8 shadow  md:h-[200px] md:w-[95vw] ">
          <div className="flex w-full items-center gap-7 border-b-2 border-[#244f48] pb-4   ">
            <img
              className="relative h-28 w-28 rounded-full border-8 border-darkgreen object-cover md:h-20 md:w-20"
              src={avatar}
              alt="avatar"
            />
            <div className="flex flex-row items-center gap-5">
              <div className="sacramento-regular text-6xl text-white  md:text-2xl">
                Sandra
              </div>
              <div className=" sacramento-regular text-6xl text-white  md:text-2xl  ">
                Bielak
              </div>
            </div>
          </div>
          <div className="mt-6 flex h-full w-full justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                className="h-8 text-white md:h-5"
                icon={faInstagram}
              />
              <a
                href="https://www.instagram.com/_clandesitne_?igsh=Yzdobm14bjlqa3Ux&utm_source=qr"
                target="_blank"
                className="text-white md:text-xs"
              >
                @_clandesitne_
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                className="h-8  text-white md:h-5"
                icon={faFacebookF}
              />
              <a
                href="https://www.facebook.com/clandestine.dance.group"
                target="_blank"
                className="text-white md:text-xs"
              >
                facebook.com/sandrabielak
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
