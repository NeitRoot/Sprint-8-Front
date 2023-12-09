import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Link from "next/link";
import { RiArrowDownSFill, RiArrowLeftSFill } from "react-icons/ri";

// Obtener los datos de la cuenta seleccionada segun el id
const fetchCuentaSeleccionada = (id) => {
  return fetch(`http://127.0.0.1:8000/cuenta/cuenta/${id}/`)
    .then((res) => res.json());
};


// Muetra la info detallada en la cuenta seleccionada
export default async function DetalleCuenta({ params }) {
  const { id } = params;
  const cuentas = await fetchCuentaSeleccionada(id);

  return (
    <>
      <Header />
      <SideBar />
      <section className="min-h-[calc(100vh-208px)] flex items-center">
        <div className="flex flex-col mx-auto w-3/4 bg-slate-50 p-4 rounded-md border-l-4 border-orange-400 shadow-lg cursor-default sm:mt-3 sm:mb-3">
          <div className="flex justify-between">
            <Link
              href="/cuentas"
              className="flex items-center gap-1 hover:text-orange-400 transition-colors"
            >
              <RiArrowLeftSFill />
              Volver atrás
            </Link>
            <p className="flex items-center gap-1 hover:text-orange-400 transition-colors cursor-pointer">
              Más opciones <RiArrowDownSFill />
            </p>
          </div>
          <div className="text-center">
            <p className="uppercase text-4xl font-semibold border-b-2 border-orange-400 w-1/2 mx-auto">
              {cuentas.account_type}
            </p>
            <p className="text-3xl py-3">$ {cuentas.balance}</p>
            <p className="text-base">N° de cuenta: {cuentas.account_id}</p>
          </div>
         
        </div>
      </section>
      <Footer />
    </>
  );
}
