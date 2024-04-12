import React from "react";

const HeroImage = () => {
  return (
    <div className="heroAnimationSection px-8 py-6 lg:-translate-y-20 text-white text-center lg:text-left">
      <p className="overflow-hidden text-xl md:text-2xl leading-10 px-5 py-2 relative after:contenr-[''] after:absolute after:rounded-full after:-left-2 after:top-4 after:w-4 after:h-4 after:bg-white max-lg:after:hidden ">
        Transportation simplified
      </p>
      <div className=" text-3xl md:text-6xl font-bold  text-white w-full md:space-y-4 space-y-2 pb-4">
        <h1>All India logistics </h1>
        <h1>& goods transportation </h1>
        <h1>services</h1>
      </div>

      <p className=" max-lg:mx-auto text-xl md:text-2xl leading-10 lg:w-1/2  lg:mt-8 lg:basis-1/2 max-sm:hidden">Hire trucks from our network of verified truck owners with 100% delivery guaranteed.</p>
    </div>
  );
};

export default HeroImage;
