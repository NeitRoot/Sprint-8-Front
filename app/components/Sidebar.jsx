"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/images/logo-removebg.png";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="py-3 absolute top-0 left-0 text-blue-900 z-10">
        <button
          className="ml-8 mt-3 fixed"
          onClick={() => setOpen(true)}
          name="menu-hamburguesa"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-white hover:text-orange-400 transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {/* Menu sidebar */}
        <div
          className={`${
            open ? "w-80" : "w-0"
          } bg-primary-blue min-h-screen fixed top-0 left-0 transition-all shadow-md shadow-black`}
        >
          <div className={`${!open && "hidden"}`}>
            <div className="flex items-center justify-start gap-x-20">
              <button
                className="pl-4 text-white hover:text-orange-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Image src={Logo} alt="Logo ITBANK" className="w-24" />
            </div>
            {/* Links */}
            <div className="py-8 flex flex-col mb-10">
              <Link
                href={"/inicio"}
                className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mx-auto flex justify-center w-full"
              >
                Inicio
              </Link>
              <Link
                href={"/cuentas"}
                className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mx-auto flex justify-center w-full"
              >
                Cuentas
              </Link>
              <Link
                href={"/pago"}
                className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mx-auto flex justify-center w-full"
              >
                Pagos
              </Link>
              <Link
                href={"/transferencia"}
                className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mx-auto flex justify-center w-full"
              >
                Transferencias
              </Link>
              <Link
                href={"/prestamos"}
                className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mx-auto flex justify-center w-full"
              >
                Préstamos
              </Link>
              <Link
                href={"/conversor"}
                className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mx-auto flex justify-center w-full"
              >
                Conversor de moneda
              </Link>
            </div>
            <Link
              href={"/"}
              className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mx-auto flex justify-center w-full"
            >
              Cerrar sesión
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
