import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Context from "../Contexts";

const Header = () => {
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [search, setSearch] = useState(false)
  const {activeNavBar, setActiveNavBar} = useContext(Context);

  const router = useRouter()

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 10) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  

  return (
    <div
    style={{ backgroundColor: `${color}` }}
    className="fixed justify-between left-0 top-0 w-full z-10 ease-in duration-300 px-16 text-white flex py-7 tablet:px-12"
    onClick={(e)=> search===true&&e.target.type!=="text"?setSearch(!search) :console.log("")}
    >
      <div className="flex items-center w-2/3">
        <Link href="/">
          <img className="mr-24" src="../images/Armada.svg" alt="" />
        </Link>
        <ul
          style={{ color: `${router.pathname==="/products"||router.pathname==="/about"?"black":textColor}` }}
          className="flex gap-x-16 pt-6 font-modern laptop:hidden"
        >
          <Link href="/">
            <li className={`duration-300 ${router.pathname==="/"?textColor:"text-black"} hover:text-gold`}>Home</li>
          </Link>
          <Link href="/products">
            <li className={`duration-300 ${router.pathname==="/products"?"text-gold":"text-black"} hover:text-gold`}>Products</li>
          </Link>
          <Link href="/about">
            <li className={`duration-300 ${router.pathname==="/about"?"text-gold":"text-black"} hover:text-gold`}>About</li>
          </Link>
          <Link href="/contact">
            <li className={`duration-300 ${router.pathname==="/contact"?"text-gold":"text-black"} hover:text-gold`}>Contact</li>
          </Link>
        </ul>
      </div>
      <div>
        <ul
          style={{ color: `${router.pathname==="/home"? textColor:"black"}` }}
          className="flex gap-x-11 pt-6 font-modern text-xl laptop:gap-x-6"
        >
          <li className="laptop:hidden cursor-pointer duration-300 hover:text-grey-hover">
            <AiOutlineSearch onClick={()=>setSearch(!search)} className={`${search===true?"hidden":"block"} transition-all duration-[1s] ease-in-out `}/>
            <input type="text" placeholder="Search..." className={`${search===false?"hidden":"block"} text-black transition-all duration-[1s] ease-in-out text-[15px] w-[200px] border-black border-[0.6px] border-opacity-20`}/>
          </li>
          <Link href="/shop">
            <li className="duration-300 hover:text-grey-hover">
              <AiOutlineShopping />
            </li>
          </Link>
          <Link href="/account">
            <li className="duration-300 hover:text-grey-hover">
              <MdOutlineAccountCircle />
            </li>
          </Link>
          <li className="hidden laptop:block" onClick={() => setActiveNavBar(!activeNavBar)}>
            <GiHamburgerMenu />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
