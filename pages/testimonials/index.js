import TestimonialSlider from "../../components/TestimonialSlider";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <h2 className="h2 mb-5 mt-5 xl:mb-0">
          What clients <span className="text-accent">say.</span>
        </h2>
        {/* slider */}
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
