import React from "react";
import {RiVisaLine} from "react-icons/ri"
import {GrPaypal} from "react-icons/gr"
import {FaCcMastercard} from "react-icons/fa"
import {SiAmericanexpress} from "react-icons/si"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineTwitter, AiFillInstagram, AiFillYoutube} from "react-icons/ai"

const Footer = () => {
  return (
    <div style={{backgroundColor:"rgba(0,0,0, 1"}} className = "tablet:px-12 px-16 ">
      <div className="w-full text-white py-[70px] flex flex-wrap gap-x-16 laptop:gap-y-10 justify-evenly phone:justify-start">
        <div className="laptop:w-[45%]">
          <h4 className="mb-4">Contact us</h4>
          <p className="text-grey-subtext mb-5 font-modern">Phone: (+994) 50 222 02 50</p>
          <p className="text-grey-subtext mb-5 font-modern">Need help or have a question?<br/>Contact us at: armadaconcept@gmail.com</p>
          <p className="text-grey-subtext font-modern">Bakı şəhəri, Xırdalan, Riyad ticarət mərkəzi</p>
        </div>
        <div className="laptop:w-[45%]">
          <h4 className="mb-4">Account</h4>
          <ul className="flex flex-col gap-y-4">
            <li className="text-grey-subtext font-modern">
              <a className="underline" href="#">Products</a>
            </li>
            <li className="text-grey-subtext font-modern"> 
              <a className="underline" href="#">My wishlist</a>
            </li>
            <li className="text-grey-subtext font-modern">
              <a className="underline" href="#">Hot Offers</a>
            </li>
            <li className="text-grey-subtext font-modern">
              <a className="underline" href="#">Help</a>
            </li>
            <li className="text-grey-subtext font-modern">
              <a className="underline" href="#">Location</a>
            </li>
          </ul>
        </div>
        <div className="laptop:w-[45%]">
          <h4 className="mb-4">Useful Links</h4>
          <ul className="flex flex-col gap-y-4">
            <li className="text-grey-subtext font-modern">
              <a className="underline" href="">New Products</a>
            </li>
            <li className="text-grey-subtext font-modern"> 
              <a className="underline" href="">Best Sellers</a>
            </li>
            <li className="text-grey-subtext font-modern">
              <a className="underline" href="">Manufacturers</a>
            </li>
            <li className="text-grey-subtext font-modern">
              <a className="underline" href="">Supplies</a>
            </li>
            <li className="text-grey-subtext font-modern">
              <a className="underline" href="">Policy</a>
            </li>
          </ul>
        </div>
        <div className="laptop:w-[45%]">
          <h4 className="mb-4">Write to us</h4>
          <p className="text-grey-subtext font-modern">We are open for all <br/> kind of questions and suggestions</p>
          <input className="p-3 font-modern" type="email" placeholder="Your email address" name="" id="" />
          <button className="py-3 px-7 mt-12 bg-button-gold font-modern mb-6">
            Explore Now
          </button>
          <div>
            <ul className="text-grey-subtext flex gap-x-8">
                <li className="text-4xl"><RiVisaLine/></li>
                <li className="text-3xl"><GrPaypal/></li>
                <li className="text-3xl"><FaCcMastercard/></li>
                <li className="text-3xl"><SiAmericanexpress/></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-[70px] py-6 flex items-center justify-between laptop:flex-col laptop:gap-y-10">
        <div>
            <ul className="text-grey-subtext flex gap-x-6">
                <li><BsFacebook/></li>
                <li><AiOutlineTwitter/></li>
                <li><AiFillInstagram/></li>
                <li><AiFillYoutube/></li>
            </ul>
        </div>
        <div>
            <p className="text-grey-subtext font-modern"><span className="text-gold">Armada Concept</span> @ 2023 - Original Site by Sharafkhan</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
