import React, { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import ProductDetails from "./ProductDetails";

const ProductCard: React.FC = () => {
  const [addToActive, setAddToActive] = useState(false);
  const [detailModal, setDetailModal] = useState(false);

  const handleCloseDetails = () => {
    setDetailModal(false);
  };
  const currentStars = 3.5;
  const offerPercentage = 16;

  return (
    <div className="cont">
      <div className="product-card" onClick={()=>setDetailModal(true)}>
        <div className="product-card__image">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Red Nike Shoes"
          />
          <div className="flex absolute right-2 top-2">
            {!addToActive ? (
              <IoIosHeartEmpty
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setAddToActive(!addToActive)}
              />
            ) : (
              <IoIosHeart
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setAddToActive(!addToActive)}
              />
            )}
          </div>
        </div>
        <div className="product-card__info">
          <h2 className="product-card__title cursor-default hover:underline">
            Nike Air Max
          </h2>
          <div className="flex gap-0.5">
            <p className="rounded-sm text-sm font-bold bg-blue-300 text-sky-900 m-0 py-0 px-1 mr-1">
              {currentStars}
            </p>
            {[1, 2, 3, 4, 5].map((star, index) => {
              return (
                <span
                  key={index}
                  className="start text-xl"
                  style={{
                    cursor: "pointer",
                    color:
                      currentStars >= star || currentStars >= star - 0.5
                        ? "#FDCC0D"
                        : "gray",
                  }}
                >
                  {currentStars >= star ? (
                    <FaStar />
                  ) : currentStars >= star - 0.5 ? (
                    <FaRegStarHalfStroke />
                  ) : (
                    <FaRegStar />
                  )}
                </span>
              );
            })}
          </div>
          <p className="product-card__description cursor-default">
            Experience ultimate comfort and style with these iconic Nike Air Max
            sneakers.
          </p>
          <div className="product-card__price-row">
            <div className="flex flex-col">
              <span className="product-card__price">₹149.99</span>
              <div className="flex gap-1 items-center">
                <span className="rounded-sm text-sm font-bold bg-red-300 text-red-900 leading-normal px-1 py-0">
                  -{offerPercentage}%
                </span>

                <span className="text-gray-700 text-base line-through">
                  ₹100
                </span>
              </div>
            </div>
            <button className="product-card__btn">Add to Cart</button>
          </div>
        </div>
      </div>
      <ProductDetails
        isOpen={detailModal}
        handleModalClose={handleCloseDetails}
      />
    </div>
  );
};

export default ProductCard;
