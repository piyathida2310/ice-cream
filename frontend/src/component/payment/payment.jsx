import React, { useState } from "react";

function Summayselecticecream() {
  const [statuspayment, setstatuspayment] = useState("เงินสด");
  const data = {
    Payment_Method: statuspayment,
    Payment_Amount: "D12345",
    Payment_Date: "Pending",
    Payment_Status: "123 Main St, Springfield",
    Reference_Number: "2024-12-08",
  };
  const [CheckPayment, setCheckPayment] = useState(true);

  return (
    <body className=" overflow-hidden w-screen h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      <div className="flex justify-center flex-col items-center">
        <div>
          <h1 className="bg-clip-text text-[70px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Payment
          </h1>
        </div>

        <div className="w-[600px] mt-10">
          {CheckPayment ? (
            <div className="mb-5">
              <h1 className="text-lg font-bold mb-2">
                วิธีชำระเงิน: {data.Payment_Method}
              </h1>
              <button
                type="button"
                onClick={() => setstatuspayment("เงินสด")}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                เงินสด
              </button>
              <button
                type="button"
                onClick={() => setstatuspayment("บัตรเครดิต")}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                บัตรเครดิต
              </button>
            </div>
          ) : (
            <div className="mb-5">
              <h1 className="text-lg font-bold mb-2">
                วิธีชำระเงิน: {data.วิธีชำระเงิน}
              </h1>
              <button
                type="button"
                onClick={() => setstatuspayment("เงินสด")}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                เงินสด
              </button>
              <button
                type="button"
                onClick={() => setstatuspayment("บัตรเครดิต")}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                บัตรเครดิต
              </button>
            </div>
          )}

          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2">
              Payment_Amount: {data.Payment_Amount}
            </h1>
          </div>
          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2">
              Payment_Date: {data.Payment_Date}
            </h1>
          </div>
          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2">
              Payment_Status: {data.Payment_Status}
            </h1>
          </div>
          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2">
              Reference_Number: {data.Reference_Number}
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-end h-[80px] mt-[100px] px-[150px]">
          <button
            type="button"
            className="text-white text-xl h-[50px] w-[120px] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
          >
            Next
          </button>
        </div>
      </div>
    </body>
  );
}

export default Summayselecticecream;
