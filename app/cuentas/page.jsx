import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Cuentas from "./Cuentas";
import Tarjetas from "./Tarjetas";

export const metadata = {
  title: "ITBANK - Cuentas",
  description: "Seccion cuentas del sitio ITBANK",
};

// Seccion de cuentas y tarjetas
export default async function Cuenta() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="min-h-[calc(100vh-208px)] flex flex-col items-center gap-10 mx-auto w-full">
        <h1 className="flex justify-center mt-6 text-4xl">Tus cuentas</h1>
        <Cuentas />
        <h2 className="flex justify-center mt-6 text-4xl">Tus tarjetas</h2>
        <Tarjetas />
      </div>
      <Footer />
    </>
  );
}
