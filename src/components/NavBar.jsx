/** @format */

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isActive] = useState(false);
  return (
    <div className="w-full mt-7 navbar">
      <div className="flex justify-between items-center">
        <Link to="/" className="">
          <div className="text-3xl flex justify-start items-baseline">
            <h1 className="portfolio-name">Edema Ero </h1>
            <div className="text-2xl rounded-full  bg-purple-800 p-1 w-2 h-2 ml-1 animate__animated animate__backInDown"></div>
          </div>
        </Link>
        <div>
          <ul className="flex mdl:items-center mdl:flex-row flex-col mdl:space-x-8">
            <li>
              <NavLink to="/" className={isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={isActive ? "active" : ""}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={isActive ? "active" : ""}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
