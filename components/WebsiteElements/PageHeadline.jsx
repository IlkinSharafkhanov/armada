import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const PageHeadline = ({ specPage }) => {
  const route = useRouter();
  const pathname = route.pathname;
  let heading = "WTH IS THIS";

  if (pathname === "/products") {
    specPage = "SHOP";
  } else if (pathname === "/about") {
    specPage = "ABOUT";
  } else if (pathname === "/contact") {
    specPage = "CONTACTS";
  }

  const headingSmall = specPage.toLowerCase();
  heading = headingSmall.charAt(0).toUpperCase() + headingSmall.slice(1);

  return (
    <div className="flex w-full items-center justify-center flex-col mb-14">
      <span className="font-modern text-xs">
        <Link href="/" className="text-gold">
          HOME
        </Link>{" "}
        / {specPage}
      </span>
      <h2 className="mt-5 text-5xl font-bold">{heading}</h2>
    </div>
  );
};

export default PageHeadline;
