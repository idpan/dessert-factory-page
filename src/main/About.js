export default function About(props) {
  return (
    <section
      id="about"
      className="relative lmd:pt-[70px] h-[542px]  md:h-[1024px] md:bg-[#FFF9F4]  lmd:bg-[top_left_-200px] md:grid grid-cols-2 "
    >
      <div
        className="lmd:absolute lmd:-z-30
       top-0 bottom-0 left-0 right-0 bg-bg-about bg-no-repeat h-full bg-cover "
      ></div>
      <div className="backdrop-about"></div>
      <div className="as-container text-center md:text-left ">
        <h2 className=" md:mt-[190px] capitalize text-primary text-[32px] md:text-[80px] font-della mb-[32px]">
          our story
        </h2>
        <p className="text-white md:text-black md:text-[24px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor, adipiscing elit ut aliquam, purus sit amet luctus
          venenatis, lectus magna fringilla urna, porttitor
        </p>
      </div>
      <span id="menu" className="absolute bottom-[50px]"></span>
    </section>
  );
}
