import React from "react";
import "@/styles/css/crackers.css";
import CustomModal from "@/components/modal/CustomModal";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

interface ProductDetailProps {
  isOpen: boolean;
  handleModalClose: () => void;
}

const ProductDetails: React.FC<ProductDetailProps> = ({
  isOpen,
  handleModalClose,
}) => {
  const currentStars = 3.5;

  return (
    <CustomModal
      isOpen={isOpen}
      closeModal={handleModalClose}
      size="3xl"
      position="center"
      scrollable={false}
    >
      <div className="p-4 md:p-5">
        <section className="rounded-md">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between">
              {/* Left Side */}
              <div className="block h-auto w-full sm:w-1/3">
                <div className="m-2">
                  <img
                    src="https://i.postimg.cc/X799Yjd4/product-1.jpg"
                    alt="product_details"
                    className="h-[250px] p-2 w-full object-cover rounded-xl bg-center bg-cover"
                  />

                  <div className="text-left mx-2 mb-2 p-1">
                    <h4 className="text-[1.3em] font-bold text-gray-700">
                      Nike Air Max
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Men's Red Printed Sneakers
                    </p>
                    <p className="mt-1 text-[1.1em] font-semibold">
                      ₹824{" "}
                      <span className="line-through text-[0.7em] font-normal text-gray-500">
                        ₹4000
                      </span>{" "}
                      <span className="text-[#03ac13] font-bold">79% OFF</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      inclusive of all taxes
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5 mx-4">
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
              </div>

              {/* Right Side */}
              <div className="block w-full sm:w-2/3">
                <div className="text-left my-4 mx-5">
                  <h4 className="text-lg font-bold mb-2">
                    PRODUCT DESCRIPTION
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">
                    Elevate your style with this classy pair of Casual Shoes
                    from the house of Our brand. Featuring a contemporary
                    refined design with exceptional comfort, this pair is
                    perfect to give your quintessential dressing an upgrade.
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="text-gray-700 font-bold">
                      Country of Origin -
                    </span>{" "}
                    India
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="text-gray-700 font-bold">
                      Manufactured By -
                    </span>{" "}
                    S.K. INTERNATIONAL AJUDD PURAM BAGDA TAHSIL AGRA U.P.{" "}
                    <span className="text-[0.85em]">
                      282001, 9759860599, sheela.woakers@gmail.com
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="text-gray-700 font-bold">Packed By -</span>{" "}
                    S.K. INTERNATIONAL AJUDD PURAM BAGDA TAHSIL AGRA U.P.{" "}
                    <span className="text-[0.85em]">
                      282001, 9759860599, sheela.woakers@gmail.com
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="text-gray-700 font-bold">Commodity -</span>{" "}
                    Men's Casual Shoes
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="text-gray-700 font-bold">Sold By -</span>{" "}
                    Next Tree Private Limited
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mx-4 my-2">
                  <button className="bg-[#D83344] flex-none sm:flex-1 w-full text-white text-sm font-semibold cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] px-5 py-2.5 rounded-md border-[none]">
                   
                    Add to Cart
                  </button>
                  <button className="bg-[#FF9B17] flex-none sm:flex-1 w-full text-black text-sm font-semibold cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] px-5 py-2.5 rounded-md border-[none]">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
              {/* Left Side */}
              <div className="block h-auto w-full sm:w-1/3">
                
              </div>
              {/* Right Side */}

              <div className="block w-full sm:w-2/3">
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </CustomModal>
  );
};

export default ProductDetails;
