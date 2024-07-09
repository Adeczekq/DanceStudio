import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function PriceListItem({ title }) {
  return (
    <span className="flex items-center gap-5 text-2xl md:text-lg">
      <FontAwesomeIcon className="text-[#C4A484]" icon={faCheck} />
      {title}
    </span>
  );
}

export default PriceListItem;
