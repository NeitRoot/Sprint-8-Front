import Link from "next/link";

// Obtener los datos de la cuenta n° 1 para mostrar en inicio - - - - 8/12: toma por id definido
const fetchCuentas = () => {
  return fetch(`http://127.0.0.1:8000/cuenta/cuenta/1`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

// Componente con la info de la cuenta n° 1 para mostrar en inicio
export default async function Cuenta() {
  const cuentas = await fetchCuentas();

  return (
    <>
      <div
        key={cuentas.id}
        className="bg-slate-50 w-80 rounded-md my-4 min-h-[10rem] border-l-4 border-orange-400 shadow-md shadow-slate-700"
      >
        <h2 className="text-black font-bold text-center text-lg uppercase pt-2">
           {cuentas.account_type}
        </h2>
        <div className="flex py-5 px-2 items-center">
          <p className="text-slate-800 text-3xl font-medium mx-auto">
            $ {cuentas.balance}
          </p>
        </div>
        <div className="text-center">
          <Link href={"/cuentas"}>
            <button className="hover:text-orange-400 transition-colors bg-slate-50 text-black py-1 px-2 rounded my-1 text-lg font-semibold">
              Ver más cuentas
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
