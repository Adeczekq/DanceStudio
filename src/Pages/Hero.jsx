import Logo from "./../assets/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Hero({ handleClick }) {
  return (
    <div className="snap-section flex h-screen flex-col items-center justify-center  bg-primary">
      <img className="h-3/4" src={Logo} alt="logo" />
      <div className="element " onClick={handleClick}>
        <FontAwesomeIcon
          className="element animate-bounce: h-12 cursor-pointer"
          icon={faArrowDown}
        />
      </div>
    </div>
  );
}

export default Hero;
