import { ReactComponent as Logo } from "../images/DESSERT FACTORY.svg";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Twitter } from "../images/akar-icons_twitter-fill.svg";
import { ReactComponent as Instagram } from "../images/bxl_instagram-alt.svg";
import { ReactComponent as Web } from "../images/web.svg";
import email from "../images/clarity_email-solid.svg";
import phone from "../images/carbon_phone-filled.svg";
import location from "../images/ci_location.svg";
export default function Footer(pros) {
  return (
    <footer id="contact" className="relative bg-primary pb-[50px]">
      <div className="as-container  pt-[50px] flex gap-[30px] flex-col items-center md:items-start [&_div]:text-white [&_strong]:block [&_strong]:mb-[20px]  [&_strong]:capitalize [&_strong]:text-[24px] [&_a]:block  pb-[20px] md:flex-row justify-between ">
        <div>
          <Logo></Logo>
        </div>
        <div className=" max-w-[750px] w-full flex flex-col justify-between md:flex-row  [&_div]:text-center md:[&_div]:text-left items-center md:items-start gap-[20px] md:gap-0 ">
          <div className=" [&_a]:capitalize [&_a:not(:last-child)]:mb-[18px] ">
            <strong>link</strong>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
          </div>
          <div className="[&_img]:w-[25px] [&_img]:inline-block [&>div:not(:last-child)]:mb-[18px]   ">
            <strong>contact</strong>
            <div>
              <img src={email} alt="" /> halo@dessertfactory.com
            </div>
            <div>
              <img src={phone} alt="" /> 225-776-800
            </div>
            <div>
              <img src={location} alt="" /> st. kemanggisan asem no.23, jakarta
            </div>
          </div>
          <div className="flex gap-[30px] items-center mt-[20px] md:mt-0  ">
            <Facebook></Facebook>
            <Twitter></Twitter>
            <Instagram></Instagram>
            <Web></Web>
          </div>
        </div>
        <div className="text-center left-0 right-0 absolute  bottom-[15px] text-[12px]">
          made with love by idpan.
        </div>
      </div>
    </footer>
  );
}
