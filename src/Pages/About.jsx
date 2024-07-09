import LogoBg from "./../assets/LogoBg.png";

function About() {
  return (
    <div className="snap-section relative flex h-screen flex-col  gap-24 p-16 xl:h-fit md:h-fit md:p-0">
      <h1 data-aos="fade-up" className=" sacramento-regular text-8xl   ">
        O nas
      </h1>
      <p data-aos="fade-up" className="saira-semi w-1/2 text-2xl xl:w-full ">
        Zapraszamy na dynamiczne i energetyczne zajęcia taneczne z grupą
        "Clandestine", łączące hip-hop z nowoczesnym tańcem! Odkryj swoją pasję
        do ruchu w rytm najnowszych hitów i poznaj unikalne choreografie. Nasze
        zajęcia to nie tylko świetna zabawa, ale również doskonały trening,
        który wzmocni Twoje ciało i poprawi kondycję. Niezależnie od poziomu
        zaawansowania, u nas znajdziesz inspirację i wsparcie do rozwijania
        swoich umiejętności tanecznych. Dołącz do nas i poczuj wolność tańca!
      </p>
      <img
        className="absolute right-64 top-44 aspect-square w-[300px] rotate-45 opacity-20"
        src={LogoBg}
        alt="logobg"
      />
    </div>
  );
}

export default About;
