import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderPlace from "../OrderPlace/OrderPlace";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const shipping = totalItems * 2;
  const orderTotal = subTotal + shipping;

  useEffect(() => {
    const changeNavbar = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", changeNavbar);
  }, []);

  //handle Scroll
  const handleScroll = () => {
    const section = document.getElementById("product-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Cart and Wishlist Tab Function
  const handlePanel = (tabName) => {
    setActivePanel((prev) => (prev === "tabName" ? null : tabName));
  };

  // Cart and Wishlist Close Function
  const handleClose = () => setActivePanel(null);

  // Add To Cart Function
  const addToCart = (product) => {
    const alreadyAdded = cart.find((item) => item.id === product.id);
    if (alreadyAdded) {
      alert("Item Already Added");
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  // Remove From Cart Function
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Quantity Increament
  const quantityIncreament = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Quantity Decreament
  const quantityDecreament = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  //WishList funtion
  const addToWishlist= (product)=>{
    const isInWishlist = wishlist.some(item => item.id === product.id);
    if(isInWishlist){
      setWishlist(wishlist.filter(item=> item.id !== product.id));
    }
    else{
      const addDate = new Date().toLocaleDateString('en-GB')
      setWishlist([...wishlist, {...product,addDate}])
    }
  }

  return (
    <div>
      <Navbar
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        isScrolled={isScrolled}
        handlePanel={handlePanel}
        totalItems={totalItems}
        wishlist={wishlist}
      />

      <Banner />

      <Product 
      searchTerm={searchTerm} 
      addToCart={addToCart} 
      addToWishlist={addToWishlist}
      />

      <Cart
        activePanel={activePanel}
        handleClose={handleClose}
        cart={cart}
        removeFromCart={removeFromCart}
        quantityIncreament={quantityIncreament}
        quantityDecreament={quantityDecreament}
        subTotal={subTotal}
        shipping={shipping}
        orderTotal={orderTotal}
        setOrderSummary={setOrderSummary}
      />

      {/* Wishlist */}
      <Wishlist 
      activePanel={activePanel} 
      handleClose={handleClose} 
      wishlist={wishlist}
      />

      {/* OrderSummary */}
      {orderSummary && (
        <OrderSummary
          cart={cart}
          subTotal={subTotal}
          shipping={shipping}
          orderTotal={orderTotal}
          setOrderSummary={setOrderSummary}
          setOrderPlaced={setOrderPlaced}
          setCart={setCart}
        />
      )}

      {/* Place Order  */}
      {
      orderPlaced && 
        <OrderPlace 
        setOrderPlaced={setOrderPlaced}
        />
      }
    </div>
  );
}

export default Home;
