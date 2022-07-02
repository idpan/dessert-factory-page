export default function (props) {
  return (
    <a
      href={props.link}
      className={`${props.className} font-montserrat 
      lmd:block lmd:w-full lmd:hover:bg-black hover uppercase text-white text-center lmd:py-[14px] lmd:text-[20px] `}
    >
      {props.children}
    </a>
  );
}
