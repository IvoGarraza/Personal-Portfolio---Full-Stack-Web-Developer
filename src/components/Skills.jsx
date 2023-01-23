import React, { useEffect } from "react";
import { skills } from "../constants";
import Card from "./Cards";
import AOS from "aos";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  const elSwitchs = document.querySelectorAll(".elSwitch");
  elSwitchs.forEach((e) => {
    e.addEventListener("click", function () {
      if (e.classList.contains("left-[155px]")) {
        e.classList.remove("left-[155px]");
        e.classList.add("left-1");
      } else {
        e.classList.remove("left-1");
        e.classList.add("left-[155px]");
      }
    });
  });

  return (
    <div className="items-center text-center">
      <h2 className="font-bold h-[10vh] m-10">Skills</h2>
      <div>
        <div
          role="tablist"
          aria-label="tabs"
          class="relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition"
        >
          <div class="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md"></div>
          <button
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabindex="0"
            class="relative block h-10 px-6 tab rounded-full"
          >
            <span class="text-gray-800">First Tab</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1"
            class="relative block h-10 px-6 tab rounded-full"
          >
            <span class="text-gray-800">Second Tab</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-3"
            id="tab-3"
            tabindex="-1"
            class="relative block h-10 px-6 tab rounded-full"
          >
            <span class="text-gray-800">Third Tab</span>
          </button>
        </div>
        <div class="mt-6 relative rounded-3xl bg-purple-50">
          <div
            role="tabpanel"
            id="panel-1"
            class="tab-panel p-6 transition duration-300"
          >
            <h2 class="text-xl font-semibold text-gray-800">First tab panel</h2>
            <p class="mt-4 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              dolores voluptate temporibus, atque ab eos, delectus at ad hic
              voluptatem veritatis iure, nulla voluptates quod nobis doloremque
              eaque! Perferendis, soluta.
            </p>
          </div>
          <div
            role="tabpanel"
            id="panel-2"
            class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
          >
            <h2 class="text-xl font-semibold text-gray-800">
              Second tab panel
            </h2>
            <p class="mt-4 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              dolores voluptate temporibus, atque ab eos, delectus at ad hic
              voluptatem veritatis iure, nulla voluptates quod nobis doloremque
              eaque! Perferendis, soluta.
            </p>
          </div>
          <div
            role="tabpanel"
            id="panel-3"
            class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
          >
            <h2 class="text-xl font-semibold text-gray-800">Third tab panel</h2>
            <p class="mt-4 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              dolores voluptate temporibus, atque ab eos, delectus at ad hic
              voluptatem veritatis iure, nulla voluptates quod nobis doloremque
              eaque! Perferendis, soluta.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-flow-row gap-4 justify-center content-center">
        {skills.map((skill, index) => (
          <Card title={skill.title} img={skill.img} color={skill.color}></Card>
        ))}
      </div>
    </div>
  );
}

export default Skills;
