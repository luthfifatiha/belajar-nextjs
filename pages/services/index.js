import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center mt-7">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">My Service</h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              iure! Nemo fugit suscipit voluptatem debitis!
            </p>
          </div>
          {/* slider */}
          <div className="w-full xl:max-w-[65%]">
            <ServiceSlider />
          </div>
        </div>
      </div>
      <div className="z-0">
        <Bulb />
      </div>
    </div>
  );
};

export default Services;
