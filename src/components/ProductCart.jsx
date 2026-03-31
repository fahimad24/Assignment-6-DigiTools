import React from "react";

const ProductCart = ({ addtoCart, setAddToCart, setIsAdded }) => {
  const handleRemoveFromCart = (id) => {
    const updatedCart = addtoCart.filter((item) => item.id !== id);
    setAddToCart(updatedCart);
    addtoCart.length === 1 && setIsAdded(null);
  };
  return (
    <div className="rounded-xl shadow p-10 space-y-4 mt-8">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      {addtoCart.length > 0 ? (
        addtoCart.map((item) => (
          <div className="flex bg-[#F9FAFC] gap-5 items-center p-5 rounded-2xl">
            <p className="w-20 h-20 flex items-center justify-center text-3xl rounded-full shadow">
              {item.icon}
            </p>
            <div className="flex-1 space-y-2">
              <h2 className="text-xl font-extrabold">{item.name}</h2>
              <p className="text-lg font-medium">${item.price}</p>
            </div>
            <div>
              <button
                className="text-red-500  px-4 py-2 rounded-md hover:text-red-600"
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
        }}
        className="w-full rounded-full primary-gradient py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#7a24db]"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ProductCart;
