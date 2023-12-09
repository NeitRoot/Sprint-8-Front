import Link from "next/link";
import dynamic from "next/dynamic";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Cuenta from "./Cuenta";
import Tarjeta from "./Tarjeta";
import { BiTransferAlt } from "react-icons/bi";
import { BsCalculator, BsCurrencyExchange } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";

export const metadata = {
  title: "ITBANK - Inicio",
  description: "Seccion inicio del sitio ITBANK",
};

// Obtiene los datos de la cuenta n°1
const fetchCuentas = () => {
  return fetch(`http://127.0.0.1:8000/cliente/cliente/1/`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

// Carga dinamica del componente con los banners del inicio
const Banners = dynamic(() => import("@/app/inicio/Banners"));

// Seccion del inicio
export default async function Inicio() {
  const cuenta = await fetchCuentas();

  return (
    <>
      <Header />
      <SideBar />
      <section className="min-h-[calc(100vh-232px)]">
        <h1 className="flex justify-center font-semibold text-4xl text-primary-blue sm:text-2xl mt-6">
          Hola, {cuenta.customer_name}!
        </h1>
        <div className="flex justify-center sm:flex-col items-center gap-12 sm:gap-1">
          <Cuenta />
          <Tarjeta />
        </div>
        <div className="flex justify-center gap-6 my-4 sm:flex-wrap">
          <Link
            href="/pago"
            className="flex items-center gap-2 bg-slate-100 px-2 py-3 rounded-md shadow-md shadow-slate-700 transition-colors hover:text-white hover:bg-primary-blue"
          >
            <GiPayMoney /> Pagos
          </Link>
          <Link
            href="/transferencia"
            className="flex items-center gap-2 bg-slate-100 px-2 py-3 rounded-md shadow-md shadow-slate-700 transition-colors hover:text-white hover:bg-primary-blue"
          >
            <BiTransferAlt /> Tranferencias
          </Link>
          <Link
            href="/prestamos"
            className="flex items-center gap-2 bg-slate-100 px-2 py-3 rounded-md shadow-md shadow-slate-700 transition-colors hover:text-white hover:bg-primary-blue"
          >
            <BsCalculator /> Préstamos
          </Link>
          <Link
            href="/conversor"
            className="flex items-center gap-2 bg-slate-100 px-4 py-3 rounded-md shadow-md shadow-slate-700 transition-colors hover:text-white hover:bg-primary-blue"
          >
            <BsCurrencyExchange /> Conversor
          </Link>
        </div>
        <Banners />
      </section>
      <Footer />
    </>
  );
}
