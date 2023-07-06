import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gea from "../../assets/cardsImages/gea.png";

const Gea = () => {
  return (
    <div className="bg-[#1B262C] h-[100%] font-ubuntu text-white">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="w-[100%] h-[50px] flex items-center bg-port__black"
      >
        <Link to="/">
          <h2 className="m-4 text-white">Atras</h2>
        </Link>
      </motion.div>
      <div className="flex flex-col items-center my-4 mx-4">
        <div>
          <h2 className="font-bold m-10 text-3xl">Gea website</h2>
        </div>
        <div>
          <img src={gea}></img>
        </div>
        <div className="m-2">
          <p>
            Esta página web de una empresa de estudios geotécnicos ofrece
            información detallada sobre los servicios que brinda a sus clientes.
            La página cuenta con una interfaz limpia y moderna, desarrollada en
            React y con estilos aplicados con Styled Components.
            <br />
            Los usuarios pueden navegar fácilmente por las distintas secciones
            de la página para obtener información sobre la empresa, sus áreas de
            especialización, los proyectos realizados, el equipo de
            profesionales, así como los métodos y herramientas que utilizan para
            llevar a cabo los estudios geotécnicos. Además, la página ofrece la
            posibilidad de solicitar un presupuesto personalizado, a través de
            un formulario que se encuentra disponible en la sección
            correspondiente. Los usuarios también pueden acceder a un blog con
            noticias y artículos relacionados con el ámbito de la geotecnia,
            para estar al día en las últimas tendencias y novedades.
            <br />
            <br />
            Una de las características más destacadas de esta página web es su
            sección de mapa interactivo, en la cual se pueden ver los lugares
            donde la empresa ha llevado a cabo estudios geotécnicos. Los
            usuarios pueden hacer clic en cada uno de los pines para obtener
            información sobre cada proyecto, incluyendo la fecha, la ubicación y
            el tipo de estudio realizado. En resumen, esta página web es una
            excelente opción para aquellos usuarios interesados en obtener
            información detallada y confiable sobre estudios geotécnicos, así
            como para aquellos que deseen solicitar servicios personalizados en
            este ámbito. Con una interfaz moderna y fácil de usar, y con estilos
            desarrollados con Styled Components, esta página es una muestra de
            la capacidad de React para desarrollar aplicaciones web robustas y
            escalables, incluyendo funcionalidades avanzadas como el mapa
            interactivo.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="m-5">
            Podes encontrar el link del proyecto publicado en github aca:
          </h3>
          <a
            href="https://github.com/IvoGarraza/gea-web"
            className="border-white border-[1px]  rounded-[5px] w-[30%] p-2  text-white hover:text-black hover:bg-white hover:border-black"
          >
            Link de Github
          </a>
          <a
            href="https://mellifluous-meringue-160b7a.netlify.app/"
            className="border-white border-[1px]  rounded-[5px] w-[40%] p-2 m-2 text-white hover:text-black hover:bg-white hover:border-black"
          >
            Pagina desplegada
          </a>
          <p>(La pagina esta desplegada en una app gratuita, el dominio no esta definido con la empresa)</p>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default Gea;
