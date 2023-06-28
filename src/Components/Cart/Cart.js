import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const Cart = () => {
  let cartProcucts = useSelector((state) => state.cart);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const totalPrice = cart?.reduce((prev, current) => {
    return prev + current.count * current.price;
  }, 0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, [cartProcucts]);
  return (
    <>
      <div className="flex justify-center">
        <div className="relative ">
          <div
            onClick={() => setShowCart(!showCart)}
            className="flex flex-row cursor-pointer truncate p-2 px-4  rounded"
          >
            <div className="flex flex-row-reverse ml-2 w-full">
              <div slot="icon" className="relative">
                <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">
                  {cart?.length}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-shopping-cart w-6 h-6 mt-2"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
            </div>
          </div>
          {showCart && cart.length > 0 && (
            <div className="absolute w-full rounded-b border-t-0 z-10">
              <div className="shadow-sm shadow-black w-96">
                {cart.map((product) => (
                  <CartProduct key={product.id} {...product} />
                ))}

                <div className="p-4 justify-center bg-white flex">
                  <button
                    className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
                  >
                    Checkout: ${Math.round(totalPrice)}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
