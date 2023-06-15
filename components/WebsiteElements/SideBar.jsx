//react imports
import Link from "next/link";
import React, { useContext } from "react";
//font awesome
import {AiOutlineClose} from 'react-icons/ai'
//components
import Context from "../Contexts";

const SideBar = () => {

    const {activeNavBar, setActiveNavBar} = useContext(Context);
    const staticTranslate = "translate-x-full"
    const activeTranslate = "translate-x-0"
    console.log(activeNavBar);


  return (
    <div className={`w-[311px] h-screen fixed flex flex-col bg-white right-0 top-0 z-30 ${activeNavBar===true?activeTranslate:staticTranslate} transition-all ease-in-out duration-[0.5s] shadow-navbar`}>
      <div>
        <div className="flex p-5 justify-end text-xl">
          <span className="cursor-pointer" onClick={() => setActiveNavBar(!activeNavBar)}><AiOutlineClose/></span>
        </div>
        <nav className="p-8">
          <ul className="font-modern text-lg flex flex-col gap-x-4">
            <Link className="duration-300 hover:text-gold" href="/"><li>Home</li></Link>
            <Link className="duration-300 hover:text-gold" href="/products"><li>Products</li></Link>
            <Link className="duration-300 hover:text-gold" href="/about"><li>About</li></Link>
            <Link className="duration-300 hover:text-gold" href="/contact"><li>Contact</li></Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;