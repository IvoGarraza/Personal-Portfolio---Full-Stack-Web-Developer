import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ducky from '../../assets/cardsImages/rubber-ducky.png' 
import arduino  from "../../assets/cardsImages/arduino.png";

const RubberDucky = () => {
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
          <h2 className="font-bold m-10 text-3xl">
            Rubber Ducky con Arduino Uno
          </h2>
        </div>
        <div>
          <img src={arduino} className="w-[600px] m-8" />
        </div>
        <div className="m-5">
          El proyecto consiste en convertir una placa de Arduino Uno en un
          dispositivo HID (Human Interface Device) capaz de realizar acciones
          automatizadas en un ordenador. Para ello, se utiliza un código
          personalizado que convierte la placa en un Rubber Ducky, un tipo de
          dispositivo utilizado comúnmente en pruebas de seguridad informática.
          Una vez cargado el código en la placa, esta se puede conectar a
          cualquier ordenador mediante un cable USB. El ordenador reconoce la
          placa como un dispositivo HID, lo que permite realizar acciones de
          manera automática. Por ejemplo, se pueden ejecutar comandos de
          teclado, mover el cursor del ratón o incluso escribir texto en un
          documento. El proyecto incluye el desarrollo del código necesario para
          convertir la placa en un Rubber Ducky, así como el diseño y
          construcción de la placa de Arduino. El proyecto también incluye la
          documentación necesaria para que otros usuarios puedan replicar el
          proyecto, incluyendo una lista de materiales y un tutorial paso a
          paso. En resumen, este proyecto en Arduino Uno es una excelente opción
          para aquellos usuarios interesados en la seguridad informática y la
          automatización de tareas. Con la conversión de la placa en un Rubber
          Ducky, se pueden realizar acciones automatizadas en un ordenador de
          manera rápida y sencilla. Además, el proyecto incluye toda la
          documentación necesaria para que otros usuarios puedan replicar el
          proyecto y personalizarlo según sus necesidades.
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default RubberDucky;
