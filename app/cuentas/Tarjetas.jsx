import Image from "next/image";
import {SiAmericanexpress } from "react-icons/si";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";
import Logo from "@/app/assets/images/logo-removebg.png";

// Obtener los datos de las tarjetas disponibles
const fetchTarjetas = (id) => {
  return fetch(`http://127.0.0.1:8000/tarjeta/tarjeta/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

// Componente con las tarjetas disponibles
export default async function Tarjetas() {
  const tarjetas = await fetchTarjetas(1);

  return (
    <div className="flex gap-8 my-4 md:flex-wrap md:justify-center sm:flex-wrap sm:justify-center">
      <div key={tarjetas.id_card} className="bg-orange-500 rounded-lg text-white w-96 h-48 hover:scale-105 transition-all shadow-md shadow-slate-500 hover:border-slate-700 hover:border-l-4">
      <div className="flex items-center justify-between px-3">
            <Image
              src={Logo}
              alt="Logo Itbank - Tarjetas"
              className="w-20 pt-1"
            />
            <CiMenuKebab
              className="cursor-pointer hover:text-orange-400 transition-colors text-xl"
            />
          </div>
          <div className="flex items-center justify-between px-3 ">
            <p className="text-2xl tracking-widest">{tarjetas.card_number}</p>
            <AiOutlineEye
              className= "text-xl hover:text-orange-400 cursor-pointer"
            />
          </div>
          <div className="text-sm p-3">
            <span className="text-xs">Desde</span> {tarjetas.grant_date}{" "}
            <span className="text-xs">Hasta</span> {tarjetas.expiration_date}
          </div>
          <div className="flex justify-between items-center text-lg px-3 tracking-widest uppercase">
            <div className="flex items-center gap-2 px-4 text-base">
              {<SiAmericanexpress />}
              {tarjetas.card_type}
            </div>
          </div>

      </div>
    </div>
  );
}
