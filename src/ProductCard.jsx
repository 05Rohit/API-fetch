import React from "react";

const ProductCard = ({ images,title,actor,dor,year,poster,genre,director,rated,runtime}) => {



  return (
    <div>
    
      <div className="bg-gray-800 min-w-[250px] max-w-[250px] h-[480px] shadow-lg justify-center items-center  px-3 mt-8 mb-8 border-2 border-gray-600  hover:shadow-2xl ">
        <div className="max-h-[180px]">
          <img
            src={images}
            alt={title}
            className="min-h-[160px]  min-w-[230px] "
          />
        </div>

        <p className="p-1 mt-5  capitalize text-xl font-bold ">
          {title}{" "}
        </p>
        <p className="p-1 mt-1  capitalize text-base ">
          {actor}{" "}
        </p>
        <p className="p-1  capitalize text-base">
          {year}{" "}
        </p>
        <p className="p-1  capitalize text-base ">
          {rated}{" "}
        </p>
        <p className="p-1 capitalize text-base ">
          {runtime}{" "}
        </p>
       
      </div>
    
    </div>
  );
};

export default ProductCard;
