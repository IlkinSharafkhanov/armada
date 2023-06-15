import React from "react";
import { MdLocationPin } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { MdCancel } from "react-icons/md"

const ContactCards = ({ subHead, span1, span2 }) => {
  return (
    <div className="flex align-baseline gap-x-9 tablet:flex-col tablet:gap-x-0 tablet:justify-center tablet:gap-y-8 tablet:items-center">
      <div className="text-button-gold text-4xl">
        {subHead.includes("Physical") ? (
          <MdLocationPin />
        ) : subHead.includes("Email") ? (
          <HiOutlineMail />
        ) : subHead.includes("Phone") ? (
          <BsTelephone />
        ) : <MdCancel/>
        }
      </div>
      <div className="tablet:text-center">
        <h3 className="mb-3 font-semibold">{subHead}</h3>
        <p className="font-modern text-grey-p mb-2">{span1}</p>
        <p className="font-modern text-grey-p">{span2}</p>
      </div>
    </div>
  );
};

export default ContactCards;
