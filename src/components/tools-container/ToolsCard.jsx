import React from "react";

const ToolsCard = ({ tool, handleAddToCart, isAdded }) => {
  return (
    <div className="relative w-full flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <div
        className={`absolute right-4 top-4 rounded-full
            ${tool.tagType === "best-seller" ? "bg-orange-100/80 text-amber-600" : tool.tagType === "new" ? "bg-green-100/80 text-green-600" : "bg-primary-focus/10 text-primary-focus"} px-3 py-1 text-xs font-medium `}
      >
        {tool.tagType}
      </div>

      <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full border border-gray-100 bg-gray-50/50">
        <span className="text-2xl text-gray-500">{tool.icon}</span>
      </div>

      <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
        {tool.description}
      </p>

      <div className="mt-5 flex items-end gap-1">
        <span className="text-3xl font-bold text-gray-900">${tool.price}</span>
        <span className="mb-1 text-sm font-medium text-gray-500">/Mo</span>
      </div>

      <ul className="my-6 flex flex-col space-y-3">
        {tool.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <svg
              className="h-5 w-5 shrink-0 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-[15px] text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto ">
        <button
          className={`w-full rounded-full ${isAdded === tool.id ? "bg-green-500 hover:bg-green-600" : "primary-gradient"} py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#7a24db]`}
          onClick={() => handleAddToCart(tool)}
        >
          {isAdded === tool.id ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ToolsCard;
