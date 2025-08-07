import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
function Cart({ activePanel, handleClose, cart, removeFromCart,quantityIncreament,quantityDecreament,subTotal,shipping,orderTotal,setOrderSummary }) {
  return (
    <div
      className={`flex flex-col justify-between gap-5 z-2 fixed top-0 bottom-0 right-0 bg-zinc-100 w-[400px] left-auto border-l border-zinc-300 py-7 transform
    ${activePanel === "cart" ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Heading  */}
      <div className="px-10">
        <h3 className="text-zinc-800 font-bold text-3xl text-center">
          Your Cart
        </h3>
      </div>

      {/* Cart Items */}
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto scroll">
        {
          cart.length === 0 ? (<p className="text-zinc-800 text-center">Your Cart is empty</p>) :
          (cart.map((product, index) => (
            <div
              className={`flex items-center gap-3  px-5 py-1 border-y-1 border-zinc-300
                    ${(index + 1) % 2 === 0 ? "bg-blue-100" : "bg-white"}`}
            >
              {/* Image  */}
              <div className=" h-20 w-20">
                <img
                  src={product.image}
                  className="h-full w-full object-contain"
                />
              </div>
              {/* Product Details  */}
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="text-zinc-800 font-semibold text-lg">
                    {product.name}
                  </h4>
                  <button
                    className="w-8 h-8 bg-red-600 rounded-full text-white flex justify-center items-center mr-[27px] cursor-pointer active:bg-red-700"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <FaTrash />
                  </button>
                </div>

                <div className="flex justify-between">
                  <div>
                    {product.onSale && (
                      <span className="text-zinc-600 font-semibold text-lg line-through mr-5">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                    <span className="text-red-600 font-semibold text-lg">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-7 h-7 bg-blue-600 rounded-full text-white flex justify-center items-center text-[14px] active:bg-blue-700 cursor-pointer"
                    onClick={()=>quantityDecreament(product)}
                    >
                      <FaMinus />
                    </button>
                    <span>{product.quantity}</span>
                    <button className="w-7 h-7 bg-blue-600 rounded-full text-white flex justify-center items-center text-[14px] active:bg-blue-700 cursor-pointer"
                    onClick={()=> quantityIncreament(product)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )))
        }
      </div>

      {/* Cart Total  */}
      <div className="px-10 border-y border-zinc-300">
        <div className="flex justify-between pt-2">
          <span className="text-zinc-800 ">Subtotal</span>
          <span className="text-zinc-800 ">${subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-zinc-800 ">Shipping & Handlings</span>
          <span className="text-zinc-800 ">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2 border-t border-zinc-300">
          <span className="text-blue-600 font-bold text-lg">Order Totals</span>
          <span className="text-blue-600 font-bold text-lg">${orderTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Button  */}
      <div className="flex gap-x-2 px-10">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700"
          onClick={handleClose}
        >
          Close
        </button>
        <button className={` text-white flex-1 h-[7vh] 
        ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 
        'bg-blue-600 cursor-pointer active:bg-blue-700'}`}
        disabled={cart.length === 0}
        onClick={()=>setOrderSummary(true)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
