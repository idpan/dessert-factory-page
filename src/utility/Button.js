export default function Button(props){
    return(
        <button onClick={props.onClick} 
        className="py-[1.7rem] px-[2.9rem] bg-[#E08E4F] text-white font-medium font-montserrat " >
            {props.children}
        </button>
    )
}