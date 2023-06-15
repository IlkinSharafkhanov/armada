import Head from "next/head";
import { useContext } from "react";
import { BiLike } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import ColoredCards from "../components/Cards/ColoredCards";
import Products from "../components/Cards/Products";
import ColoredDiv from "../components/WebsiteElements/ColoredDiv";
import GreyButton from "../components/Buttons/GreyButton";
import SideBar from "../components/WebsiteElements/SideBar";
import Link from "next/link";
import Context from "../components/Contexts";

export default function Home() {
  const { activeNavBar, setActiveNavBar } = useContext(Context);
  activeNavBar?document.body.style.overflow = "hidden":document.body.style.overflow = "auto"
  return (
    <>
      <Head>
        <title>Armada Concept</title>
      </Head>
      <SideBar />
      <div
        style={
          activeNavBar === true
            ? { filter: "blur(5px) brightness(0.5)", transition: "0.4s ease" }
            : { filter: "none" }
        }
      >
        <div
          className={`flex items-center h-screen mb-12 bg-fixed bg-center custom-img px-16 pt-48 tablet:px-12`}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
          <div className="text-white-web z-[2] mt-[-10rem] w-2/3 laptop2:w-auto tablet:items-center tablet:flex tablet:flex-col">
            <span className="text-gold text-base font-modern tablet:mb-8">
              NEW COLLECTION
            </span>
            <h1 className="text-7xl leading-tight tablet:text-[40px] tablet:text-center tablet:mb-4">
              Beautifully Crafted Modern Furniture
            </h1>
            <p className="text-base font-modern tablet:text-center tablet:font-thin">
              In consequat, quam id sodales hendrerit, eros mi leo, nec lacinia
              risus neque tristique augue. Proin tempus urna vel congue
              elementum.
            </p>
            <Link href="/products">
              <button className="py-3 px-7 mt-12 bg-button-gold font-modern duration-300 hover:bg-button-hover">
                Explore Now
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full bg-white px-16 tablet:px-12">
          <div className="w-full bg-white relative bottom-24 flex py-16 px-10 z-[9] shadow-xl items-start justify-center">
            <div className="flex px-8 justify-evenly laptop2:px-0 tablet:flex-col tablet:gap-y-6 tablet:px-0">
              <div className="flex flex-col justify-center items-center text-center w-[33%] mx-8 tablet:w-full tablet:mx-0">
                <BiLike className="mb-8 text-5xl text-gold" />
                <h3 className="mb-7 text-xl font-semibold">High Quality</h3>
                <p className="font-modern text-grey-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
                  eiusmod tempor.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-center w-[33%] mx-8 tablet:w-full tablet:mx-0">
                <TbTruckDelivery className="mb-8 text-5xl text-gold" />
                <h3 className="mb-7 text-xl font-semibold">Fast Delivery</h3>
                <p className="font-modern text-grey-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
                  eiusmod tempor.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-center w-[33%] mx-8 tablet:w-full tablet:mx-0">
                <AiOutlineSafetyCertificate className="mb-8 text-5xl text-gold" />
                <h3 className="mb-7 text-xl font-semibold">Best Warranty</h3>
                <p className="font-modern text-grey-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
                  eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-16 pb-20 tablet:px-12">
          <div className="w-full gap-y-6 flex justify-center flex-wrap gap-x-7 laptop2:gap-x-4">
            <ColoredCards
              numberOfProducts="24"
              productType="Lamps"
              imgSrc="/images/cat-img-1-2@2x.jpg.webp"
            />
            <ColoredCards
              numberOfProducts="32"
              productType="Armchairs"
              imgSrc="/images/cat-img-2@2x.jpg.webp"
            />
            <ColoredCards
              numberOfProducts="50"
              productType="Tables"
              imgSrc="/images/cat-img-3@2x.jpg.webp"
            />
            <ColoredCards
              numberOfProducts="83"
              productType="Sofas"
              imgSrc="/images/cat-img-4@2x.jpg.webp"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center mb-9">
            <h2 className="text-4xl font-semibold mb-4 tablet:text-2xl">
              Featured Products
            </h2>
            <span className="text-grey-p text-base font-modern tablet:font-thin">
              Check out latest updates
            </span>
          </div>
          <div className="w-full px-16 flex flex-wrap gap-x-6 gap-y-10 mb-10 justify-center tablet:px-12">
            <Products
              divWidth="w-[31%]"
              picHeight="350"
              productImg="/images/oscarBedroom.png"
              productName="Oscar Bedroom"
              productPrice="1200"
            />
            <Products
              divWidth="w-[31%]"
              picHeight="350"
              productImg="/images/rivaDiningRoom.png"
              productName="Riva Dining Room"
              productPrice="1400"
            />
            <Products
              divWidth="w-[31%]"
              picHeight="350"
              productImg="/images/zaraBedroom.png"
              productName="Zara Bedroom"
              productPrice="1100"
            />
            <Products
              divWidth="w-[31%]"
              picHeight="350"
              productImg="/images/zarafetDiningRoom.png"
              productName="Zarafet Dining Room"
              productPrice="1000"
            />
            <Products
              divWidth="w-[31%]"
              picHeight="350"
              productImg="/images/exenBedroom.png"
              productName="Exen Bedroom"
              productPrice="1200"
            />
            <Products
              divWidth="w-[31%]"
              picHeight="350"
              productImg="/images/peraBedroom.png"
              productName="Pera Bedroom"
              productPrice="1500"
            />
          </div>
          <div>
            <GreyButton buttonText="View all" />
          </div>
        </div>
        <div className="h-screen px-16 py-20 tablet:px-12 phone:h-fit">
          <ColoredDiv
            mainColor="#ffff"
            productImg="/images/brownPic.png"
            subColor="3a0f01"
          />
        </div>
        <div className="px-16 tablet:px-12">
          <div className="flex justify-between mb-10 tablet:flex-col tablet:items-center">
            <h2 className="text-4xl tablet:mb-6 tablet:text-2xl">
              Trending Now
            </h2>
            <GreyButton buttonText="Browse Shop" />
          </div>
          <div className="flex laptop:flex-wrap w-full gap-x-6 pb-16 laptop:gap-y-10">
            <Products
              divWidth="w-[24.5%]"
              picHeight="250"
              productImg="/images/oscarBedroom.png"
              productName="Oscar Bedroom"
              productPrice="1200"
            />
            <Products
              divWidth="w-[24.5%]"
              picHeight="250"
              productImg="/images/rivaDiningRoom.png"
              productName="Riva Dining Room"
              productPrice="1400"
            />
            <Products
              divWidth="w-[24.5%]"
              picHeight="250"
              productImg="/images/zaraBedroom.png"
              productName="Zara Bedroom"
              productPrice="1100"
            />
            <Products
              divWidth="w-[24.5%]"
              picHeight="250"
              productImg="/images/zarafetDiningRoom.png"
              productName="Zarafet Dining Room"
              productPrice="1000"
            />
          </div>
        </div>
      </div>
    </>
  );
}
