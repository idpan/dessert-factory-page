import Button from "../utility/Button";

export default function Hero(props) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-hero-desktop bg-no-repeat bg-cover ">
      <div className="absolute bg-[#A5ACAB] right-0 bg-no-repeat bg-cover bottom-0 left-[-82px] top-[-208px] bg-hero-mobile md:hidden  "></div>
      <div className="backdrop h-[75vh] md:h-full backdrop md:w-[75vw] lg:w-[55vw]  "></div>
      <div className="absolute as-container bottom-[70px] left-0 right-0  md:top-[250px] text-center md:text-left  md:w-[35rem] ">
        <h1
          className="uppercase font-lora text-[#f2f2f2] tracking-[0.06em] text-[36px] md:text-[116px]
          mb-2 md:leading-[148px] "
        >
          <strong>dessert</strong>
          <br />
          <strong className="md:ml-[116px]">factory</strong>
        </h1>
        <p className="capitalize font-montserrat text-[#e2e2e2] text-[20px] md:text-[24px] mb-16 ">
          place that you can find your happiness bakery, cupcake and many
          dessert that wil bring happines to your home
        </p>
        <a href="/order">
          <Button className="bg-[#E08E4Fcc] rounded-[9px] text-[24px] ">
            order now
          </Button>
        </a>
      </div>
    </section>
  );
}
