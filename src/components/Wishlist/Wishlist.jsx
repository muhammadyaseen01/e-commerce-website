function Wishlist({ activePanel, handleClose, wishlist }) {
  return (
    <div
      className={`flex flex-col justify-between gap-5 z-2 fixed top-0 bottom-0 right-0 bg-zinc-100 w-[400px] left-auto border-l border-zinc-300 py-7 transform
    ${activePanel === "wishlist" ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Heading  */}
      <div className="px-10">
        <h3 className="text-zinc-800 font-bold text-3xl text-center">
          Your Wishlist
        </h3>
      </div>

      {/* Cart Items */}
      <div className="flex-1 flex flex-col gap-2">
        {wishlist.length === 0 ? (
          <p className="text-zinc-800 text-center">Your Wishlist is empty</p>
        ) : (
          wishlist.map((product, index) => {
            return (
              <div
                className={`flex items-center gap-3 px-5 py-1 border-y-1 border-zinc-300
            ${(index + 1) % 2 === 0 ? "bg-blue-100" : "bg-white"}`}
              >
                {/* Image  */}
                <div className=" h-20 w-20">
                  <img
                    src={product.image}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                {/* Product Details  */}
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="text-zinc-800 font-semibold text-lg">
                      {product.name}
                    </h4>
                    <p className="text-sm text-zinc-500">Added: {product.addDate}</p>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      {product.onSale && (
                        <span className="text-zinc-600 font-semibold text-lg line-through mr-4">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                      <span className="text-red-600 font-semibold text-lg">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <button className="bg-blue-600 text-white text-sm px-5 py-[5px] rounded-full active:bg-blue-700 cursor-pointer">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Button  */}
      <div className="flex gap-x-2 px-10">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700"
          onClick={handleClose}
        >
          Close
        </button>
        <button className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700">
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Wishlist;
