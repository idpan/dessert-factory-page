import Button from "../utility/Button";
import style from "../assets/styles/Hero.module.css";
export default function Hero(props) {
  return (
    <section className={style.hero}>
      <div className="absolute bg-[#A5ACAB] right-0 bg-no-repeat bg-cover bottom-0 left-[-82px] top-[-208px] bg-hero-mobile lg:hidden  "></div>
      <div className="backdrop h-[75vh] lg:h-full  lg:w-[75vw]   "></div>
      <div className={style.hero__content}>
        <h1 className={style.hero__title}>
          <strong>dessert</strong>
          <br />
          <strong className={style.hero__title_secondLine}>factory</strong>
        </h1>
        <p className={style.hero__description}>
          place that you can find your happiness bakery, cupcake and many
          dessert that wil bring happines to your home
        </p>
        <a href="#menu">
          <Button className={style.hero__ctaButton}>order now</Button>
        </a>
      </div>
    </section>
  );
}
