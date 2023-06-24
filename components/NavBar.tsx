import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="w-full  absolute z-10">
      <div className=" max-[1440px] mx-auto flex justify-between items-center sm:px-16 px-4 py-4  bg-transparent">
        <Link href={"/"} className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="LOGO"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue  rounded-full bg-white min-w-[130px] "
        />
      </div>
    </header>
  );
};

export default NavBar;
