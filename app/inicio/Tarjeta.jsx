import InfoTarjeta from "./InfoTarjeta";
import Link from "next/link";

// Componente de la tarjeta en el inicio
const Tarjeta = () => {
  return (
    <div className="bg-slate-50 w-80 rounded-md my-4 min-h-[10rem] border-l-4 border-slate-700 shadow-md shadow-slate-700">
      <h2 className="text-black font-bold text-center text-lg uppercase pt-2">
        Tarjetas
      </h2>
      <InfoTarjeta />
      <div className="text-center">
        <Link href={"/cuentas"}>
          <button className="hover:text-orange-400 transition-colors bg-slate-50 text-black py-1 px-2 rounded my-1 text-lg font-semibold">
            Ver más tarjetas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tarjeta;
