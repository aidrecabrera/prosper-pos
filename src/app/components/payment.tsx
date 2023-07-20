import React from "react";

export default function page() {
  return (
    <>
      <h1 className="pb-2 text-center text-sm">Payment Method</h1>
      <div className="flex flex-row justify-between gap-2">
        <div className="border justify-center items-center text-center w-full p-3 rounded-lg text-sm">
          <h1>Cash</h1>
        </div>
        <div className="border justify-center items-center text-center w-full p-3 rounded-lg text-sm">
          <h1>E-Wallet</h1>
        </div>
        <div className="border justify-center items-center text-center w-full p-3 rounded-lg text-sm">
          <h1>Cash</h1>
        </div>
        <div className="border justify-center items-center text-center w-full p-3 rounded-lg text-sm">
          <h1>E-Wallet</h1>
        </div>
      </div>
    </>
  );
}
