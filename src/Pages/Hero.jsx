import Logo from "./../assets/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Hero({ handleClick }) {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-primary  snap-section">
      <img className="h-3/4" src={Logo} alt="logo" />
      <div className="element " onClick={handleClick}>
        <FontAwesomeIcon
          className="h-12 cursor-pointer element "
          icon={faArrowDown}
        />
      </div>
    </div>
  );
}

export default Hero;
