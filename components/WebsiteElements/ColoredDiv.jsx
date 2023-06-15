import Link from "next/link";
import React from "react";

const ColoredDiv = ({
  mainColor,
  subColor,
  productImg,
  specialText,
  mainText,
  descText,
}) => {
  return (
    <div style = {{backgroundColor: mainColor}} className="flex items-center tablet:h-auto h-full w-full tablet:flex-col tablet:w-full phone:h-auto">
      <div className="w-1/2 tablet:w-full tablet:pr-0 tablet:h-auto h-full pr-8 phone:w-full phone:h-auto phone:pr-0">
        <img className="h-full object-cover" src= {productImg} alt="brown furn" />
      </div>
      <div className="w-1/2 tablet:w-full tablet:py-8 h-full tablet:h:auto py-16 phone:w-full phone:h-auto">
        <div>
          <span style = {{color: subColor}} className = "font-modern text-base font-bold text-button-gold">SAVE UP TO 70%</span>
          <h2 className="text-6xl leading-normal my-6 tablet:my-4 phone:text-4xl">New Arrival Collection</h2>
          <p className="font-modern text-base text-grey-p mb-9">In consequat, quam id sodales hendrerit, eros mi leo, nec lacinia risus neque tristique augue.</p>
        </div>
        <div>
          <Link href="/products"><button style = {{backgroundColor: subColor}} className= "tablet:hidden bg-white-web text-black px-6 py-3 font-modern font-thin">Explore Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ColoredDiv;
