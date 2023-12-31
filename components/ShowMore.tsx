"use client";

import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import React from "react";
import CustomButton from "./CustomButton";

const ShowMore = ({
  pageNumber,
  isNext,
}: {
  pageNumber: number;
  isNext: boolean;
}) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", String(newLimit));

    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
