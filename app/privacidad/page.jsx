import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";

export const metadata = {
  title: "ITBANK - Privacidad",
  description: "Seccion Privacidad del sitio ITBANK",
};

// Seccion de privacidad para la pagina
const Privacidad = () => {
  return (
    <>
      <Header />
      <SideBar />
      <section className="flex h-screen">
        <div className="w-full flex flex-col items-center justify-center">
          <div className=" flex flex-col items-center">
            <h2 className="text-2xl font-inter font-bold mb-5 md:ml-16">
              Declaración de privacidad y confidencialidad de la información de
              ITBANK
            </h2>
          </div>
          <div className="w-[60%] flex flex-col items-center justify-center bg-yellow-200 p-8 md:w-[80%] sm:w-[90%]">
            <p className="mb-2 font-bold">
              Versión actualizada al 24 de septiembre de 2023.
            </p>
            <p>
              En ITBANK entendemos a la protección de los datos personales como
              una oportunidad para generar valor para nuestros usuarios.
              Haciendo un uso responsable de la información personal, no sólo
              protegemos la privacidad de quienes nos confiaron sus datos, sino
              que les permitimos operar con seguridad y confianza en nuestro
              ecosistema. Por eso, tu privacidad es muy importante para nosotros
              y nos esforzamos para protegerla. ITBANK, con el fin de poder
              brindarte sus servicios, trata, recolecta y en algunos casos da a
              conocer información sobre las personas que, como vos, son usuarios
              y visitantes de los sitios web y/o aplicaciones móviles, conforme
              se detalla aquí (las Plataformas y los Servicios,
              respectivamente). Esta Declaración de Privacidad y
              Confidencialidad de la Información de ITBANK (la Declaración de
              Privacidad) describe la información que ITBANK recolecta y trata
              sobre vos y lo que puede hacer con ella. Esta Declaración de
              Privacidad forma parte de los Términos y Condiciones Generales de
              ITBANK. Prestar tu consentimiento voluntario, expreso e informado
              a esta Declaración de Privacidad es un requisito esencial para
              poder contratar y/o tener cualquier tipo de relación con ITBANK,
              dependiendo de la legislación aplicable en cada país.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Privacidad;
