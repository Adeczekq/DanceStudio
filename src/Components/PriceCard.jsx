import { FaRegCalendarCheck } from "react-icons/fa6";

function PriceCard({ children, price, pirceSecond }) {
  return (
    <div className="poppins  flex h-fit w-[650px] flex-col justify-between gap-4 rounded-lg  border-2 border-[#C4A484] bg-white px-12 py-16 md:w-[350px] md:px-6 md:py-8">
      <div className="flex flex-col gap-4  border-b-2 border-[#C4A484]  pb-10 text-4xl font-medium md:text-xl ">
        <h2>Karnet jednorazowy - {price}</h2>

        <h2>Karnet miesięczny - {pirceSecond}</h2>
      </div>
      <div className="flex flex-col gap-8 ">
        {children}
        <div className="flex items-center gap-5 text-2xl md:text-lg">
          <FaRegCalendarCheck className=" text-2xl text-[#C4A484]" />
          Zajęcia odbywają sie w każdą środę w godzinach 18-20
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
