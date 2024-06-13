import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 pt-5">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <h2 className="h2">
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </h2>
          {/* subtitle */}
          <p className="max-w-sm xl:max-w-xl text-base mx-auto xl:mx-0 mb-10 xl:mb-10">
            Exercitation sit commodo reprehenderit in laborum laborum officia
            velit velit excepteur quis exercitation incididunt.
          </p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative z-10">
            <ProjectsBtn />
          </div>
          <div className="hidden xl:flex">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 bottom-8"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <div className="w-full h-full max-w-[650px] max-h-[550px] absolute -bottom-32 lg:bottom-0 lg:right-[6%]">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Home;
