import FooterLogo from "./../assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="snap-section flex h-fit w-full  flex-wrap justify-between gap-3 bg-[#4f4235] p-3 md:flex-col md:items-center">
      <div className="flex gap-2">
        <img className="h-7 w-7" src={FooterLogo} alt="logo" />
        <span className="text-white">ClanDestine</span>
      </div>
      <div className="flex flex-wrap gap-3 md:flex-col">
        <div className="flex h-full items-center justify-center gap-1">
          <FontAwesomeIcon className="text-white" icon={faPhone} />
          <div className="text-xs text-white">690 097 186</div>
        </div>
        <div className="flex h-full items-center justify-center gap-1">
          <FontAwesomeIcon className="text-white" icon={faEnvelope} />
          <div className="text-xs text-white">sandrabielak21@gmail.com</div>
        </div>
        <div className="flex h-full items-center justify-center gap-1 ">
          <FontAwesomeIcon className="text-white" icon={faLocationDot} />
          <div className="text-xs text-white">
            39-200 Nagawczyna Nagawczyna 109D
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
