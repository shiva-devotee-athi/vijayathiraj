import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import "@/styles/css/crackers.css";
import axios from "axios";

const Products: React.FC = () => {
  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    const response = await axios.get("http://localhost:3005/user/");

    if (response.status === 200) {
    }
  };
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
