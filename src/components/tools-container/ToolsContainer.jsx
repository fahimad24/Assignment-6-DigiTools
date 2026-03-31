import ProductCart from "../ProductCart";
import ToolsCard from "./ToolsCard";
import React, { use } from "react";

const ToolsContainer = ({ data }) => {
  const toolsData = use(data);
  const [activeTab, setActiveTab] = React.useState("products");
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div>
          <h2 className="text-5xl font-extrabold text-center mb-6">
            Premium Digital Tools
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium digital tools designed to elevate
            your creative process and boost your productivity.
          </p>

          {/* tabs section */}
          <div className="flex justify-center items-center mt-10 gap-4 ">
            <div className="relative flex gap-4 border-gray-200 w-60 rounded-full border-2 p-2">
              <button
                className={`px-4 py-2  ${
                  activeTab === "products" ? "text-white font-medium" : ""
                }`}
                onClick={() => setActiveTab("products")}
              >
                Products
              </button>
              <button
                className={`px-4 py-2  ${
                  activeTab === "cart" ? "text-white font-medium" : ""
                }`}
                onClick={() => setActiveTab("cart")}
              >
                Cart (0)
              </button>
              <div
                className={`absolute left-0 top-0 h-full w-1/2 rounded-full primary-gradient -z-10 transform transition-transform duration-300 ease-in-out ${
                  activeTab === "products"
                    ? "translate-x-0"
                    : "translate-x-full"
                }`}
              ></div>
            </div>
          </div>
        </div>

        {activeTab === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {/* Tool cards will be rendered here */}
            {toolsData.map((tool) => (
              <ToolsCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <ProductCart></ProductCart>
        )}
      </div>
    </section>
  );
};

export default ToolsContainer;
