/** @format */

import React from "react";
import { Skills } from "../components";

const Services = () => {
  return (
    <div className="flex justify-between mdl:items-center mdl:flex-row flex-col mt-3">
      <div>
        <h1 className="mb-5 text-base font-mono font-bold text-purple-800 animate__animated animate__rotateInDownLeft mdl:mt-0 mt-16">
          My Services
        </h1>
        <div className="mdl:text-3xl text-2xl space-y-3">
          <h1 className="hover:text-purple-800 cursor-pointer">
            Frontend Development
          </h1>
          <h1 className="hover:text-purple-800 cursor-pointer">
            Full Stack Development{" "}
          </h1>
          <h1 className="hover:text-purple-800 cursor-pointer">
            HTML/CSS Development
          </h1>
          <h1 className="hover:text-purple-800 cursor-pointer">
            WordPress Development
          </h1>
          <h1 className="hover:text-purple-800 cursor-pointer">
            Custom Web App Development
          </h1>
          <h1 className="hover:text-purple-800 cursor-pointer">
            CSS Design & Development
          </h1>
          <h1 className="hover:text-purple-800 cursor-pointer">
            Data Migration, Support & Maintenance
          </h1>
        </div>
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
};

export default Services;
