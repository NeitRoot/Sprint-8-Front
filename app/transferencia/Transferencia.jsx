"use client";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Transferencia = ({
  transaccion,
  cuenta,
  motivo,
  fecha,
  transferencia,
}) => {
  const [show, setShow] = useState(true);
  const [inputTransaccion, setInputTransaccion] = useState("");
  const [inputCuenta, setInputCuenta] = useState("");
  const [inputMotivo, setInputMotivo] = useState("");
  const [inputFecha, setInputFecha] = useState("");
  const [inputTransferencia, setInputTransferencia] = useState("");

  // Captura datos de la transferencia y oculta el formulario
  const datosForm = () => {
    transaccion(inputTransaccion);
    cuenta(inputCuenta);
    motivo(inputMotivo);
    fecha(inputFecha);
    transferencia(inputTransferencia);
    setShow(false);
  };

  return (
    <>
      {show ? (
        <section className="absolute top-0 left-0 bottom-0 right-0 mx-auto">
          <div className="w-[100%] flex flex-col items-center justify-center sm:w-full">
            {/* Formulario */}
            <form className="relative flex flex-col items-center bg-white shadow-md rounded p-8 mx-auto sm:w-[85%]">
              <AiOutlineClose
                onClick={() => setShow(false)}
                className="cursor-pointer absolute top-3 right-3"
              />
              <h2 className="text-2xl font-inter font-bold uppercase tracking-wider mt-[1rem] mb-2">
                Transferencia
              </h2>

              <div className="mb-6 flex flex-col w-full">
                <label
                  className="flex text-gray-700 text-sm font-bold mb-2"
                  htmlFor="transaccion"
                >
                  N° de transacción
                </label>
                <input
                  className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
                  id="transaccion"
                  type="text"
                  placeholder="00001"
                  value={inputTransaccion}
                  onChange={(e) => setInputTransaccion(e.target.value)}
                />
              </div>

              <div className="mb-4 flex flex-col w-full">
                <label
                  className="flex text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cuenta"
                >
                  Cuenta
                </label>
                <input
                  className="border-b-2 w-full text-gray-700 leading-tight focus:outline-none"
                  id="cuenta"
                  type="text"
                  placeholder="Trabajo"
                  value={inputCuenta}
                  onChange={(e) => setInputCuenta(e.target.value)}
                />
              </div>

              <div className="mb-6 flex flex-col w-full">
                <label
                  className="flex text-gray-700 text-sm font-bold mb-2"
                  htmlFor="motivo"
                >
                  Motivo
                </label>
                <input
                  className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
                  id="motivo"
                  type="text"
                  placeholder="Motivo del pago"
                  value={inputMotivo}
                  onChange={(e) => setInputMotivo(e.target.value)}
                />
              </div>

              <div className="mb-6 flex flex-col w-full">
                <label
                  className="flex text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fecha"
                >
                  Fecha
                </label>
                <input
                  className="border-b-2 w-full text-gray-400 leading-tight focus:outline-none"
                  id="fecha"
                  type="date"
                  placeholder="Fecha de transferencia"
                  value={inputFecha}
                  onChange={(e) => setInputFecha(e.target.value)}
                />
              </div>

              <div className="mb-6 flex flex-col w-full">
                <label
                  className="flex text-gray-700 text-sm font-bold mb-2"
                  htmlFor="montoTransferencia"
                >
                  Monto de la transferencia
                </label>
                <div className="flex items-center">
                  <p className=" text-gray-700 mr-1">$</p>
                  <input
                    className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
                    id="montoTransferencia"
                    type="number"
                    placeholder="1000"
                    value={inputTransferencia}
                    onChange={(e) => setInputTransferencia(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div
                  className="w-72 flex justify-center text-center bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline uppercase sm:w-48 hover:cursor-pointer"
                  onClick={() => datosForm()}
                >
                  Realizar transferencia
                </div>
              </div>
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Transferencia;
