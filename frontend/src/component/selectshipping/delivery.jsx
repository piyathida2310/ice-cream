import React, { useState } from "react";

function Delivery() {
  const data = {
    deliveryid: "D12345",
    status: "Pending",
    address: "123 Main St, Springfield",
    date: "2024-12-08",
    name: "John Doe",
    orderid: "O67890",
  };
  const [checkaddress, setCheckAddress] = useState(false);

  return (
    <body className=" overflow-hidden w-screen h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      {checkaddress ? (
        <div className="flex justify-center flex-col items-center">
          <div>
            <h1 className="bg-clip-text text-[70px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
              Delivery
            </h1>
          </div>
          <div className="w-[600px] mt-10">
            <div className="mb-5">
              <h1 className="text-lg font-bold mb-2">
                Delivery ID: {data.deliveryid}
              </h1>
              <h1 className="text-lg font-bold mb-2">Status: {data.status}</h1>
            </div>
            <div className="mb-5">
              <h1 className="text-lg font-bold mb-2">
                Address: {data.address}
              </h1>
              <h1 className="text-lg font-bold mb-2">Date: {data.date}</h1>
            </div>
            <div className="mb-5">
              <h1 className="text-lg font-bold mb-2">Name: {data.name}</h1>
              <h1 className="text-lg font-bold mb-2">
                Order ID: {data.orderid}
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-end h-[80px] mt-[100px] px-[150px]">
            <button
              type="button"
              onClick={() => setCheckAddress(!checkaddress)}
              className="text-white text-xl h-[50px] w-[120px] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <div>
            <h1 className="bg-clip-text text-[70px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
              Delivery
            </h1>
          </div>
          <div className="w-[600px] mt-10 flex justify-center">
            <div className="w-[100%] ">
              <label className="block mb-5 text-4xl font-medium text-white text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-lg shadow-lg">
                Address
              </label>
              <textarea
                type="text"
                className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="w-full flex justify-end h-[80px] mt-[100px] px-[150px]">
            <button
              type="button"
              onClick={() => setCheckAddress(!checkaddress)}
              className="text-white text-xl h-[50px] w-[120px] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
            >
              savedata
            </button>
          </div>
        </div>
      )}
    </body>
  );
}

export default Delivery;
