function PriceCard({ title, children, price }) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#C4A484] justify-between p-5 flex flex-col gap-4  w-[500px] h-[500px]  poppins md:w-[350px]">
      <h2 className="font-medium text-4xl border-b-2 border-[#C4A484] p-4  ">
        {title}
      </h2>
      <div className="flex flex-col gap-8">{children}</div>
      <span className="text-4xl  ">{price}</span>
    </div>
  );
}

export default PriceCard;
