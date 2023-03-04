import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { hoobank } from '../assets'

const Bank = () => {
    return (
        <div className='bg-[#1B262C] h-[100%] font-ubuntu text-white'>
            <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className='w-[100%] h-[50px] flex items-center bg-port__black'>
                <Link to='/'><h2 className='m-4 text-white'>Atras</h2></Link>
            </motion.div>
            <div className='flex flex-col items-center my-4 mx-4'>
                <div>
                    <h2 className='font-bold m-10 text-3xl'>Simulacion de pagina de banco digital</h2>
                </div>
                <div>
                    <img src={hoobank} className='w-[600px] m-8' />
                </div>
                <div>
                    En este proyecto he creado una simulación de un sitio web de un banco digital utilizando React y Tailwind CSS. El objetivo de este proyecto fue desarrollar una interfaz de usuario atractiva y funcional que permita a los usuarios interactuar con diferentes funciones bancarias de manera segura y eficiente.
                    <br></br>

                    Utilicé React para construir la aplicación web, lo que me permitió crear componentes modulares que se pueden reutilizar en diferentes partes del sitio web. Además, React me permitió utilizar el estado y los efectos para gestionar los datos de la aplicación y actualizar la interfaz de usuario en tiempo real.
                    <br/>
                    Tailwind CSS fue la biblioteca de estilos que utilicé en este proyecto. Me permitió crear diseños rápidamente gracias a sus clases predefinidas y reutilizables. Además, su sistema de diseño responsivo me permitió crear un sitio web que se adapta a diferentes tamaños de pantalla.
                    <br/>
                    La simulación del sitio web incluye diferentes funciones bancarias, como la visualización de saldos, transferencias bancarias, pagos de facturas y configuración de notificaciones. También he incluido medidas de seguridad, como la autenticación de usuarios y la verificación de transacciones.
                    <br/>
                    En resumen, este proyecto me permitió demostrar mis habilidades en el desarrollo de aplicaciones web utilizando React y Tailwind CSS. La simulación del sitio web de un banco digital es un ejemplo práctico de cómo estas tecnologías pueden ser utilizadas para crear interfaces de usuario atractivas y funcionales en aplicaciones del mundo real.
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Bank