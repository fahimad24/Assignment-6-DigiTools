import React from "react";

const PricingCard = ({ tool }) => {
  return (
    <div
      className={`relative w-full flex flex-col rounded-3xl border border-gray-100 ${tool.tagType === "Most Popular" ? "primary-gradient pt-0 text-white sm:scale-110" : "bg-[#F9FAFC]"} p-6  shadow-sm`}
    >
      {tool?.tagType && (
        <div className=" text-center">
          <p
            className="relative inline -top-3 rounded-full
                bg-orange-100 px-2 text-amber-600"
          >
            {tool?.tagType}
          </p>
        </div>
      )}

      <h3 className="text-3xl font-extrabold ">{tool.name}</h3>
      <p
        className={`mt-2 text-[15px] leading-relaxed ${tool.tagType ? "text-white" : "text-gray-500"}`}
      >
        {tool.description}
      </p>

      <div className="mt-5 flex items-end gap-1">
        <span className="text-4xl font-bold ">${tool.price}</span>
        <span
          className={`mb-1 text-sm font-medium ${tool.tagType ? "text-white" : "text-gray-500"}`}
        >
          /{tool.period}
        </span>
      </div>

      <ul className="my-6 flex flex-col space-y-2">
        {tool.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
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
            <span
              className={`${tool.tagType ? "text-white/80" : "text-gray-600/80"}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-auto ">
        <button
          className={`${tool.tagType === "Most Popular" ? "bg-white text-gray-800" : "text-white transition-colors primary-gradient hover:bg-[#7a24db]"} w-full rounded-full  py-3.5 text-sm font-bold cursor-pointer hover:opacity-90 transition duration-300`}
        >
          <span
            className={`${tool.tagType && "primary-gradient bg-clip-text text-transparent"}`}
          >
            Buy Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
