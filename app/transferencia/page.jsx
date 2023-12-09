"use client";
import { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Transferencia from "./Transferencia";

// Seccion transferencias
const Transferencias = () => {
  const [show, setShow] = useState(false);
  const [datoTransaccion, setDatoTransaccion] = useState("00001");
  const [datoCuenta, setDatoCuenta] = useState("Trabajo");
  const [datoMotivo, setDatoMotivo] = useState("Sueldo");
  const [datoFecha, setDatoFecha] = useState("2023-09-01");
  const [datoTransferencia, setDatoTransferencia] = useState("300000");
  const [datosArray, setDatosArray] = useState([]);

  useEffect(() => {
    // Actualizar el array con cada modificacion
    const nuevoDato = {
      transaccion: datoTransaccion,
      cuenta: datoCuenta,
      motivo: datoMotivo,
      fecha: datoFecha,
      transferencia: datoTransferencia,
    };
    // Agregar nuevos datos al array
    setDatosArray([...datosArray, nuevoDato]);
  }, [datoCuenta, datoTransaccion, datoMotivo, datoFecha, datoTransferencia]);

  // Funciones para capturar inputs del form
  const transaccion = (datoTransaccion) => {
    setDatoTransaccion(datoTransaccion);
  };
  const cuenta = (datoCuenta) => {
    setDatoCuenta(datoCuenta);
  };
  const motivo = (datoMotivo) => {
    setDatoMotivo(datoMotivo);
  };
  const fecha = (datoFecha) => {
    setDatoFecha(datoFecha);
  };
  const transferencia = (datoTransferencia) => {
    setDatoTransferencia(datoTransferencia);
  };

  return (
    <>
      <Header />
      <SideBar />
      <section className="relative min-h-[calc(100vh-232px)]">
        <h1 className="flex justify-center my-6 text-4xl">Transferencias</h1>
        {/* Muestra el formulario para las transferencias */}
        <div className=" flex justify-center my-6 text-xl">
          <button
            className="relative bg-orange-400 p-4 rounded-2xl text-white hover:bg-primary-blue transition-colors"
            onClick={() => setShow(!show)}
            name="Realizar pago"
          >
            Realizar un pago
          </button>
          {show ? (
            <Transferencia
              transaccion={transaccion}
              cuenta={cuenta}
              motivo={motivo}
              fecha={fecha}
              transferencia={transferencia}
            />
          ) : null}
        </div>
        <div className="overflow-x-auto border rounded-md mt-4 mx-auto w-4/5 mb-4">
          <table className="w-full text-sm text-left text-gray-500 ">
            {/* Titulos */}
            <thead className="text-xs text-gray-700 uppercase">
              <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                  N° de transacción
                </th>
                <th scope="col" className="px-6 py-3 font-extrabold">
                  Cuenta
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                  Motivo
                </th>
                <th scope="col" className="px-6 py-3 font-extrabold">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                  Importe
                </th>
              </tr>
            </thead>
            {/* Mapeado de los datos obtenidos en el array */}
            <tbody>
              {datosArray.map((dato, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <th className="px-6 py-4 font-medium bg-gray-50">
                    {dato.transaccion}
                  </th>
                  <th className="px-6 py-4">{dato.cuenta}</th>
                  <th className="px-6 py-4 bg-gray-50 ">{dato.motivo}</th>
                  <td className="px-6 py-4">{dato.fecha}</td>
                  <td className="px-6 py-4 bg-gray-50 ">
                    $ {dato.transferencia}
                  </td>
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

export default Transferencias;
