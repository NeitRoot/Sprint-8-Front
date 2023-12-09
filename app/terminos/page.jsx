import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";

export const metadata = {
  title: "ITBANK - Términos",
  description: "Seccion términos del sitio ITBANK",
};

// Seccion de terminos y condiciones ficticios
const Terminos = () => {
  return (
    <>
      <Header />
      <SideBar />
      <section className="flex h-screen md:mt-4 md:mb-4 ">
        <div className="w-full flex flex-col items-center justify-center ">
          <div className=" flex flex-col items-center">
            <h2 className="text-2xl font-inter font-bold mb-1">
              TÉRMINOS Y CONDICIONES
            </h2>
          </div>
          <div className="w-[60%] flex flex-col items-center justify-center bg-yellow-200 p-8 md:w-[80%] sm:w-[90%]">
            <p className="mb-2 font-bold">Vigente desde: 12/07/2023</p>
            <p>
              Los términos y condiciones de uso que se describen a continuación
              (en adelante, los “Términos y Condiciones”) constituyen las reglas
              de carácter vinculante, válido y vigente que regirán entre
              cualquier persona (en adelante, el “Usuario”, o en plural los
              “Usuarios”) que, mediante la aceptación de los Términos y
              Condiciones, inicie una relación contractual vía Contrato de
              Adhesión de Prestación de Servicios de Pago (en adelante, el
              “Contrato ITBANK”) con ITBANK Perú S.R.L. (en adelante, “ITBANK”),
              sus vinculadas, filiales, subsidiarias, empresas controlantes y/o
              controladas, empresas que formen parte de su grupo económico
              (actualmente o en el futuro), a las que pueda transferir su
              posición contractual o ceder sus derechos bajo el Contrato ITBANK.
              Los presentes Términos y Condiciones describen los derechos y
              responsabilidades del Usuario y de ITBANK respecto al servicio de
              procesamiento y gestión de pagos, la plataforma electrónica a
              través de la cual se realizarán dichos pagos y cualquier producto
              o servicio relacionado o complementario que ofrezca o pueda
              ofrecer ITBANK (conjuntamente, el “Servicio”). La aceptación de
              los Términos y Condiciones constituye un requisito previo para el
              registro como Usuario del Servicio y/o la utilización del mismo.
              Mediante la aceptación de los Términos y Condiciones, el Usuario
              declara haber leído, entendido y aceptado todas las condiciones
              establecidas en este documento y demás políticas y principios
              incorporados por referencia, accesibles a través de la URL
              incluidas en estos Términos y Condiciones. Cualquier persona que
              no acepte estos términos y condiciones generales, los cuales
              tienen un carácter obligatorio y vinculante, deberá abstenerse de
              utilizar los Servicios.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Terminos;
