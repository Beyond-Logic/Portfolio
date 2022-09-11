/** @format */

import React from "react";

const Contact = () => {
  return (
    <div className="animate__animated animate__fadeIn mdl:mb-0 mb-20">
      <h1 className="mdl:text-5xl text-3xl mld:mt-10 mt-14 text-center mb-20">
        Get In Touch
      </h1>
      <form>
        <div className="flex mdl:justify-between mdl:items-center mdl:flex-row flex-col mdl:mt-20 mld:mb-0 mb-20 mdl:space-x-5 mdl:w-2/3 m-auto">
          <input
            type="text"
            placeholder="Name"
            className="mdl:px-10 py-5 border-2  border-b-black mdl:w-2/3 w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="mdl:px-10 py-5 border-2 border-b-black mdl:w-2/3 w-full"
          />
        </div>
        <div className="flex justify-center items-center mt-10">
          <textarea
            placeholder="Enter Message"
            rows={5}
            className="mdl:px-10 py-5 border-2 border-b-black border-black mdl:w-2/3  w-full mdl:text-left text-center"
          />
        </div>
        <div className="text-center mt-5">
          <button className="bg-purple-800 mdl:w-2/3 w-full py-4 text-white">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
