import React from "react";
import GetItems from "../api/getitems";

export default function Order() {
  const arrayOfItems = GetItems();

  const handleTestButtonClick = () => {
    console.log(arrayOfItems); // Updated array with the new item
  };

  return (
    <>
      <div className="flex justify-center pt-3 pb-3">
        <button
          className="bg-white text-slate-950 font-bold w-full h-12 rounded-xl"
          onClick={() => alert("Success!")}
        >
          ORDER
        </button>
      </div>
      <div className="flex justify-center pt-3 pb-3">
        <button
          className="bg-white text-slate-950 font-bold w-full h-12 rounded-xl"
          onClick={handleTestButtonClick}
        >
          TEST
        </button>
      </div>
    </>
  );
}
