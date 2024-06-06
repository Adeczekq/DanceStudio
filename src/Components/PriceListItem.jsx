import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function PriceListItem({ title }) {
  return (
    <span className="flex gap-5 items-center text-2xl">
      <FontAwesomeIcon className="text-[#C4A484]" icon={faCheck} />
      {title}
    </span>
  );
}

export default PriceListItem;
