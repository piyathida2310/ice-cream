import React from "react";

const form = () => {
  return (
    <div className="relative flex flex-col items-center justify-start text-5xl w-screen h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      <h1 className="bg-clip-text text-[70px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
        Ice-cream
      </h1>

      <input
        type="text"
        name="text"
        className="mt-20 shadow appearance-none border rounded p-3 text-zinc-500 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        placeholder="ชื่อ"
      />

      <input
        type="text"
        name="text"
        className="mt-20 shadow appearance-none border rounded p-3 text-zinc-500  leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        placeholder="นามสกุล"
      />

      <input
        type="text"
        name="text"
        className="mt-20 shadow appearance-none border rounded p-3 text-zinc-500  leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        placeholder="เบอร์"
      />

      <button
        type="button"
        className="text-white absolute bottom-10 right-[75px] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:scale-105 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-[35px] px-10 py-5 text-center me-2 mb-2"
      >
        Next
      </button>
    </div>
  );
};

export default form;
