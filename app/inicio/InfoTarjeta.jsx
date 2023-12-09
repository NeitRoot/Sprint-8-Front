"use client";
import { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";

// Componente con la info de la tarjeta n°1 para mostrar en inicio
export default function InfoTarjeta() {
  const [mostrarNum, setMostrarNum] = useState(true);
  const [numeroTarjeta, setNumeroTarjeta] = useState("");

  useEffect(() => {
    fetch('http://127.0.0.1:8000/tarjeta/tarjeta/1')
      .then((res) => res.json())
      .then((data) => setNumeroTarjeta(data));
  }, []);

  return (
    <>
      <div className="py-3 px-3 items-center gap-x-6">
        <p className="text-lg text-black uppercase">
          {numeroTarjeta.card_type}
        </p>
        <div className="flex items-center justify-between">
          {mostrarNum ? (
            <p className="text-slate-700 text-sm">**** **** **** ****</p>
          ) : (
            <p className="text-slate-700 text-sm">{numeroTarjeta.card_number}</p>
          )}
          <span
            onClick={() => {
              setMostrarNum(!mostrarNum);
            }}
          >
            <AiOutlineEye
              className="text-slate-700 hover:text-orange-400 transition-colors text-xl cursor-pointer"
              name="Mostrar/Ocultar numeros"
            />
          </span>
        </div>
      </div>
    </>
  );
}
