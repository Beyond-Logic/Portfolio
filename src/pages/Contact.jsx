/** @format */

import React, { useEffect, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name,
    email,
    message,
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    setForm({
      name: name,
      email: email,
      message: message,
    });
  }, [name, email, message]);

  const handleSubmit = (e) => {
    e.prevent.default();
    setForm(form);
  };

  console.log(form);
  return (
    <div className="animate__animated animate__fadeIn mdl:mb-0 mb-20">
      <h1 className="mdl:text-5xl text-3xl mld:mt-10 mt-14 text-center mb-20">
        Get In Touch
      </h1>

      <div className="flex mdl:justify-between mdl:items-center mdl:flex-row flex-col mdl:mt-20 mld:mb-0 mb-20 mdl:space-x-5 mdl:w-2/3 m-auto">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          className="mdl:px-10 py-5 border-2  border-b-black mdl:w-2/3 w-full"
          onChange={onChangeName}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          className="mdl:px-10 py-5 border-2 border-b-black mdl:w-2/3 w-full"
          onChange={onChangeEmail}
        />
      </div>
      <div className="flex justify-center items-center mt-10">
        <textarea
          placeholder="Enter Message"
          name="name"
          value={message}
          rows={5}
          className="mdl:px-10 py-5 border-2 border-b-black border-black mdl:w-2/3  w-full mdl:text-left text-center"
          onChange={onChangeMessage}
        />
      </div>
      <div className="text-center mt-5">
        <button
          type="submit"
          className="bg-purple-800 mdl:w-2/3 w-full py-4 text-white"
          onSubmit={handleSubmit}
        >
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default Contact;
