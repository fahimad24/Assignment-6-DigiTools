const StatsSection = () => {
  return (
    <section className="py-16 primary-gradient text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="text-center flex-1 space-y-3.5">
            <h3 className="text-6xl font-extrabold">50K+</h3>
            <p className="text-2xl text-white/70">Happy Customers</p>
          </div>
          <div className="text-center flex-1 space-y-3.5">
            <h3 className="text-6xl font-extrabold">200+</h3>
            <p className="text-2xl text-white/70">Premium Tools</p>
          </div>
          <div className="text-center flex-1 space-y-3.5">
            <h3 className="text-6xl font-extrabold">4.9</h3>
            <p className="text-2xl text-white/70">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
