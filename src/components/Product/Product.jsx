import React, { useState } from "react";
import ProductList from "./ProductList";
import { GoHeartFill } from "react-icons/go";

function Product({ searchTerm,addToCart,addToWishlist }) {
  const categories = ["All", "Men", "Women", "Kids", "New Arrival", "On Sale"];

  const [activeTab, setActiveTab] = useState("All");

  const filteredItem = ProductList.filter((item) => {
    const matchesCategory =
      activeTab === "All" ||
      (activeTab === "New Arrival" && item.newArrival) ||
      (activeTab === "On Sale" && item.onSale) ||
      activeTab === item.category;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const renderProducts = filteredItem.map((product) => {
    return (
      //Card
      <div className="bg-zinc-100 p-5 border-1 border-zinc-300 rounded-lg">
        {/* Card Header  */}
        <div className="flex justify-between items-center">
          <button className="text-3xl text-zinc-300"
          onClick={()=>addToWishlist(product)}
          >
            <GoHeartFill />
          </button>
          <div>
            {(product.onSale || product.newArrival) && (
              <span
                className={`px-3 py-1 text-white rounded-lg
                  ${product.onSale ? "bg-red-600" : "bg-green-600"}
                `}
              >
                {product.onSale ? "Sale" : "New"}
              </span>
            )}
          </div>
        </div>

        {/* Card Image  */}
        <div className="w-full h-[30vh]">
          <img src={product.image} />
        </div>

        {/* Card Details  */}
        <div className="text-center mt-4">
          <h3 className="text-[1.4rem] font-semibold">{product.name}</h3>
          <div className="mt-1 mb-5">
            {product.onSale && (
              <span className="text-zinc-600 font-semibold text-lg line-through mr-8">
                ${product.price.toFixed(2)}
              </span>
            )}
            <span className="text-red-600 font-semibold text-lg">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button className="bg-blue-600 text-white text-lg py-3 w-full rounded cursor-pointer active:bg-blue-700"
          onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <section
      id="product-section"
      className="max-w-[1300px] mx-auto px-12 py-10"
    >
      {/* Tabs  */}
      <div className="flex gap-3 justify-center items-center mt-8">
        {categories.map((category) => {
          return (
            <button
              key={categories}
              className={`text-lg px-8 py-2 rounded-full cursor-pointer
          ${activeTab === category ? "bg-blue-600 text-white" : "bg-zinc-100"}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-4 gap-9 mt-12">
        {
          renderProducts.length === 0 ?
          <p className="text-center col-span-4 text-lg text-zinc-800">No Product Found</p> :
          renderProducts
        }
        </div>
    </section>
  );
}

export default Product;
