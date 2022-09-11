/** @format */

import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { TiCss3 } from "react-icons/ti";
import { DiJavascript, DiReact, DiWordpress } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="mdl:mb-0 mb-20 flex">
      <div className="flex mdl:flex-row flex-col-reverse">
        <div className="bg-purple-800 p-14 mdl:px-10 mdl:mt-10 mt-20 rounded-2xl">
          <div className="flex flex-col space-y-3 text-3xl text-white">
            <div className="flex space-x-3 animate__animated animate__flipInX">
              <div>HTML</div>
              <div>
                <AiFillHtml5 size={40} className="" />
              </div>
            </div>
            <div className="flex space-x-3 animate__animated animate__flipInX">
              <div>CSS</div>
              <div>
                <TiCss3 size={40} />
              </div>
            </div>
            <div className="flex space-x-3 animate__animated animate__flipInX">
              <div>Javascript</div>
              <div>
                <DiJavascript size={40} />
              </div>
            </div>
            {/* <div className="flex space-x-3 animate__animated animate__flipInX">
              <div>Typescript</div>
              <div>
                <SiTypescript size={40} />
              </div>
            </div> */}
            <div className="flex space-x-3 animate__animated animate__flipInX">
              <div>React</div>
              <div>
                <DiReact size={40} />
              </div>
            </div>
            {/* <div className="flex space-x-3 animate__animated animate__flipInX">
              <div>Redux</div>
              <div>
                <SiRedux size={40} />
              </div>
            </div> */}
            <div className="flex space-x-3 animate__animated animate__flipInX">
              <div>TailWind</div>
              <div>
                <SiTailwindcss size={40} />
              </div>
            </div>
            <div className="flex space-x-3 animate__animated animate__flipInX">
              <div>WordPress</div>
              <div>
                <DiWordpress size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
