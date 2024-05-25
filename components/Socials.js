//links
import Link from "next/link";

//icons
import {
  RiInstagramLine,
  RiGithubLine,
  RiFacebookLine,
  RiTiktokLine,
  RiTwitterLine,
  RiThreadsLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-4 lg:gap-5 text-xl lg:text-2xl">
      {/* Instagram */}
      <Link href={'https://www.instagram.com/luthfi.fth/'} target="_blank" className="hover:text-accent transition-all duration-200">
        <RiInstagramLine />
      </Link>
      {/* GitHub */}
      <Link href={'https://github.com/luthfifatiha'} target="_blank" className="hover:text-accent transition-all duration-200">
        <RiGithubLine />
      </Link>
      {/* Facebook */}
      <Link href={'https://www.facebook.com/luthfi.fatiha?mibextid=ZbWKwL'} target="_blank" className="hover:text-accent transition-all duration-200">
        <RiFacebookLine />
      </Link>
      {/* TikTok */}
      <Link href={'https://www.tiktok.com/@wanzayyyy?_t=8dxLfwYfnST&_r=1'} target="_blank" className="hover:text-accent transition-all duration-200">
        <RiTiktokLine />
      </Link>
      {/* Twitter */}
      <Link href={'https://twitter.com/bujetibro?t=rN-Kil3Lu6YQp6ag45wcRg&s=08'} target="_blank" className="hover:text-accent transition-all duration-200">
        <RiTwitterLine />
      </Link>
      {/* Threads */}
      <Link href={'https://www.threads.net/@luthfi.fth'} target="_blank" className="hover:text-accent transition-all duration-200">
        <RiThreadsLine />
      </Link>
    </div>
  );
};

export default Socials;
