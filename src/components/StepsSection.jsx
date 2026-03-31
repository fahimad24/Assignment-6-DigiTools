import user from "../assets/user.png";
import packages from "../assets/package.png";
import rocket from "../assets/rocket.png";

const StepsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-6 ">
          Get Started in 3 Steps
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-center items-center bg-white px-10 py-24 rounded-lg shadow relative space-y-5">
            <div className="absolute top-8 right-8 w-8 h-8 rounded-full primary-gradient text-white flex items-center justify-center">
              01
            </div>
            <div className="w-20 h-20 bg-linear-0 from-primary/20 to-primary-focus/20 rounded-full flex items-center justify-center p-4">
              <img src={user} alt="User" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Create Account
              </h3>
              <p className="text-gray-600 text-center">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white px-10 py-24 rounded-lg shadow relative space-y-5">
            <div className="absolute top-8 right-8 w-8 h-8 rounded-full primary-gradient text-white flex items-center justify-center">
              02
            </div>
            <div className="w-20 h-20 bg-linear-0 from-primary/20 to-primary-focus/20 rounded-full flex items-center justify-center p-4">
              <img src={packages} alt="Package" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Choose Products
            </h3>
            <p className="text-gray-600 text-center">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white px-10 py-24 rounded-lg shadow relative space-y-5">
            <div className="absolute top-8 right-8 w-8 h-8 rounded-full primary-gradient text-white flex items-center justify-center">
              03
            </div>
            <div className="w-20 h-20 bg-linear-0 from-primary/20 to-primary-focus/20 rounded-full flex items-center justify-center p-4">
              <img src={rocket} alt="Rocket" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Start Creating
            </h3>
            <p className="text-gray-600 text-center">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
