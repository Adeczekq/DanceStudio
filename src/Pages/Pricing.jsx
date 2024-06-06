import PriceCard from "../Components/PriceCard";
import PriceListItem from "../Components/PriceListItem";
function Pricing() {
  return (
    <div className="h-screen w-full flex flex-col items-center gap-10 bg-primary p-16 snap-section md:p-4 xl:h-fit ">
      <h2 data-aos="fade-up" className=" text-8xl sacramento-regular">
        Cennik
      </h2>
      <div
        data-aos="fade-up"
        className="flex gap-20 h-full  items-center xl:flex-col"
      >
        <PriceCard title="Karnet indywidualny" price="20zł">
          <PriceListItem title="tekst dadasdsad" />
          <PriceListItem title="tekst dadasdsad" />
          <PriceListItem title="tekst dadasdsad" />
        </PriceCard>
        <PriceCard title="Karnet Grupowy" price="40zł">
          <PriceListItem title="tekst dadasdsad" />
          <PriceListItem title="tekst dadasdsad" />
          <PriceListItem title="tekst dadasdsad" />
        </PriceCard>
      </div>
    </div>
  );
}

export default Pricing;
