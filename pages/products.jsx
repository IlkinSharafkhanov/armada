import React from "react";
import PageHeadline from "../components/WebsiteElements/PageHeadline";
import Products from "../components/Cards/Products";

const products = () => {
  return (
    <div className="items-center mb-12 bg-fixed bg-center px-16 pt-48 tablet:px-12">
      <PageHeadline />
      <div>
        <div className="flex justify-between my-6 items-center">
          <span className="font-modern text-[11px] text-grey-p tracking-wider">
            SHOWING ALL 8 RESULTS
          </span>
          <select className="font-modern text-grey-p text-[14px] shadow-select p-3" name="sort" id="sort">
            <option value="default">Default Sorting</option>
            <option value="latest">Sort by latest</option>
            <option value="lowToHigh">Sort by price: low to high</option>
            <option value="highToLow">Sort by price: high to low</option>
          </select>
        </div>
        <div className="flex flex-wrap w-full gap-x-6 pb-16 gap-y-10">
          <Products
            divWidth="w-[23.5%]"
            picHeight="250"
            productImg="/images/oscarBedroom.png"
            productName="Oscar Bedroom"
            productPrice="1200"
          />
          <Products
            divWidth="w-[23.5%]"
            picHeight="250"
            productImg="/images/rivaDiningRoom.png"
            productName="Riva Dining Room"
            productPrice="1400"
          />
          <Products
            divWidth="w-[23.5%]"
            picHeight="250"
            productImg="/images/zaraBedroom.png"
            productName="Zara Bedroom"
            productPrice="1100"
          />
          <Products
            divWidth="w-[23.5%]"
            picHeight="250"
            productImg="/images/zarafetDiningRoom.png"
            productName="Zarafet Dining Room"
            productPrice="1000"
          />
          <Products
            divWidth="w-[23.5%]"
            picHeight="250"
            productImg="/images/oscarBedroom.png"
            productName="Oscar Bedroom"
            productPrice="1200"
          />
          <Products
            divWidth="w-[23.5%]"
            picHeight="250"
            productImg="/images/rivaDiningRoom.png"
            productName="Riva Dining Room"
            productPrice="1400"
          />
          <Products
            divWidth="w-[23.5%]"
            picHeight="250"
            productImg="/images/zaraBedroom.png"
            productName="Zara Bedroom"
            productPrice="1100"
          />
          <Products
            divWidth="w-[23.5%]"
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

export default products;
