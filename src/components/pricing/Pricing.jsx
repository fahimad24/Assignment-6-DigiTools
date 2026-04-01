import PricingCard from "./PricingCard";

const Pricing = () => {
  const pricingPlans = {
    pricing: [
      {
        name: "Starter",
        description: "Perfect for beginners getting started",
        price: 0,
        period: "month",
        features: [
          "Access to 10 free tools",
          "1 User",
          "Basic Support",
          "Limited Features",
        ],
      },
      {
        name: "Pro",
        description: "Best for growing users",
        price: 25,
        period: "month",
        tagType: "Most Popular",
        features: [
          "Access to all premium tools",
          "5 Users",
          "Priority Support",
          "Unlimited projects",
          "All Basic Features",
          "Advanced Tools",
        ],
      },
      {
        name: "Enterprise",
        description: "For professionals and teams",
        price: 50,
        period: "month",
        features: [
          "Everything in Pro",
          "Unlimited Users",
          "24/7 Support",
          "All Features Included",
          "Custom Integrations",
          "Custom branding",
        ],
      },
    ],
  };
  return (
    <section>
      <div className="container mx-auto py-16 sm:px-10 xl:px-0 px-5">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-center mb-6">
          Simple,{" "}
          <span className="bg-linear-0 from-primary to-primary-focus bg-clip-text text-transparent">
            Transparent
          </span>{" "}
          Pricing
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Choose the plan that fits your needs. No hidden fees, cancel anytime.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-22">
          {pricingPlans.pricing.map((plan, index) => (
            <PricingCard key={index} tool={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
