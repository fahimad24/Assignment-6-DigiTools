import React from "react";

const ProductCart = () => {
  return (
    <div className="rounded-xl shadow p-10 space-y-4 mt-8">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <div className="flex bg-[#F9FAFC] gap-5 items-center p-5 rounded-2xl">
        <p className="w-20 h-20 flex items-center justify-center text-3xl rounded-full shadow">
          🤖
        </p>
        <div className="flex-1 space-y-2">
          <h2 className="text-xl font-extrabold">Product Name</h2>
          <p className="text-lg font-medium">$75.67</p>
        </div>
        <div>
          <button className="text-red-500  px-4 py-2 rounded-md hover:text-red-600">
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center text-xl font-bold px-5">
        <p>Total</p>
        <p>$75.67</p>
      </div>
      <button className="w-full rounded-full primary-gradient py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#7a24db]">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ProductCart;
