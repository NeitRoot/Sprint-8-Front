import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import FormConversor from "./FormConversor";

export const metadata = {
  title: "ITBANK - Conversor",
  description: "Seccion Conversor de monedas del sitio ITBANK",
};

// Seccion conversor de monedas
const Conversor = () => {
  return (
    <>
      <Header />
      <SideBar />
      <section className="min-h-[calc(100vh-208px)] flex flex-col items-center">
        <div>
          <h1 className="flex justify-center my-6 text-4xl text-center">
            Conversor de moneda
          </h1>
          <h2 className="flex justify-center my-6 text-2xl text-center">
            Elegí la moneda e ingresá la cantidad a convertir
          </h2>
        </div>
        <FormConversor />
      </section>
      <Footer />
    </>
  );
};

export default Conversor;
