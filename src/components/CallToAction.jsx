const CallToAction = () => {
  return (
    <section className="bg-linear-45 from-primary to-primary-focus text-white py-16">
      <div className="container mx-auto sm:px-10 xl:px-0 px-5 py-16 text-center">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-white/80 sm:text-lg mb-8">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>
        <div>
          <button className="bg-white px-8 py-4 rounded-full text-lg font-semibold transition-colors group hover:bg-[#7a24db] mr-3">
            <span className="primary-gradient bg-clip-text text-transparent group-hover:text-white">
              Explore Products
            </span>
          </button>
          <button className="border border-gray-300 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors hover:bg-gray-100 hover:text-gray-800">
            View Pricing
          </button>
        </div>
        <p className="text-white/60 text-sm mt-4">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
