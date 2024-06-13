import FooterLogo from "./../assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="w-full snap-section h-fit gap-3  bg-[#4f4235] flex justify-between p-3 flex-wrap md:flex-col md:items-center">
      <div className="flex gap-2">
        <img className="h-7 w-7" src={FooterLogo} alt="logo" />
        <span className="text-white">ClanDestine</span>
      </div>
      <div className="flex gap-3 flex-wrap md:flex-col">
        <div className="flex gap-1 items-center justify-center h-full">
          <FontAwesomeIcon className="text-white" icon={faPhone} />
          <div className="text-white text-xs">+48 222 333 444</div>
        </div>
        <div className="flex gap-1 items-center justify-center h-full">
          <FontAwesomeIcon className="text-white" icon={faEnvelope} />
          <div className="text-white text-xs">sandrabielak@gmail.com</div>
        </div>
        <div className="flex gap-1 items-center justify-center h-full ">
          <FontAwesomeIcon className="text-white" icon={faLocationDot} />
          <div className="text-white text-xs">Dębica 39-200 Strażacka 12</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
