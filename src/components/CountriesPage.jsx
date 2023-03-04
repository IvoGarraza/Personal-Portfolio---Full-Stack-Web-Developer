import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import countries from '../assets/countries.jpg'

const CountriesPage = () => {
    return (
        <div className='bg-[#1B262C] h-[100%] font-ubuntu text-white'>
            <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className='w-[100%] h-[50px] flex items-center bg-port__black'>
                <Link to='/'><h2 className='m-4 text-white'>Atras</h2></Link>
            </motion.div>
            <div className='flex flex-col items-center my-4 mx-4'>
                <div>
                    <h2 className='font-bold m-10 text-3xl'>Pagina de Paises</h2>
                </div>
                <div >
                    <img className='w-[900px] rounded-xl' src={countries}></img>
                    <h3 className='font-bold my-10 text-xl'>Objetivos del proyecto</h3>
                    <ul className='list-disc'>
                        <li>Construir una App utlizando React, Redux, Node y Sequelize.</li>
                        <li>Afirmar y conectar los conceptos aprendidos en la carrera.</li>
                        <li>Aprender mejores prácticas.</li>
                        <li>Aprender y practicar el workflow de GIT.</li>
                        <li>Usar y practicar testing.</li>
                    </ul>
                </div>
                <div className='my-10 mx-4'>
                    <p>
                        El proyecto consiste en la construcción de una aplicación utilizando React, Redux, Node y Sequelize, con el objetivo de afirmar y conectar los conceptos aprendidos en el bootcamp, aprender mejores prácticas, practicar el workflow de GIT y usar y practicar testing. El proyecto tendrá una duración máxima de tres semanas y el boilerplate cuenta con dos carpetas: api y client, en las cuales se encontrará el código del back-end y el front-end, respectivamente.<br/><br/>

                        La aplicación que se construirá permitirá ver información de distintos países utilizando la API externa restcountries y a partir de ella se podrán buscar países, filtrarlos, ordenarlos y crear actividades turísticas. En cuanto al diseño visual, no habrá wireframes ni prototipos prefijados, sino que se tendrá libertad de hacerlo a gusto, pero se deberán aplicar los conocimientos de estilos vistos en el curso para que quede agradable a la vista. No se permitirá utilizar librerías externas para aplicar estilos a la aplicación.<br/><br/>

                        Se deberá desarrollar una aplicación de React/Redux que contenga una landing page con una imagen de fondo representativa al proyecto y un botón para ingresar al home (ruta principal), en la cual se encontrará un input de búsqueda para encontrar países por nombre, un área donde se verá el listado de países con su imagen de bandera, nombre y continente, botones/opciones para filtrar por continente y por tipo de actividad turística y botones/opciones para ordenar alfabéticamente y por cantidad de población los países. También se incluirá paginado para ir buscando y mostrando los siguientes países, 10 por página, mostrando los primeros 9 en la primera página.<br/> Además, se deberá desarrollar una ruta de detalle de país que incluirá los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente).
                    </p>
                </div>
                <div className='my-10 mx-4 text-center w-[50%]'>
                    <h3 className='mb-5'>Podes encontrar el link del proyecto publicado en github aca:</h3>
                    <a href='https://github.com/IvoGarraza/CountriesPage-IndividualProyect' className='border-white border-[1px]  rounded-[5px] w-[20%] p-2  text-white hover:text-black hover:bg-white hover:border-black'>Link de Github</a>
                </div>
            </div>
        </div>
    )
}

export default CountriesPage