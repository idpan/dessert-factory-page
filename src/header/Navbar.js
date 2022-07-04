import Logo from "../icon/Logo";
import toggle from "../images/menu-toggle.svg";
import Button from "../utility/Button";
import Navlink from "./Navlink";
export default function Navbar(props) {
  return (
    <nav className="fixed z-50 right-0 left-0 top-0 bg-[#000000cc] h-[44px] w-100% md:h-[100px] ">
      <div className="as-container h-full flex justify-between items-center ">
        <a href="./">
          <Logo className="h-[30px] w-[61px] md:w-[132px] md:h-[62px] "></Logo>
        </a>

        <input id="toggle" type="checkbox" className="peer hidden" />
        <label htmlFor="toggle">
          <img src={toggle} alt="toggle" className="md:hidden" />
        </label>
        <div
          className=" peer-checked:block hidden md:block rounded-[3px]
        lmd:py-[30px] lmd:px-[20px] 
        lmd:bg-[#000000cc] lmd:absolute lmd:top-[67px] lmd:left-[20px] lmd:right-[20px]
        lmd:[&>a:not(:last-child)]:mb-[12px]  md:[&>a:not(:last-child)]:mr-[40px]
        "
        >
          <Navlink link="#home">home</Navlink>
          <Navlink link="#menu">menu</Navlink>
          <Navlink link="#contact">contact</Navlink>
          <Navlink link="#about">about</Navlink>
          <a href="#menu">
            <Button className="lmd:w-full lmd:text-[28px] lmd:py-[1rem] lmd:mt-[20px] md:py-[.8rem] md:px-[1.5rem] md:rounded-xl md:bg-[#E08E4Fcc] ">
              order now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
