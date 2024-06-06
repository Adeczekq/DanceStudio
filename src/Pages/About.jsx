import LogoBg from "./../assets/LogoBg.png";

function About() {
  return (
    <div className="h-screen flex flex-col gap-24 relative  snap-section p-16 md:p-0 md:h-fit">
      <h1 data-aos="fade-up" className=" sacramento-regular text-8xl   ">
        O nas
      </h1>
      <p data-aos="fade-up" className="saira-semi text-2xl w-3/4 xl:w-full ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem beatae
        eos blanditiis molestias, labore eligendi hic. Culpa amet minus quia
        obcaecati aut explicabo quidem cupiditate minima atque commodi veritatis
        at nam iure adipisci est similique repellendus, mollitia quas magni enim
        inventore recusandae quae accusamus. Nemo, sequi itaque adipisci placeat
        provident accusantium molestias iure similique distinctio obcaecati vel
        quia nostrum magnam perspiciatis voluptatem et, minus maiores veniam
        deserunt! Facere quod laudantium officia sapiente veritatis? Repellendus
        earum illo sapiente consectetur hic eum illum maxime saepe iste, fugit
        nemo obcaecati deserunt, suscipit natus voluptatibus quam optio
        perspiciatis consequuntur incidunt eligendi tempore doloribus. Deserunt,
        deleniti atque? Quasi necessitatibus ad maxime molestias, suscipit
        impedit cumque blanditiis magnam soluta quas quisquam illum veniam
        aperiam ut maiores. Asperiores, aliquam. Ex laboriosam eligendi hic
        aspernatur praesentium quod cum ratione totam, neque dicta vero odit,
        consequuntur sunt perspiciatis sit eum asperiores illo aut optio omnis
        quaerat? Eum qui ullam quae rerum, dolorum voluptate consequuntur
        dolores adipisci consectetur quos! Minima possimus cum aut quae
        provident accusamus. Distinctio molestiae, vel nostrum in, nemo qui
        consequatur aspernatur laudantium asperiores doloremque mollitia?
        Tenetur tempore, nihil laboriosam ipsum quod ipsam consequuntur
        veritatis consequatur fugit voluptatem dolore quae qui numquam
        voluptatum, ex optio recusandae facilis!
      </p>
      <img
        className="absolute top-44 rotate-45 right-64 opacity-20 aspect-square w-[300px]"
        src={LogoBg}
        alt="logobg"
      />
    </div>
  );
}

export default About;
