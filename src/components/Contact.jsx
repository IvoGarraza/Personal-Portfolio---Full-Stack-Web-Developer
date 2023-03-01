import React from "react";
import { contact } from "../constants";
import styles from "../constants/styles";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="w-[100%] flex flex-col items-center">
      <div className="flex flex-row justify-around w-[100%] bg-slate-20 my-20 rounded-xl ">
        <div className="flex flex-col justify-around">
          <div></div>
          <div className="m-10 flex justify-center">
            <h2 className="text-[30px] font-bold">Redes para contactarme...</h2>
          </div>
          <div className="flex flex-row m-2 justify-between ">
            {contact.map((red) => (
              <a href={red.link}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  className="flex flex-col justify-between w-[150px] h-[150px] m-5 p-5 bg-slate-200 rounded-xl opacity-50 hover:opacity-100">
                  <div></div>
                  <div className="flex justify-center ">
                    <img className="flex w-[48px] h-[48px]" src={red.img} />
                  </div>
                  <h3 className="flex text-[20px] text-black font-bold justify-center">
                    {red.title}
                  </h3>
                </motion.div>
              </a>
            ))}
          </div>
          <div></div>
        </div>
        <div>
          <div class="py-8 lg:py-16 px-10 mx-auto max-w-screen-md bg-slate-300 rounded-2xl">
            <h2 class={`${styles.heading2} text-black text-center`}>
              Si quieres que te contacte a ti
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              ¿Tienes algun problema tecnico que requiera solución?<br />¿Quieres enviarme comentarios sobre algun trabajo o algo sobre codigo?
            </p>
            <form action="#" class="space-y-8">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Tu email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="nombre@dominio.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Cuentame de que se trata el mensaje"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Deja un mensaje..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-500	 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
