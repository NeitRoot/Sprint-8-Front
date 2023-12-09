import Image from "next/image";
import Logo from "@/app/assets/images/logo-removebg.png";

const Header = () => {
  return (
    <>
      <nav className="bg-primary-blue shadow-sm shadow-slate-700 z-10 ">
        <div className="w-24 h-20 ml-24">
          <Image src={Logo} alt="LOGO ITBANK" priority={true} />
        </div>
      </nav>
    </>
  );
};

export default Header;
