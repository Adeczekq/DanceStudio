import PriceCard from "../Components/PriceCard";
import PriceListItem from "../Components/PriceListItem";
function Pricing() {
  return (
    <div className="snap-section flex h-screen w-full flex-col items-center gap-10 bg-primary p-16 xl:h-fit md:p-4 ">
      <h2 data-aos="fade-up" className=" sacramento-regular text-8xl">
        Cennik
      </h2>
      <div
        data-aos="fade-up"
        className="flex h-full items-center  gap-20 xl:flex-col"
      >
        <PriceCard price="30zł" pirceSecond="80zł">
          <PriceListItem title="Wzmocnienie ciała" />
          <PriceListItem title="Zdolność tworzenia własnych połączeń ruchów" />
          <PriceListItem title="Zwiększenie poczucia własnej wartości" />
          <PriceListItem title="Rozwijanie umiejętności interpersonalnych" />
        </PriceCard>
      </div>
    </div>
  );
}

export default Pricing;
