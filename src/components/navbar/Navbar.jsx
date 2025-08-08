import React from "react";
import Logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
// import Wishlist from "../Wishlist/Wishlist";
function Navbar({
  handleScroll,
  setSearchTerm,
  isScrolled,
  handlePanel,
  totalItems,
  wishlist,
}) {
  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-1 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="max-w-[1300px] px-12 mx-auto h-[14vh] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex w-15 h-15 bg-zinc-100 rounded-full p-2">
          <img src={Logo} className="w-full h-full object-contain" />
        </a>

        {/*Nav Action  */}
        <div className="flex items-center gap-x-5">
          {/* search bar */}
          <div className="flex p-1 rounded-full border-2 border-blue-600">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              autoComplete="off"
              className="h-[5vh] pl-4 flex-1 focus:outline-none"
              onFocus={handleScroll}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="flex justify-center items-center w-10 h-10 text-white text-xl rounded-full bg-blue-600 ">
              <FaSearch />
            </button>
          </div>
          {/* icons  */}
          <button
            className="text-[1.7rem] text-zinc-800 relative cursor-pointer"
            onClick={() => handlePanel("wishlist")}
          >
            <GoHeartFill />
            {wishlist.length > 0 && (
              <span className="flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-3 border-2 border-white">
                {wishlist.length}
              </span>
            )}
          </button>
          <button
            className="text-[1.7rem] text-zinc-800 relative cursor-pointer"
            onClick={() => handlePanel("cart")}
          >
            <HiShoppingBag />
            {totalItems > 0 && (
              <span className="flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-4 border-2 border-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
