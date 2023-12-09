"use client";
import { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Pagar from "./Pagar";

// Seccion Pagos
const Pagos = () => {
  const [show, setShow] = useState(false);
  const [datosFactura, setDatosFactura] = useState("FCC-0000000001");
  const [datosEmpresa, setDatosEmpresa] = useState("ITBA");
  const [datosDescripcion, setDatosDescripcion] = useState(
    "Cuota Full Stack Developer"
  );
  const [datosVencimiento, setDatosVencimiento] = useState("2023-09-01");
  const [datosMonto, setDatosMonto] = useState("40.000");
  const [datosArray, setDatosArray] = useState([]);

  useEffect(() => {
    // Actualizar el array con cada modificacion
    const nuevoDato = {
      factura: datosFactura,
      empresa: datosEmpresa,
      descripcion: datosDescripcion,
      vencimiento: datosVencimiento,
      monto: datosMonto,
    };
    // Agregar nuevos datos al array
    setDatosArray([...datosArray, nuevoDato]);
  }, [
    datosEmpresa,
    datosFactura,
    datosMonto,
    datosDescripcion,
    datosVencimiento,
  ]);

  // Funciones para capturar inputs del form
  const empresa = (datoEmpresa) => {
    setDatosEmpresa(datoEmpresa);
  };
  const factura = (datoFactura) => {
    setDatosFactura(datoFactura);
  };
  const descripcion = (datoDescripcion) => {
    setDatosDescripcion(datoDescripcion);
  };
  const vencimiento = (datoVencimiento) => {
    setDatosVencimiento(datoVencimiento);
  };
  const monto = (datoMonto) => {
    setDatosMonto(datoMonto);
  };

  return (
    <>
      <Header />
      <SideBar />
      <section className="relative min-h-[calc(100vh-232px)]">
        <h1 className="flex justify-center my-6 text-4xl">Pagos</h1>
        {/* Muestra el formulario para realizar los pagos */}
        <div className=" flex justify-center my-6 text-xl">
          <button
            className="relative bg-orange-400 p-4 rounded-2xl text-white hover:bg-primary-blue transition-colors"
            onClick={() => setShow(!show)}
            name="Realizar pago"
          >
            Realizar un pago
          </button>
          {show ? (
            <Pagar
              factura={factura}
              empresa={empresa}
              descripcion={descripcion}
              vencimiento={vencimiento}
              monto={monto}
            />
          ) : null}
        </div>
        <div className=" overflow-x-auto border rounded-md mt-4 mx-auto w-4/5 mb-4">
          <table className="w-full text-sm text-left text-gray-500">
            {/* Titulos */}
            <thead className="text-xs text-gray-700 uppercase">
              <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                  N° de factura
                </th>
                <th scope="col" className="px-6 py-3 font-extrabold">
                  Empresa
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                  Motivo
                </th>
                <th scope="col" className="px-6 py-3 font-extrabold">
                  Vencimiento
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                  Importe a abonar
                </th>
              </tr>
            </thead>
            {/* Mapeado de los datos obtenidos en el array */}
            <tbody>
              {datosArray.map((dato, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <th className="px-6 py-4 font-medium bg-gray-50">
                    {dato.factura}
                  </th>
                  <th className="px-6 py-4">{dato.empresa}</th>
                  <th className="px-6 py-4 bg-gray-50 ">{dato.descripcion}</th>
                  <td className="px-6 py-4">{dato.vencimiento}</td>
                  <td className="px-6 py-4 bg-gray-50 ">$ {dato.monto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pagos;
