import Image from "next/image";
import Banner from "@/app/assets/images/banner.png";
import BannerLg from "@/app/assets/images/bannerUnificado.jpg";

// Componente con los banners del inicio
const Banners = () => {
  return (
    <div className="flex justify-center py-5">
      <div className="w-80 items-center sm:w-[65%] md:hidden lg:hidden">
        <Image src={Banner} alt="Banner" priority />
      </div>
      <div className="w-4/5 mx-auto items-center sm:hidden">
        <Image src={BannerLg} alt="Banner" priority />
      </div>
    </div>
  );
};

export default Banners;
