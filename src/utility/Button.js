export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={` hover:bg-[#e49961] py-[1.2rem] px-[2.5rem] bg-[#E08E4F] text-white font-medium font-montserrat capitalize ${props.className} `}
    >
      {props.children}
    </button>
  );
}
