import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center mt-7">
      <Circles />
      <div className="z-0">
        <Bulb />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left xl:mb-0 xl:mt-24">
            <h2 className="h2 xl:mt-8">My Work</h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              iure! Nemo fugit suscipit voluptatem debitis!
            </p>
          </div>
          {/* slider */}
          <div className="w-full xl:max-w-[65%] z-10">
            <WorkSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
