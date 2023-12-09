"use client";
import { useState } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import FormPrestamos from "./FormPrestamos";
import Resultado from "./Resultado";

// Seccion prestamos
const Prestamos = () => {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("3");
  const [total, setTotal] = useState(0);

  return (
    <>
      <Header />
      <SideBar />
      <section className="min-h-[calc(100vh-208px)] flex flex-col items-center">
        <h1 className="flex justify-center my-6 text-4xl text-center sm:mt-20">
          Simulador de préstamos
        </h1>
        <FormPrestamos
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          setTotal={setTotal}
        />
        {total === 0 ? (
          <p className="font-semibold text-md my-2 text-center">
            Ingrese una cantidad y un plazo para cotizar
          </p>
        ) : (
          <Resultado total={total} cantidad={cantidad} plazo={plazo} />
        )}
      </section>
      <Footer />
    </>
  );
};

export default Prestamos;
