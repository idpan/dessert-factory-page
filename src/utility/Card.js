import Button from "./Button";
export default function (props) {
  return (
    <div
      data-category={props.category}
      className="relative   h-[226px] w-[122px] rounded-[3px] overflow-hidden hover:overflow-visible bg-white shadow-2xl
     leading-tight md:w-[320px] md:h-[435px] "
    >
      <img
        src={props.image}
        className=" cursor-pointer hover:duration-700 hover:relative hover:z-30 hover:scale-125 scale-100 transition-transform "
        alt=""
      />

      <div className="px-[5px] md:pl-[30px] text-center md:text-left">
        <strong className=" font-normal block mb-[15px] mt-[5px]  capitalize font-della text-[14px] md:text-[32px]  ">
          {props.name}
        </strong>
        <div className="md:absolute bottom-[80px] ">
          <s className="block md:inline text-[10px] md:text-[14px] text-slate-400 ">
            Rp {props.primePrice}
          </s>
          <strong className=" block md:inline md:ml-2  text-[12px] md:text-[16px] ">
            Rp {props.actualPrice}
          </strong>
        </div>
        <Button className="absolute   md:mt-[25px] bottom-0 left-0 right-0 md:block lmd:px-0  py-[10px] text-[14px] md:text-[20px] md:py-[15px] md:rounded-[5px] ">
          order now
        </Button>
      </div>
    </div>
  );
}
