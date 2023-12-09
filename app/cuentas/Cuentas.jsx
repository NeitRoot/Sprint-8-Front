import Link from "next/link";

// Obtener los datos de las cuentas disponibles - - - 
const fetchCuentas = (id) => {
   return fetch(`http://127.0.0.1:8000/cuenta/cuenta/${id}`)
    .then((res) => res.json());

 };

 // Componente con las cuentas disponibles
export default async function Cuentas() {
   const cuentas = await fetchCuentas(1);
   return (
    <div className="flex gap-14 md:flex-wrap md:justify-center sm:flex-wrap sm:justify-center">
       <div key={cuentas.account_id} className="bg-slate-50 border-l-4 border-y-4 border-y-slate-50 border-orange-400 shadow-md shadow-slate-700 w-96 rounded-md text-xl p-3 sm:w-80 transition-all hover:border-orange-400 hover:border-4">
        <h5 className="text-black font-bold text-center text-lg uppercase">
            {cuentas.account_type}
          </h5>
          <div className="py-4 px-2">
            <ul>
              <li>
                <p className="text-slate-800">
                  <span className="font-bold">N° de cuenta:</span>{" "}
                  {cuentas.account_id}
                </p>
              </li>
              <li>
                <p className="text-slate-800">
                  <span className="font-bold">Saldo: </span>$ {cuentas.balance}
                </p>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <Link href={`/cuentas/${cuentas.account_id}`}>
              <button className="hover:text-orange-400 transition-colors bg-slate-50 text-black py-1 px-2 rounded my-1 text-lg font-semibold">
                Ver detalle de la cuenta
              </button>
            </Link>
          </div>
        </div>
    </div>
  );
}
