import React from "react";
import { toast } from "react-toastify";

const ProductCart = ({ addtoCart, setAddToCart, setIsAdded }) => {
  const handleRemoveFromCart = (id) => {
    const updatedCart = addtoCart.filter((item) => item.id !== id);
    setAddToCart(updatedCart);
    addtoCart.length === 1 && setIsAdded(null);
    toast.info(`Item removed from cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="rounded-xl shadow p-10 space-y-4 mt-8">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      {addtoCart.length > 0 ? (
        addtoCart.map((item) => (
          <div className="flex bg-[#F9FAFC] gap-5 items-center p-2 sm:p-5 rounded-2xl">
            <p className="sm:w-20 sm:h-20 w-15 h-15 flex items-center justify-center sm:text-3xl text-xl rounded-full shadow">
              {item.icon}
            </p>
            <div className="flex-1 space-y-2">
              <h2 className="sm:text-xl  sm:font-extrabold">{item.name}</h2>
              <p className="text-lg font-medium">${item.price}</p>
            </div>
            <div>
              <button
                className="text-red-500   rounded-md hover:text-red-600"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 text-2xl py-10">
          Your cart is empty.
        </p>
      )}

      <div className="flex justify-between items-center text-xl font-bold px-5">
        <p>Total</p>
        <p>
          ${addtoCart.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => {
          setAddToCart([]);
          setIsAdded(null);
          toast.info(`Cart cleared!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }}
        className="w-full rounded-full primary-gradient py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#7a24db]"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ProductCart;
