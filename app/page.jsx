import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/images/logo.png";

export const metadata = {
  title: "ITBANK - Inicio de sesión",
  description: "Seccion Inicio de sesión del sitio ITBANK",
};

// Seccion de inicio de sesion
export default function Home() {
  return (
    <>
      <section className="flex h-screen">
        <div className="w-[55%] flex flex-col justify-center items-center sm:w-screen">
          <div className="flex flex-col items-center">
            <Image
              src={Logo}
              alt="Logo"
              className="h-[5rem] w-[6rem] mt-[2rem]"
            />
            <h2 className="text-2xl font-inter font-bold tracking-wider mt-[1rem] mb-2">
              INICIAR SESIÓN
            </h2>
          </div>
          {/* Formulario de inicio de sesion */}
          <form className="flex flex-col items-center bg-white shadow-md rounded p-8 mx-auto sm:w-[95%]">
            <div className="mb-4 flex flex-col w-full">
              <label
                className="flex text-gray-400 text-sm font-bold mb-2"
                htmlFor="emailLogin"
              >
                Email
              </label>
              <input
                className="border-b-2 w-full text-gray-700 leading-tight focus:outline-none"
                id="emailLogin"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-6 flex flex-col w-full">
              <label
                className="flex text-gray-400 text-sm font-bold mb-2"
                htmlFor="passwordLogin"
              >
                Contraseña
              </label>
              <input
                className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
                id="passwordLogin"
                type="password"
                placeholder="Contraseña"
                required
              />
            </div>

            <Link href={"/inicio"}>
              <button
                className="w-72 flex justify-center bg-blue-800 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Iniciar sesión
              </button>
            </Link>

            <Link
              href={
                "https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dchrome-profile-chooser%26pli%3D1&ec=GAlAwAE&hl=es_419&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1056708794%3A1694488282615385&theme=glif"
              }
            >
              <button
                className="w-full flex justify-center items-center gap-2 bg-black hover:bg-zinc-900 text-white font-bold mt-4 py-2 px-16 rounded focus:outline-none focus:shadow-outline sm:w-72 sm:gap-1"
                type="button"
              >
                Iniciar sesión con
                <span className="text-2xl">
                  <FcGoogle />
                </span>
              </button>
            </Link>

            <div className="mt-4 flex justify-center">
              <p className="text-sm text-gray-700">
                ¿No tienes una cuenta?{" "}
                <Link href={"/registro"} className="text-blue-800">
                  Registrate
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className=" md:w-[45%] sm:hidden imagenInicio "></div>
      </section>
    </>
  );
}
