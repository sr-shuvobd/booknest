import "animate.css";

const MemberShip = () => {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      color: "from-emerald-500 to-teal-600",
      features: ["Borrow 3 books", "7 days access", "Basic support"],
    },
    {
      name: "Standard",
      price: "$49",
      color: "from-yellow-400 to-orange-500",
      features: ["Borrow 7 books", "15 days access", "Priority support"],
    },
    {
      name: "Premium",
      price: "$79",
      color: "from-red-400 to-red-600",
      features: ["Unlimited books", "30 days access", "Premium support"],
    },
  ];

  return (
    <section className="py-16 bg-slate-50 mt-5 rounded-xl">
      <div className="container mx-auto px-4">


        <div className="text-center mb-12 animate__animated animate__bounceIn">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F5848]">
            Membership Plans
          </h2>
          <p className="text-gray-600 mt-3">
            Choose a plan and enjoy more books with BookNest.
          </p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden 
              animate__animated animate__zoomIn animate__slow animate__delay-${index + 1}s
              hover:-translate-y-3 hover:shadow-2xl transition-all duration-300`}
            >

              
              <div className={`h-40 bg-gradient-to-r ${plan.color} p-8 text-white`}>
                <h3 className="text-3xl font-bold uppercase">{plan.name}</h3>
                <p className="text-sm mt-2">Perfect for book lovers</p>
              </div>

             
              <div className="absolute top-8 right-8 w-28 h-28 rounded-full bg-white shadow-lg flex flex-col items-center justify-center">
                <h4 className="text-4xl font-bold text-[#A77E55]">
                  {plan.price}
                </h4>
                <span className="text-xs text-gray-400">Per Month</span>
              </div>

              
              <div className="p-8 pt-14 text-center">
                <p className="font-semibold text-gray-600 mb-8">
                  Get access to digital books and exclusive reading benefits.
                </p>

                <ul className="space-y-4 text-left mb-10">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <span className="w-3 h-3 rounded-full bg-[#A77E55]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`btn border-0 text-white w-full rounded-full bg-gradient-to-r ${plan.color}`}
                >
                  Choose Plan
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MemberShip;