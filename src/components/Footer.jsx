import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727]">
      <div className="container mx-auto pt-20 sm:px-10 xl:px-0 px-5 text-gray-400">
        <div className="grid xl:grid-cols-6 justify-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 border-b border-gray-700 py-10 lg">
          <div className="space-y-8 xl:col-span-2">
            <h1 className="text-5xl font-extrabold text-white">Digitools</h1>
            <p className="text-gray-400 max-w-70">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-white text-xl font-medium">product</h2>
            <ul className="space-y-4">
              <li>Features</li>
              <li>pricing</li>
              <li>template</li>
              <li>integration</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-white text-xl font-medium">company</h2>
            <ul className="space-y-4">
              <li>About</li>
              <li>Blog</li>
              <li>careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-white text-xl font-medium">Resources</h2>
            <ul className="space-y-4">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-4 ">
            <h2 className="text-white text-xl font-medium">Social Link </h2>
            <ul className="flex gap-3  text-black">
              <li className="p-3 rounded-full bg-white">
                <SlSocialInstagram />
              </li>
              <li className="p-3 rounded-full bg-white">
                <TiSocialFacebook />
              </li>
              <li className="p-3 rounded-full bg-white">
                <FaXTwitter />
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-3 pb-5 text-center text-gray-500 flex flex-col md:flex-row md:justify-between items-center gap-4">
          <p>&copy; 2026 Digitools. All rights reserved.</p>
          <ul className="flex justify-between gap-10 mt-4">
            <li>privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
