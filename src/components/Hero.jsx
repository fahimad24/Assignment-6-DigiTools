import { Play } from "lucide-react";
import banner from "../assets/banner.png";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto py-10 pt-28 px-5 sm:px-10 xl:px-0 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="flex-1">
          <div className="flex gap-2 py-2 px-5 bg-[#E1E7FF] rounded-full items-center w-max mb-4">
            <div className="w-5 h-5 bg-linear-0 from-primary/20 to-primary-focus/20 rounded-full flex items-center justify-center doted-animation">
              <div className="w-3 h-3 bg-linear-0 from-primary/40 to-primary-focus/40 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-linear-0 from-primary to-primary-focus relative rounded-full"></div>
              </div>
            </div>
            <h2 className="font-medium bg-linear-0 from-primary to-primary-focus bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </h2>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold lg:font-extrabold mb-6">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore our collection of AI-powered tools designed to enhance your
            productivity and creativity. From content generation to data
            analysis, we have everything you need to leverage the power of AI.
          </p>
          <div className="flex gap-2">
            <button className="px-6 mr-3 py-3 primary-gradient text-white rounded-full hover:opacity-90 font-medium transition duration-300">
              Explore Products
            </button>
            <button
              className="flex gap-2 px-6 py-2.5 border-2 
             border-primary-focus rounded-full hover:bg-primary-focus/10 transition duration-300 items-center font-medium text-primary"
            >
              <Play></Play> Watch Demo
            </button>
          </div>
        </div>
        <div>
          <img src={banner} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
