import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Image from "next/image";
import Celular from "@/app/assets/images/celular.png";

export const metadata = {
  title: "ITBANK - Contacto",
  description: "Seccion Contacto del sitio ITBANK",
};

// Seccion de contacto
const Contacto = () => {
  return (
    <>
      <Header />
      <SideBar />
      <section className="flex h-screen">
        <div className="w-full flex flex-col items-center justify-center ">
          <div className=" flex flex-col items-center">
            <h2 className="text-2xl font-inter font-bold  mb-1">CONTACTO</h2>
            <Image
              src={Celular}
              alt="Logo del celular"
              className="h-[3rem]] w-[3.5rem] mb-3"
            />
          </div>
          <div className="w-[80%] flex border-2 border-black rounded">
            <div className="flex p-8 sm:flex-col">
              <div className="flex flex-col p-2">
                <h3 className="font-bold">
                  CENTRO DE ATENCIÓN Y SERVICIOS DEL BANCO ITBANK 0810-2222-2222
                </h3>
                <p className="m-2">De lunes a viernes de 8:00 a 22:00.</p>
                <p className="m-2">
                  Desde el exterior:(11-11) 2222-2222 o 3333-3333
                </p>
                <p className="m-2">De lunes a viernes de 8:00 a 20:00</p>
              </div>
              <div className="flex flex-col p-2">
                <h3 className="font-bold">
                  MESA DE AYUDA DE BANCA ITBANK INTERNET 0810-111-0111
                </h3>
                <p className="mt-2 mr-2 ml-2">Individuos: opción 1</p>
                <p className="mb-2 mr-2 ml-2">Empresas: opción 2</p>
                <p className="m-2">De lunes a viernes de 8:00 a 22:00. </p>
                <p className="m-2">
                  Sábados, domingos y feriados de 08:00 a 20:00
                </p>
              </div>
              <div className="flex flex-col p-2">
                <h3 className="font-bold">
                  CUENTA ITBANK INDIVIDUOS 0810-444-4444
                </h3>
                <p className="m-2">De lunes a domingo de 8:00 a 22:00</p>
                <p className="m-2">
                  Desde el exterior:(54-11) 5555-5555 o 6666-6666
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contacto;
