import React from "react";
import { contact } from "../constants";
import styles from "../constants/styles";

const Contact = () => {
  return (
    <section className="w-[100%] flex flex-col items-center">
      <div className="flex flex-row bg-slate-20 m-2 rounded-xl ">
      
        <div className="flex flex-col justify-between">
          <div></div>
          <div className="m-10 flex justify-center">
            <h2 className="text-[30px] font-bold">Contact me...</h2>
          </div>
          <div className="flex flex-row m-2 justify-between ">
            {contact.map((red) => (
              <a href={red.link}>
                <div className="flex flex-col justify-between w-[150px] h-[150px] m-5 p-5 bg-slate-200 rounded-xl opacity-50 hover:opacity-100">
                  <div></div>
                  <div className="flex justify-center ">
                    <img className="flex w-[48px] h-[48px]" src={red.img} />
                  </div>
                  <h3 className="flex text-[20px] text-black font-bold justify-center">
                    {red.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
          <div></div>
        </div>
        
        <div>
          <div class="py-8 lg:py-16 px-10 mx-auto max-w-screen-md bg-slate-300 rounded-2xl">
            <h2 class={`${styles.heading2} text-black`}>
              Contact Us
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action="#" class="space-y-8">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-500	 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
