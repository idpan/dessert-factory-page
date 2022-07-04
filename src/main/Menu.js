import Card from "../utility/Card";
import menu from "../menu.json";
import img1 from "../images/menu-cupcake-1.png";
import img2 from "../images/Group 7.png";
import img3 from "../images/menu-capcake-3.png";
import img4 from "../images/menu-wafle-1.png";
import img5 from "../images/menu-wafle-2.png";
import img6 from "../images/menu-special.png";
import { useState } from "react";
const img = [img1, img2, img3, img4, img5, img6];
export default function Menu(props) {
  const [category, setCategory] = useState("all");

  return (
    <div className="as-container pt-[36px] md:pt-[64px] text-center mb-[100px]  ">
      <h2 className=" mb-[20px]  capitalize text-[32px] md:text-[80px] text-primary font-della ">
        menu
      </h2>
      <div className="[&_label]:text-[24px] hover:[&_label]:cursor-pointer [&_label]:capitalize [&_label:not(:last-child)]:mr-[100px] [&_input]:hidden hidden md:block mb-[100px] ">
        <label
          htmlFor="all-radio"
          onClick={() => setCategory("all")}
          id="all-label"
        >
          <input
            defaultChecked
            className="peer"
            name="category"
            id="all-radio"
            type="radio"
          />
          <span className=" peer-checked:border-b-primary peer-checked:border-b-4 pb-3 px-4 peer-checked:text-primary">
            all
          </span>
        </label>
        <label
          htmlFor="cupcake-radio"
          onClick={() => setCategory("cupcake")}
          id="cupcake-label"
        >
          <input
            className="peer"
            name="category"
            id="cupcake-radio"
            type="radio"
          />
          <span className="peer-checked:text-primary peer-checked:border-b-primary peer-checked:border-b-4 pb-3 px-4">
            cupcake
          </span>
        </label>
        <label
          htmlFor="pancake-radio"
          onClick={() => setCategory("pancake")}
          id="pancake-label"
        >
          <input
            className="peer"
            name="category"
            id="pancake-radio"
            type="radio"
          />
          <span className="peer-checked:text-primary peer-checked:border-b-primary peer-checked:border-b-4 pb-3 px-4">
            pancake
          </span>
        </label>
        <label
          htmlFor="special-radio"
          onClick={() => setCategory("special")}
          id="special-label"
        >
          <input
            className="peer"
            name="category"
            id="special-radio"
            type="radio"
          />
          <span className="peer-checked:text-primary peer-checked:border-b-primary peer-checked:border-b-4 pb-3 px-4">
            special
          </span>
        </label>
      </div>
      <div className=" mx-auto flex w-100% justify-center gap-x-[50px] gap-y-[70px] md:gap-x-[100px] md:gap-y-[150px] md:grid-cols-3  flex-wrap">
        {menu.map((obj) => {
          if (category !== "all") {
            if (obj.category !== category) return;
          }

          return (
            <Card
              category={obj.category}
              key={obj.id}
              image={img[obj.id - 1]}
              name={obj.name}
              primePrice={obj.primePrice}
              actualPrice={obj.actualPrice}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
