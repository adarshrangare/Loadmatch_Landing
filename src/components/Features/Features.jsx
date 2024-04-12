import React from "react";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { RiVerifiedBadgeLine, RiCustomerService2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
const Features = () => {
  const features = [
    {
      title: "Best Pricing",
      description: "Transparent and best truck prices across India",
      icon: <HiOutlineCurrencyRupee className="w-8 h-8 stroke-white text-white"/>,
      background : "bg-violet-500"
    },
    {
      title: "Verified Vehicles",
      description: "Verified vehicles from 6,000+ owners across India",
      icon: <RiVerifiedBadgeLine className="w-8 h-8 stroke-white text-white"/>,
      background : "bg-green-500"     
    },
    {
      title: "Fastest Delivery",
      description: "Real time vehicle tracking to deliver your loads on time",
      icon: <HiOutlineCurrencyRupee className="w-8 h-8 stroke-white text-white"/>,
      background : "bg-red-500"       
    },
    {
      title: "Customer Support",
      description: "We provide 24/7 support on Calls, WhatsApp and Email",
      icon: <HiOutlineCurrencyRupee className="w-8 h-8 stroke-white text-white"/>,
      background : "bg-blue-500"
    },
  ];

  return (
    <section className="container mx-auto text-center max-lg:mt-72 p-4 mb-4">
      <h2 className="lg:text-4xl font-bold md:text-3xl sm:text-2xl text-xl lg:mt-4 lg:pt-6 text-slate-800">
        1,000+ customers trust Loadmatch transportation service, find out why?
      </h2>
      <p className="lg:text-xl md:text-lg sm:text-base text-sm lg:my-4 text-slate-800 py-4">
        We're the leader in online truck booking with a 100% delivery guarantee
        for all trucks booked with us.
      </p>
      <div className="featuresContainer flex flex-wrap text-center items-stretch">
        {features.map((item, index) => (
          <div key={index} className="p-2 md:p-4 md:w-1/4 sm:w-1/2 w-full ">
            <div class="border-2 bg-white border-slate-100 px-4 py-6 rounded-lg h-full">
              <div class={`w-12 h-12 inline-flex items-center justify-center rounded-full mb-4 ${item.background}`}>
                {item.icon}
              </div>
              <h5 class="text-slate-900 text-xl font-bold ">{item.title}</h5>
              <p class="leading-relaxed text-base   text-slate-600 mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
