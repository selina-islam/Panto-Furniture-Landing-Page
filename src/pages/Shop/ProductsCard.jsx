import React from "react";
import Rating from "../../components/Rating";
import { FiPlus } from "react-icons/fi";

function ProductsCard({ products }) {
  return (
    <div>
      <div className="bg-[#FAFAFA] flex justify-center items-center">
        <img
          src={products.imageUrl}
          alt="Product-Image"
          className="h-55 w-50"
        />
      </div>
      <div className="bg-white  shadow-sm p-2 m-2">
        <h4 className="text-base mb-1 ">{products.category}</h4>
        <h3 className="font-semibold text-xl mb-2">{products.name}</h3>
        <Rating rating={products.rating} />
        <div className="mt-5 flex items-center justify-between">
          <p className="text-gray-800 font-bold">
            <sup>$</sup> <span>{products.price}</span>
          </p>
          <button className="bg-gray-800 text-white rounded-full p-2 hover:bg-black/50">
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
