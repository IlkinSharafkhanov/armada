import React from "react";
import PageHeadline from "../components/WebsiteElements/PageHeadline";
import { BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";
import WorkerCards from "../components/Cards/WorkerCards";
import Testimonials from "../components/Cards/Testimonials";
const about = () => {
  return (
    <div className="items-center mb-12 bg-fixed bg-center pt-48">
      <PageHeadline />
      <div className="about-img bg-center bg-cover w-full h-[600px]"></div>
      <div className="px-16 py-16 tablet:px-12">
        <h2 className="text-4xl mb-7 tablet:text-center tablet:text-2xl">Best quality furniture</h2>
        <div className="flex w-full tablet:flex-col tablet:text-center">
          <p className="w-[45%] mr-10 font-modern font-light tablet:w-full tablet:mr-0 tablet:mb-8">
            Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
            consectetur et luctus et, porta ut dolor. Curabitur ultricies
            ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel
            consectetur diam. Maecenas vitae egestas dolor. Fusce tempor magna
            at tortor aliquet finibus. Sed eu nunc sit amet elit euismod
            faucibus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Duis gravida eget neque vel
            vulputate.
          </p>
          <p className="w-[45%] font-modern font-light tablet:w-full">
            Cras eu elit congue, placerat dui ut, tincidunt nisl. Nulla leo
            elit, pharetra bibendum justo quis, cursus consectetur erat. Sed nec
            posuere turpis. Maecenas nec bibendum purus. Nulla fringilla, lorem
            iaculis iaculis fermentum, ligula nibh mollis ipsum, et scelerisque
            risus ante eu sem. Phasellus ac sagittis nisi. Suspendisse potenti.
            Nunc volutpat dui ipsum. Suspendisse potenti. In feugiat malesuada
            nisi quis laoreet.
          </p>
        </div>
      </div>
      <div className="px-16 tablet:px-12">
        <div className="armada-img bg-no-repeat bg-center  h-[400px] w-full bg-black flex justify-center items-center backdrop-blur-3xl rounded-md">
          <Link
            target="_blank"
            href="https://instagram.com/armada.mebel?igshid=NTc4MTIwNjQ2YQ=="
          >
            <BsFillPlayFill className="h-[100px] w-[100px] text-grey-subtext" />
          </Link>
        </div>
      </div>
      <div className="py-24 flex flex-col justify-center items-center px-16 laptop:py-14">
        <h2 className="text-4xl font-semibold mb-10">Our Story</h2>
        <div className="w-full flex items-center gap-x-14 laptop:flex-col laptop:justify-center">
          <img
            className="w-[48%] laptop:w-full laptop:mb-10"
            src="/images/aboutOurStory.jpg.webp"
            alt=""
          />
          <div className="w-[43%] laptop:w-full laptop:text-center">
            <h3 className="text-3xl mb-3 font-semibold">
              Placerat Quam Lectus Curabitur Dictum Velit
            </h3>
            <p className="font-modern text-base mb-12 text-grey-p font-extralight">
              Etiam elementum euismod commodo. Proin eleifend eget quam ut
              efficitur. Mauris a accumsan mauris.
            </p>
            <button className="py-3 px-6 mt-12 bg-button-gold font-modern text-white duration-300 hover:bg-button-hover laptop:mt-6">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="py-24 flex flex-col justify-center items-center px-16 tablet:px-12 laptop:py-14">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold mb-5">Meet our team</h2>
          <p className="font-extralight text-grey-p font-modern">
            We are sure about our quality
          </p>
        </div>
        <div className="w-full flex gap-x-9 tablet:flex-col tablet:gap-x-0 tablet:gap-y-8">
          <WorkerCards
            cardImg="/images/worker1.jpg.webp"
            workerName="Ilgar Sharafkahnov"
            workerPosition="CEO"
          />
          <WorkerCards
            cardImg="/images/worker2.jpg.webp"
            workerName="Vugar Malikov"
            workerPosition="CEO"
          />
          <WorkerCards
            cardImg="/images/worker3.jpg.webp"
            workerName="Ilkin Sharafkhanov"
            workerPosition="Developer"
          />
        </div>
      </div>
      <div className="py-24 flex flex-col justify-center items-center px-16 tablet:px-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold mb-5 tablet:text-2xl">Testimonials</h2>
          <p className="font-extralight text-grey-p font-modern">
            Some feedback from our clients
          </p>
        </div>
        <div className="w-full flex gap-x-9 tablet:flex-col tablet:gap-x-0 tablet:gap-y-8">
            <Testimonials clientName="Ali Aliyev" clientReview="Aenean sed nibh a magna posuere tempor faucibus pellentesque in aliquet congue tempor conguenim."/>
            <Testimonials clientName="Musa Afandiyev" clientReview="Aenean sed nibh a magna posuere tempor faucibus pellentesque in aliquet congue tempor conguenim."/>
            <Testimonials clientName="Sunal Nabiyev" clientReview="Aenean sed nibh a magna posuere tempor faucibus pellentesque in aliquet congue tempor conguenim."/>
        </div>
      </div>
      <div className="py-24 w-full flex justify-center items-center px-16 gap-x-9 tablet:px-12 tablet:py-14 tablet:flex-col tablet:gap-x-0 tablet:gap-y-8">
        <img className="w-[18%]" src="/images/LUCENTE-logo-small.png" alt="" />
        <img className="w-[18%]" src="/images/messe.png" alt="" />
        <img className="w-[18%]" src="/images/mobiant.png" alt="" />
        <img className="w-[18%]" src="/images/Teknik.jpg" alt="" />
        <img className="w-[18%]" src="/images/VanittiMobilya.jpg" alt="" />
      </div>
    </div>
  );
};

export default about;
