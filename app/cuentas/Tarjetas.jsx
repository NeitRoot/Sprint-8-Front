import Image from "next/image";
import { RiVisaFill, RiMastercardFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";
import Logo from "@/app/assets/images/logo-removebg.png";

// Obtener los datos de las tarjetas disponibles
const fetchTarjetas = () => {
  return fetch(`https://651449b58e505cebc2eb14a2.mockapi.io/tarjetas`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

// Componente con las tarjetas disponibles
export default async function Tarjetas() {
  const tarjetas = await fetchTarjetas();

  return (
    <div className="flex gap-8 my-4 md:flex-wrap md:justify-center sm:flex-wrap sm:justify-center">
      {tarjetas.map((tarjeta) => (
        <div
          key={tarjeta.id}
          className={
            tarjeta.id == 1
              ? "bg-orange-500 rounded-lg text-white w-96 h-48 hover:scale-105 transition-all shadow-md shadow-slate-500 hover:border-slate-700 hover:border-l-4"
              : "bg-slate-700 rounded-lg text-white w-96 h-48 hover:scale-105 transition-all shadow-md shadow-slate-500 hover:border-orange-400 hover:border-l-4"
          }
        >
          <div className="flex items-center justify-between px-3">
            <Image
              src={Logo}
              alt="Logo Itbank - Tarjetas"
              className="w-20 pt-1"
            />
            <CiMenuKebab
              className={
                tarjeta.id == 1
                  ? "cursor-pointer hover:text-slate-700 transition-colors text-xl"
                  : "cursor-pointer hover:text-orange-400 transition-colors text-xl"
              }
            />
          </div>
          <div className="flex items-center justify-between px-3 ">
            <p className="text-2xl tracking-widest">{tarjeta.numero}</p>
            <AiOutlineEye
              className={
                tarjeta.id == 1
                  ? "text-xl hover:text-slate-700 cursor-pointer"
                  : "text-xl hover:text-orange-400 cursor-pointer"
              }
            />
          </div>
          <div className="text-sm p-3">
            <span className="text-xs">Desde</span> {tarjeta.creacion}{" "}
            <span className="text-xs">Hasta</span> {tarjeta.vencimiento}
          </div>
          <div className="flex justify-between items-center text-lg px-3 tracking-widest uppercase">
            {tarjeta.titular}
            <div className="flex items-center gap-2 px-4 text-base">
              {tarjeta.id != 2 ? <RiVisaFill /> : <RiMastercardFill />}
              {tarjeta.tipo_tarjeta}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
