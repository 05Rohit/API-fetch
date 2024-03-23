import React from "react";

const ProductCard = ({
  images,
  title,
  actor,
  year,
  runtime,
  type,
  language
}) => {
  return (
    <div>
      <div className="bg-gray-800 min-w-[250px] max-w-[300px] h-[480px] shadow-lg justify-center items-center  px-3 mt-8 mb-8 border-2 border-gray-600  hover:shadow-2xl ">
        <div className="max-h-[180px]">
          <img
            src={images}
            alt={title}
            className="min-h-[160px]  min-w-[230px] "
          />
        </div>

        <div className="flex justify-between p-1 mt-5">
          <div className="capitalize text-xl ">
          <p className="   text-[#EDBF15] font-semibold  ">{title} </p>
          <p className="text-sm  "> {language} </p>

          </div>
          
          <p className=" h-min text-[18] capitalize border-l-2 border-[#EDBF15] pl-2 mr-3 ">{type} </p>
        </div>
        <div className="pl-1 mt-2">
          <p>Actor's name : </p>
          <p className=" capitalize text-base ">{actor} </p>
        </div>

        <p className="p-1 mt-2  capitalize text-base">Year: {year} </p>
        <p className="p-1 capitalize text-base ">Duration: {runtime} </p>
      </div>
    </div>
  );
};

export default ProductCard;
