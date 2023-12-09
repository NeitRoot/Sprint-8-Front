import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaGripLinesVertical } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="h-32 bg-primary-blue">
        <div className="flex justify-around items-center pt-5 sm:flex-col">
          <div className="text-white text-xl uppercase sm:text-sm">
            <Link
              href={"/terminos"}
              className="flex gap-2 items-center transition-colors hover:text-orange-400 font-semibold"
            >
              <FaGripLinesVertical /> Términos y condiciones
            </Link>

            <Link
              href={"/privacidad"}
              className="flex gap-2 items-center transition-colors hover:text-orange-400 font-semibold"
            >
              <FaGripLinesVertical /> Políticas de privacidad
            </Link>

            <Link
              href={"/contacto"}
              className="flex gap-2 items-center transition-colors hover:text-orange-400 font-semibold"
            >
              <FaGripLinesVertical /> Contacto
            </Link>
          </div>
          <div className="text-white flex gap-4 text-4xl sm:text-lg sm:mt-2">
            <Link
              href={"https://www.facebook.com"}
              target="blank"
              name="Facebook"
              className="hover:text-orange-400 transition-colors"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href={"https://www.instagram.com"}
              target="blank"
              name="Instagram"
              className="hover:text-orange-400 transition-colors"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"https://www.whatsapp.com"}
              target="blank"
              name="Whatsapp"
              className="hover:text-orange-400 transition-colors"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
