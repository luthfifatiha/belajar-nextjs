//next image
import Image from "next/image";

//next link
import Link from "next/link";

//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <eader className="absolute z-20 flex items-center pt-3 px-16 xl:px-0 xl:h-[90px] w-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-y-4 py-0 justify-between">
          <Link href={'/'} className="font-bold text-3xl text-white lg:text-5xl">
            Luthfi <span className="text-accent">Fatiha</span>
          </Link>
          {/* sosmed */}
          <Socials />
        </div>
      </div>
    </eader>
  );
};

export default Header;
