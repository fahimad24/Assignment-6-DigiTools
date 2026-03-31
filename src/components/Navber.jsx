import { ShoppingCart } from "lucide-react";
import { useAuth } from "../Providers/auth-context";

const Navber = () => {
  const { addtoCart } = useAuth();
  return (
    <nav className="shadow fixed w-full z-10 bg-white">
      <div className=" container mx-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5"
            >
              <li>Products</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <a className=" text-4xl font-bold primary-gradient bg-clip-text text-transparent p-2">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <button className="relative">
            <span
              className={`${addtoCart.length > 0 ? "block" : "hidden"} absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`}
            >
              {addtoCart.length}
            </span>
            <ShoppingCart></ShoppingCart>
          </button>
          <button>Login</button>
          <button className="py-2 px-5 rounded-full primary-gradient text-white font-semibold">
            Get Start
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
