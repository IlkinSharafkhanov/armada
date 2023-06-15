import React from "react";
import PageHeadline from "../components/WebsiteElements/PageHeadline";
import ContactCards from "../components/Cards/ContactCards";
import MessageToCompany from "../components/WebsiteElements/MessageToCompany";
import Products from "../components/Cards/Products";
import GreyButton from "../components/Buttons/GreyButton";

const contact = () => {
  return (
    <div className="items-center mb-12 bg-fixed bg-center pt-48">
      <PageHeadline />
      <div className="relative">
        <div className="bg-center bg-cover w-full h-[600px]">
            <img className="w-full h-full" src="/images/contactsPic.png" alt="" />
        </div>
        <div className="flex gap-x-24 px-48 py-16 w-full justify-center items-center absolute  top-[750px] left-0 inset-0 bigger-desktop:px-36 desktop:px-20 laptop:px-16 laptop2:px-10 tablet:static tablet:flex-col tablet:gap-x-0 tablet:top-auto tablet:left-auto tablet:inset-auto">
          <div className="w-[40%] flex flex-col gap-y-7 gap-x-9 py-8 tablet:w-full tablet:gap-x-0">
            <ContactCards
              subHead="Physical Address"
              span1="Xırdalan şəhəri, Bizim ev şəhərciyi"
              span2="Sıra 1, Mağaza 8"
            />
            <ContactCards
              subHead="Email Address"
              span1="samadshahsuvarov@gmail.com"
              span2="mobilheyat@yahoo.com"
            />
            <ContactCards
              subHead="Phone Numbers"
              span1="051-399-66-66"
              span2="055-365-55-65"
            />
          </div>
          <div className="bg-white">
            <MessageToCompany />
          </div>
        </div>
      </div>
      <div className="h-[700px] tablet:h-9"></div>
      <div className="px-16 tablet:px-12">
        <div className="flex justify-between mb-10 tablet:flex-col tablet:items-center">
          <h2 className="text-4xl tablet:mb-6 tablet:text-2xl">Trending Now</h2>
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
  );
};

export default contact;
