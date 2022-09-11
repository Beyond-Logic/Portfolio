/** @format */

import React from "react";
import ProfilePhoto from "../assets/EdemaEro.jpg";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="flex justify-between mdl:items-center mdl:flex-row flex-col-reverse mdl:mt-20 mld:mb-0 mb-20 ">
      <div className="mdl:w-2/3 w-full">
        <h4 className="mb-3 font-light text-lg animate__animated animate__bounceInLeft">
          HI THERE
        </h4>
        <h3 className="font-bold text-2xl text-[#6b21a8] tracking-wide mb-3">
          I AM EDEMA ERO
        </h3>
        <h1 className="mdl:text-4xl text-3xl font-extrabold animate__animated animate__fadeIn">
          A Professional Frontend Developer.
        </h1>
        <p className="mt-3 mdl:w-3/4">
          Software Engineer with a passion for frontend development who is
          looking for a challenging experience that will aid in the improvement
          of current skills and development of new ones.
        </p>
        <div className="flex mt-5 space-x-3 social-icons">
          <AiFillTwitterSquare
            size={40}
            className="rounded-full cursor-pointer twitter"
            color="#6b21a8"
          />
          <AiFillLinkedin
            size={40}
            className="rounded-full cursor-pointer linkedin"
            color="#6b21a8"
          />
          <a
            href="https://github.com/Beyond-Logic/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub
              size={40}
              className="rounded-full cursor-pointer github"
              color="#6b21a8"
            />
          </a>
        </div>
      </div>
      <div className="mdl:mt-0 mt-20 mdl:mb-0 mb-10">
        <img
          src={ProfilePhoto}
          alt="Edema Ero"
          className="rounded-full border-spacing-4 border-purple-800 md:border-l-8 mdl:w-[400px] w-[200px] animate__animated animate__slideInRight"
        />
      </div>
    </div>
  );
};

export default Hero;
